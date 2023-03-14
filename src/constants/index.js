import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  cocobod,
  sovtech,
  platinum,
  tripguide,
  threejs,
  rayca,
  precision,
  cartography,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Sovtech',
    icon: sovtech,
    iconBg: '#383E56',
    date: 'September 2022 - Present',
    points: [
      'Developing and maintaining both mobile and web applications using Node.js, Flutter and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Fullstack JavaScript Developer',
    company_name: 'Rayca Precision',
    icon: rayca,
    iconBg: '#E6DEDD',
    date: 'Jan 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Cartographer Intern',
    company_name: 'Cocobod CHED',
    icon: cocobod,
    iconBg: '#E6DEDD',
    date: 'Sep 2020 - Sep 2021',
    points: [
      'Collecting, measure, and interpret geographic information in order to create and update maps and charts for regional planning, and other purposes using ArcGIS',
      'Advanced type research by compiling data, updating Software spreadsheets and producing timely reports',
      'Participating in questionnaire for farmers to get feedback and how the Cocobod should improve its assistance to farmers.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Platinum Mobile',
    description:
      'Mobile-based platform that allows companies to track employees’ work hours, location, leave and so much more, where employees do not have access to the office clocking terminal, are on site or out in the field visiting clients.',
    tags: [
      {
        name: 'flutter',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'dart',
        color: 'pink-text-gradient',
      },
    ],
    image: platinum,
    source_code_link: 'https://github.com/mrparkersson',
  },
  {
    name: 'Rayca Precision',
    description:
      'Web application where Oncologist track their patients records so that their medication data and attendance tally',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'node.js',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodB',
        color: 'pink-text-gradient',
      },
    ],
    image: precision,
    source_code_link: 'https://github.com/mrparkersson',
  },
  {
    name: 'Cartographer',
    description:
      'Collecting, measure, and interpret geographic information in order to create and update maps and charts for regional planning, and other purposes using ArcGIS',
    tags: [
      {
        name: 'compass',
        color: 'blue-text-gradient',
      },
      {
        name: 'theodolite',
        color: 'green-text-gradient',
      },
      {
        name: 'arcgis',
        color: 'pink-text-gradient',
      },
    ],
    image: cartography,
    source_code_link: 'https://github.com/mrparkersson',
  },
];

export { services, technologies, experiences, testimonials, projects };
