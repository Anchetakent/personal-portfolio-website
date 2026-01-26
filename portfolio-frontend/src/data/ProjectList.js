import LineFollowingRobot from '../assets/images/line-following-robot.jpg'
import WebsitePortfolio from '../assets/images/website-portfolio.png'
import PythonEmotion from '../assets/images/emotion-detection.png'
import Ecom from '../assets/images/homepage.png'
import Conveyor from '../assets/images/Conveyor.jpg'
import ActiveDirectory from '../assets/images/ActiveDirectory.png'


export const projectList = [
  {
    title: "Personal Portfolio",
    image: WebsitePortfolio,
    desc: "A Personal Website Portfolio",
    tech: "React, TailwindCSS, Web3Forms",
    id: 1,
    github: 'https://github.com/Anchetakent/personal-portfolio-website',
    detailedDesc: `Built and deployed my personal portfolio website using React and Tailwind CSS, designed to showcase my projects, technical skills, and contact information in a clean, responsive layout. The site includes a working contact form powered by Web3Forms for handling submissions without a custom backend. I deployed the project on Vercel with automated builds and updates through Git-based deployment, and configured a custom domain for a more professional web presence.
    `
  },
  {
    title: "Ecommerce",
    image: Ecom,
    desc: "An ecommerce with local backend",
    tech: "React, Node.js , Express.js",
    id: 2,
    github: 'https://github.com/Anchetakent/E-Commerce',
    detailedDesc: `A full-stack e-commerce application built with a React frontend and a locally hosted backend API. It supports product browsing, cart management, and order viewing using dynamic data fetched with Axios and async/await. The frontend uses React hooks and a component-based architecture, while the backend is built with Node.js, Express, and SQLite for lightweight data handling. The interface is fully responsive, designed with HTML, CSS, Flexbox, and CSS Grid to adapt across different screen sizes.`
  },
  {
    title: "Conveyor Belt",
    image: Conveyor,
    desc: "A functional working conveyor belt",
    tech: "Arduino Mega 2560, Hardware Modules",
    id: 2,
    github: '',
    detailedDesc: `Developed a school project involving a 2-meter automated conveyor belt system designed to simulate basic material handling operations. The system uses an AC-to-DC power supply to drive a DC motor, with motor speed controlled through Pulse Width Modulation (PWM) using an Arduino Mega 2560 and a motor driver module. The PWM logic was modified to implement smooth acceleration, ensuring objects placed on the conveyor move steadily without sudden jerks or slipping.

    To support both manual and automated operation, start and stop push buttons were integrated along with two pairs of infrared sensors. One sensor pair detects when an item is placed onto the conveyor, while the second pair, positioned at the end of the belt, detects item arrival and automatically stops the motor. This project strengthened my understanding of embedded systems, motor control, sensor integration, and real-time control logic.
    `
  },
  {
    title: "Line Following Robot",
    image: LineFollowingRobot,
    desc: "A functional working line following robot",
    tech: "PIC16F13145 Curiosity Nano, Custom PCB",
    id: 3,
    github: '',
    detailedDesc: `Built a line following robot using a PIC16F13145 Curiosity Nano, powered by a 12V Li-Po battery with buck converters for voltage regulation. The robot uses two stepper motors for precise wheel control and a 8-channel IR sensor array to detect and follow a path in real time. A custom 3D-printed chassis was designed to house the electronics and mechanical components, reinforcing my skills in embedded systems, power management, motor control, and sensor integration.
    `
  },

  {
    title: "Active Directory Administrative Center",
    image: ActiveDirectory,
    desc: "Simulated using Virtual Machines",
    tech: "Virtual Machine, Windows Server Manager",
    id: 4,
    github: '',
    detailedDesc: `Configured and managed a Windows Server environment using virtual machines to simulate a small organizational network with administrator and user roles. The setup included installing and configuring Active Directory Domain Services (AD DS), creating a domain forest, and joining client machines to the domain. I created organizational units (OUs), users, computers, and security groups, and assigned users to appropriate groups to reflect real-world access control scenarios.

    In addition, I configured DHCP services to dynamically assign IP addresses to client machines and verified connectivity between server and clients. Group Policy Objects (GPOs) were implemented to centrally manage user and system settings, including desktop configurations, drive mappings, and device restrictions such as disabling USB storage. This project strengthened my understanding of Windows Server administration, virtualization, identity and access management, network configuration, and centralized policy enforcement.
    `
  },
  {
    title: "Emotion Recognition System ",
    image: PythonEmotion,
    desc: "Utilizez desktop camera to recognize emotion in real time",
    tech: "Python, OpenCV, MediaPipe",
    id: 4,
    github: '',
    detailedDesc: `Built an emotion detection system as a school project using Python, OpenCV, and MediaPipe. OpenCV was used to interface with the webcam and process real-time video frames, while MediaPipe handled face detection and facial landmark extraction. The detected facial landmarks were used to classify basic emotional states and overlay the results directly on the video feed. Through this project, I gained hands-on experience with real-time computer vision pipelines, camera input handling, and facial feature analysis.
    `,
  },
];