import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import MsgCard from './MsgCard';

const Contact = () => {
  const text = "Say Hello!!";
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      setModalTitle("Error!");
      setModalMessage("Please provide a valid email address.");
      setShowModal(true);
      setLoading(false);
      return;
    }
  
    emailjs
      .send(
        'service_6ebqdyl',
        'template_sx6vwtp',
        {
          from_name: form.name,
          to_name: "Varun S",
          from_email: form.email,
          to_email: "varunpsm4373@gmail.com",
          message: form.message + "  " + form.email,
        },
        'MdThBUG1aviJJqvOg',
      )
      .then(
        () => {
          setLoading(false);
          setModalTitle("Success!");
          setModalMessage("Thank you for contacting. I will get back to you as soon as possible.");
          setShowModal(true);
          setForm({ name: "", email: "", message: "" });
          
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setModalTitle("Error!");
          setModalMessage("Ahh, something went wrong. Please try again.");
          setShowModal(true);
        }
      );
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] p-8 rounded-2xl'>
        <motion.div className='justify-center items-center' variants={slideIn('left', 'tween', 0.2, 1)}>
          {text.split("").map((letter, index) => (
            <motion.span className={styles.heroSubText} key={index} initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Name </span>
            <input type='text' name='name' value={form.name} onChange={handleChange} placeholder='What is your name?' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Email </span>
            <input type='email' name='email' value={form.email} onChange={handleChange} placeholder='What is your email?' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea type='text' name='message' value={form.message} onChange={handleChange} placeholder='What do you want to say?' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <div className="flex justify-end">
            <button type='submit' className='bg-tertiary py-3 px-8 mt-3 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>

      {showModal && <MsgCard onClose={closeModal} title={modalTitle} message={modalMessage} />}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
