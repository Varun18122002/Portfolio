
import {
  mobile,black,
    backend,deep2,kavach,karunya,medium,linked,
    web,
    javascript,social,deep,tn,
    tensor,
    python,
    java,
    deepstream,
    html,
    css,
    reactjs,
    pytorch,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },

  ];
  
  const services = [
    {
      title: "Web/Mobile Developer",
      icon: web,
    },
    {
      title: "AI/ML Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },

  ];
  
  const technologies = [

    {
      name: "Py Torch",
      icon: pytorch,
    },
    {
      name: "Tensor Flow",
      icon: tensor
    },
    
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Pyhton",
      icon: python
    },
    {
      name: "Java",
      icon:java
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: 'Nvidia Deepstream',
      icon: deepstream,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Bachelor degree",
      company_name: "Karunya Institute of Science and Technology",
      icon: karunya,
      iconBg: "#E6DEDD",
      date: "June 2020 - May 2024",
      points: [
        "Enter college for Computer Science of Engineering in 2020 ",
        "Attended two hackathons in a year",
        "Worked in various projects and joined in Cyber Security Club as a member",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "TN Police Hackathon",
      icon: tn,
      iconBg: "#383E56",
      date: "March 2023",
      points: [
        "Develop a Youtube Video Scrapping tool",
        "Found Profanity words in the videos comments and made sentiment analysis for both english and tamil",
        "Used tools like whisper ai , nltk and etc",
        "And made few insights from the given input.",
      ],
    },
    {
      title: "React Developer",
      company_name: "Kavach Hackathon",
      icon: kavach,
      iconBg: "#E6DEDD",
      date: "August 2023",
      points: [
        "Developing and maintaining web applications using React.js and for backend used django.",
        "Developed a plug and play audit tool",
        "Used various api's and protocols to host the site",
      ],
    },
    {
      title: "Final year Project",
      company_name: "Cross Camera Detection",
      icon: deepstream,
      iconBg: "#383E56",
      date: "Dec 2023 - April 2024",
      points: [
        "Develop a cross camera solution using Nvidia's Deepstream.",
        "Using various tools like docker , kafka , milvus and etc the tool was built.",
        "Using React js, node js and express js the web services were built to view the output.",
        "And used Kibana Dashboard for getting various video data insights.",
      ],
    },
    
  ];
  
  const blogs = [
    {
      title : "Nvidia Deepstream",
      description: "Shared my experience with people who are eager to work with deepstream and the python binding so this would be like a beginners guide.",
      tags: [
        {
          name: "Nvidia",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
      ],
      image: deep2,
      source_code_link: "https://medium.com/@varunpsm4373/nvidias-deepstream-and-the-pipeline-516cbcd25255",
    },
    
  ];
  
  const projects = [
    {
      name: "Social Eye",
      description:
        "Web-based platform to find profanity and sentiment analysis of the comments and the audio in a youtube video.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "whisper ai",
          color: "green-text-gradient",
        },
        {
          name: "nltk tools",
          color: "pink-text-gradient",
        },
      ],
      image: social,
      source_code_link: "https://github.com/Varun18122002/TN-hackathon/",
    },
    {
      name: "Fluffy",
      description:
        "A plug and play monitoring tool using the usb and they are connected and viewed using a dashboard.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "django",
          color: "pink-text-gradient",
        },
      ],
      image: black,
      source_code_link: "https://github.com/Varun18122002/Black",
    },
    {
      name: "Eagle Eye",
      description:
        "A tool that is used to find people in multiple stream of and track them using the Nvidia's Deepstream framework.",
      tags: [
        {
          name: "Nvidia Deepstream",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "docker",
          color: "pink-text-gradient",
        },
      ],
      image: deep,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, blogs, projects };
  