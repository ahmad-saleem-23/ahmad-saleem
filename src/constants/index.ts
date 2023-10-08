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
      'Managed multiple legal matters in a fast-paced environment, meeting deadlines and communicating effectively with clients to achieve optimal outcomes.',
      'Conducted legal research in public, constitutional, Treaty of Waitangi, and International Law areas to formulate solutions for contested issues.',
      'ImplemWorked as part of a team, collaborating with colleagues to develop strategies and approaches for litigation proceduresenting responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and Demonstrated professional communication skills, including liaising with clients, following up on Court and Tribunal directions, and filing legal documents.providing constructive feedback to other developers.',
      'Developed problem-solving skills in the context of legal matters, finding efficient and effective solutions to complex issues.',
    ],
  },
  {
    title: 'Training Developer',
    company_name: 'Dev Academy Aotearoa',
    icon: DevAcademy,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - May 2023',
    points: [
      'Completed a 17-week full immersion software development bootcamp that closely mimicked real-life development team dynamics.',
      'Collaborating with cross-functGained proficiency in modern web development technologies including HTML5, CSS3, JavaScript, React, Redux, Knex, SQLite3, Node.js, and Express.js.ional teams including designers, product managers, and other developers to create high-quality products.',
      'Participated in hands-on challenges and constructed web applications through pair programming exercises. As well as, developing skills in unit testing, asynchronous programming techniques, RESTful APIs, and version control using GitHub.',
      'Emphasised human skills, empathy, and well-being, with opportunities to provide and receive growth feedback and work in teams using agile methodology.',
      'Contributed to the creation of SubMinder, a subscription tracking app, as part of a team for the final project. Implemented authentication and sign-in functionality, set up email reminders using SendGrid API, and designed a form to add new subscriptions.',
    ],
  },
  {
    title: 'Hack to the Future Hackathon',
    company_name: 'Provoke Solutions',
    icon: provoke,
    iconBg: '#383E56',
    date: 'May 2023',
    points: [
      'During the recent Hack to the Future: A GPT Hackathon, I had the opportunity to be part of an innovative and dynamic team that harnessed the power of GPT and generative AI to create cutting-edge solutions. Our diverse team worked tirelessly to turn ideas into tangible solutions, and it was truly inspiring to witness the impact of teamwork in the field of AI.',
      'One of the highlights of the event was witnessing the diverse projects that emerged from the hackathon. These projects, including our own, showcased the promise of technology in addressing real-world challenges.',
      'Our project, in particular, focused on creating a virtual version of ourselves online, powered by a model trained to mimic our unique ways of dealing with tasks and communication. This virtual counterpart could seamlessly respond to messages in a manner indistinguishable from our own, offering the potential to revolutionize personal and professional interactions. Additionally, our AI was designed to assist with tasks and applications based on our data, essentially serving as a personalized virtual assistant.',
      'The hackathon was a testament to the exciting future of AI and the transformative possibilities it holds. It was an honor to be part of this event, and I look forward to seeing how the projects developed during the hackathon will continue to evolve and make a meaningful impact in the world of technology and beyond.',
    ],
  },
  {
    title: 'Accenture Tech Bootcamp NZ',
    company_name: 'Accenture',
    icon: accenture,
    iconBg: '#E6DEDD',
    date: 'Jully 2023',
    points: [
      'I participated in a four-day bootcamp with Accenture, where I engaged in a range of sessions, including presentations from Accenture leaders, educational workshops, and "build" sessions. During the build session, I was assigned to a team, and together with my fellow participants, we embarked on a project under the guidance of Accenture Mentors. Our collective efforts culminated in a remarkable achievement as our team, SubsWise, clinched the first-place position at the end of the bootcamp.',
      "Our team's primary objective was to develop a mobile application known as 'SunWise,' designed to serve as a subscription reminder app. This innovative app aimed to help users keep track of their various subscriptions, ensuring they never miss a payment or renewal date again. The project was built using React Native, and it demanded effective collaboration and coordination among team members to bring it to fruition.",
      "Our team was a diverse group with a wide range of skills, and together, we used JavaScript and TypeScript to craft the app's functionality. I took on the responsibility of developing the backend infrastructure and functionality on the front-end, while my teammates focused on enhancing the frontend experience. Due to the time constraints inherent to the bootcamp, we decided to utilize SQLite as our initial database solution, with the intention of incorporating PostgreSQL in the future to further optimize the app's data handling capabilities.",
      'Working on the SunWise project at the Accenture bootcamp was an enriching experience that allowed me to hone my technical skills, collaborate effectively within a team, and bring a creative and practical solution to life. This experience not only helped me grow as a developer but also reinforced the value of teamwork and innovation in achieving success in the ever-evolving field of technology.',
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
      'I seek guidance from experienced mentors and professionals in the field, leveraging their expertise to accelerate my learning journey and make informed decisions about my career path.',
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
    image: jobit,
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
