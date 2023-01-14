import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
  placeholder,
  aboutMePlaceholder,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

export const projects = [
  {
    id: "feature-1",
    title: "Data Engineering Pipelines",
    content:
      "End-to-end automated pipelines for generating reports, pulling from various sources.",
  },
  {
    id: "feature-2",
    title: "Full-Stack Websites",
    content:
      "Responsive and scalable websites with backend servers, from ideation to deployment.",
  },
  {
    id: "feature-3",
    title: "Desktop Apps",
    content:
      "Local packaged instances of applications. Take everything you need offline.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Years of Experience",
    value: "3+",
  },
  {
    id: "stats-2",
    title: "Companies Worked For",
    value: "2",
  },
  {
    id: "stats-3",
    title: "Total Benefit Incurred",
    value: "$10M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/gaabsanti",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/gbsssss",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/FreisITG",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/gab-santi/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

// added by Gab
export const languages = [
  {
    id: "language-1",
    text: "python",
  },
  {
    id: "language-2",
    text: "SQL",
  },
  {
    id: "language-3",
    text: "linux",
  },
  {
    id: "language-4",
    text: "cloud",
  },
  {
    id: "language-5",
    text: "javascript",
  },
];

// added by Gab
export const portfolio = [
  {
    id: "twitter-etl",
    image: placeholder,
    name: "Twitter Airflow Pipleine",
    url: "https://github.com/gab-santi/Twitter-Airflow-Project",
    description:
      "End-to-end data pipeline written in Python that pulls from tweets, deployed thru Airflow and AWS EC2.",
  },
  {
    id: "twitter-discord-bot",
    image: placeholder,
    name: "Twitter Discord Bot",
    url: "https://www.google.com/",
    description:
      "Discord bot written in Python that pulls latest tweet data from users, deployed thru Heroku.",
  },
  {
    id: "personal-website",
    image: placeholder,
    name: "Personal Portfolio Website",
    url: "https://github.com/gab-santi/gabsanti-portfolio-website",
    description:
      "This cool website, made with Vite, React.js, and TailwindCSS.",
  },
  {
    id: "electron-react-frontend",
    image: placeholder,
    name: "Electron + React App Frontend",
    url: "https://github.com/gab-santi/electron-react-frontend",
    description:
      "A desktop app UI proof-of-concept, developed using React.js and Electron.",
  },
  {
    id: "facebook-page-scraper",
    image: placeholder,
    name: "Facebook Page Scraper",
    url: "https://www.google.com/",
    description: "Scrapes public Facebook page post data without an API key.",
  },
  {
    id: "Exercise Tracker Website",
    simage: placeholder,
    name: "Facebook Page Scraper",
    url: "https://github.com/gab-santi/facebook-page-scraper",
    description:
      "Full-stack exercise tracker developed using the MERN (MongoDB, Express.js, React.js, node.js) stack framework.",
  },
  {
    id: "malaria-detection",
    image: placeholder,
    name: "Malaria Detection Using Convolutional Neural Networks",
    url: "https://github.com/gab-santi/Malaria-Detection-using-Convolutional-Neural-Networks",
    description:
      "A deep learning model that can detect malaria presence in blood smear images, developed using OpenCV, TensorFlow, and Keras.",
  },
];

// added by Gab
export const aboutMeContent = [
  {
    id: "work",
    image: aboutMePlaceholder,
    topic: "dummy",
    text: "I am a data engineer based in the Philippines, with experience in creating ETL pipelines on-premise and in the cloud. I also have a bit of experience with web development and desktop app development. Currently, I work as a Data Engineering Expert for Globe Telecom, Inc.",
    imageCaption: "Placeholder caption.",
  },
  {
    id: "work",
    image: aboutMePlaceholder,
    topic: "dummy",
    text: "I was born and raised in Manila, specifically in Las Pinas City. I grew up tinkering with various gadgets, from laptops to gaming consoles. I was always curious about how things worked and how to solve problems, which made me inclined to have a career in the IT industry.",
    imageCaption: "Placeholder caption.",
  },
  {
    id: "work",
    image: aboutMePlaceholder,
    topic: "dummy",
    text: "Outside of programming, I do a myriad of things. I like reading, listening to music, traveling, partying, going to the gym, and playing rhythm games competitively, mainly StepMania (SM/ITG) and Sound Voltex (SDVX). I’ve won my share of tournaments, both in-person and online, for both games. I usually stream every Sunday and Monday on Twitch!",
    imageCaption: "Placeholder caption.",
  },
];
