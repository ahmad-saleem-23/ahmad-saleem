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
  git,
  jobit,
  tripguide,
} from '../assets'
import PLaw from '../assets/company/PLaw.png'
import DevAcademy from '../assets/company/DevAcademy.png'
import provoke from '../assets/company/provoke.png'
import accenture from '../assets/company/accenture.png'
import book from '../assets/company/book.png'
import subminder from '/images/subminder.png'
import game from '/images/my-game-lib.png'

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
]

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
    title: 'Content Creator',
    icon: creator,
  },
]

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
    name: 'git',
    icon: git,
  },
]

const experiences = [
  {
    title: 'Lawyer',
    company_name: 'Pheonix Law',
    icon: PLaw,
    iconBg: '#383E56',
    date: 'August 2021 - December 2022',
    points: [
      'Managed diverse legal cases, meeting tight deadlines and effectively communicating with clients to achieve favorable outcomes.',
      'Conducted research in various legal areas, including public, constitutional, Treaty of Waitangi, and International Law, to devise solutions for contentious issues.',
      'Collaborated within a team to develop litigation strategies, ensuring responsive design and cross-browser compatibility.',
      'Cultivated problem-solving expertise in addressing complex legal challenges, delivering efficient and effective solutions.',
    ],
  },
  {
    title: 'Training Developer',
    company_name: 'Dev Academy Aotearoa',
    icon: DevAcademy,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - May 2023',
    points: [
      'Successfully completed a 17-week software development bootcamp, mirroring real-world team dynamics.',
      'Collaborated within cross-functional teams, including designers, product managers, and developers, to produce high-quality products.',
      'Engaged in hands-on challenges, pair programming, and developed proficiency in web technologies (HTML5, CSS3, JavaScript, React, Redux, Knex, SQLite3, Node.js, and Express.js).',
      'Gained expertise in unit testing, asynchronous programming, RESTful APIs, and version control via GitHub.',
      'Prioritized human skills, empathy, and well-being, participating in growth feedback exchanges and agile teamwork.',
    ],
  },
  {
    title: 'Hack to the Future Hackathon',
    company_name: 'Provoke Solutions',
    icon: provoke,
    iconBg: '#383E56',
    date: 'May 2023',
    points: [
      'At the recent Hack to the Future: A GPT Hackathon, I was part of an innovative team harnessing GPT and generative AI to create cutting-edge solutions.',
      "Witnessing diverse projects at the event, including ours, showcased technology's potential in addressing real-world challenges.",
      'Our project focused on crafting a virtual version of ourselves, capable of mimicking our communication and actions. It aims to revolutionize personal and professional interactions as a personalized virtual assistant.',
      "The hackathon showcased AI's exciting future and its transformative potential. It was an honor to participate, and I eagerly anticipate the continued evolution of these impactful projects in the tech world and beyond.",
    ],
  },
  {
    title: 'Accenture Tech Bootcamp NZ',
    company_name: 'Accenture',
    icon: accenture,
    iconBg: '#E6DEDD',
    date: 'Jully 2023',
    points: [
      'I attended a four-day Accenture bootcamp involving sessions with presentations, workshops, and project development. Our team, SubsWise, secured first place under Accenture mentorship.',
      'Our goal was to create "SunWise," a mobile subscription reminder app using React Native. The project demanded strong teamwork, blending JavaScript and TypeScript for functionality, with me handling the backend while teammates improved the frontend.',
      'Given time constraints, we employed SQLite initially but aimed to integrate PostgreSQL later for data handling optimization',
      "This experience enhanced my technical skills, teamwork, and innovation, reinforcing the importance of collaboration in technology's ever-evolving landscape.",
    ],
  },
  {
    title: 'Self learning and improvement',
    company_name: '...',
    icon: book,
    iconBg: '#E6DEDD',
    date: 'Jully 2023 - Present',
    points: [
      'I am actively engaged in expanding my technical skill set by exploring new programming languages, frameworks, and tools. This includes self-paced online courses, tutorials, and hands-on projects.',
      'During this phase, I am dedicating a significant portion of my time to conceptualizing, developing, and launching personal projects. These projects not only serve as practical applications of my skills but also provide an opportunity to explore innovative ideas and solutions.',
      'Implementing responsive design aI participate in tech-related meetups, webinars, and conferences, both online and in person, to stay up-to-date with industry trends and connect with like-minded professionals.',
    ],
  },
]

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
]

const projects = [
  {
    name: 'SubMinder',
    description:
      'Web-based platform that allows users to manage subscription and payment, from various providers, providing a convenient and efficient solution to keep track of your spending and commitments.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgres',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
    ],
    image: subminder,
    source_code_link:
      'https://github.com/SubMinder-Group-Project/SubMinder/tree/email-reminder',
    link: 'https://subminder-production.up.railway.app/',
  },
  {
    name: 'My Full Stack App',
    description:
      'Web application that enables users to build up thier game collection. The App allow the user to add, update and delete games to their libarary collection.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: game,
    source_code_link: 'https://github.com/',
    link: '',
  },
  {
    name: 'Caption-This',
    description:
      'A fun project, where where users could add captions to random memes. The aim of the App was to create a fun and engaging experience for users.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
    link: '',
  },
]

export { services, technologies, experiences, testimonials, projects }
