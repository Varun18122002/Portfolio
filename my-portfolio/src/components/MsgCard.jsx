import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';

const MsgCard = ({ onClose, title, message }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: '100vh' }} 
        animate={{ y: 0 }} 
        exit={{ y: '100vh' }} 
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-center"
      >
        <div className="bg-tertiary bg-opacity-75 flex justify-center items-center fixed inset-0">
          <div className="bg-custom-black w-96 rounded-lg justify-center items-center p-8">
            <h2 className= {styles.heroSubText} >{title}</h2>
            <p className={styles.sectionSubText}>{message}</p>
            <button onClick={onClose} className="bg-tertiary hover:bg-red-500 text-white px-4 py-2 mt-4 rounded-md">Close</button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MsgCard;