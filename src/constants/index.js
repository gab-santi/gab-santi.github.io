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
  placeholder,
  dbtProjectsImage,
  pySparkPipelinesImage,
  itlScoreComparisonImage,
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
    title: "📈 Data Engineering Pipelines",
    content:
      "End-to-end automated pipelines for generating reports, pulling data from various sources.",
  },
  {
    id: "feature-2",
    title: "🌐 Full-Stack Websites",
    content:
      "Responsive and scalable websites with backend servers, from ideation to deployment.",
  },
  {
    id: "feature-3",
    title: "🖥️ Desktop Apps",
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
    value: "4+",
  },
  {
    id: "stats-2",
    title: "Companies Worked For",
    value: "3",
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
    link: "https://www.x.com/__freis",
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
    text: "Python",
  },
  {
    id: "language-2",
    text: "SQL",
  },
  {
    id: "language-3",
    text: "AWS",
  },
  {
    id: "language-4",
    text: "GCP",
  },
  {
    id: "language-5",
    text: "Azure",
  },
  {
    id: "language-6",
    text: "Airflow",
  },
  {
    id: "language-7",
    text: "dbt",
  },
  {
    id: "language-8",
    text: "Linux",
  },
];

// added by Gab
export const portfolio = [
  {
    id: "dbt-projects",
    image: dbtProjectsImage,
    name: "[Corporate] Several dbt Projects",
    url: "",
    description:
      "Created dbt projects from scratch and added new features to existing pipelines. Worked with different data warehouses across all projects (Redshift, Snowflake, MSSQL, BigQuery). Made sure to adhere to dbt's Style Guide.",
  },
  {
    id: "pyspark-pipelines",
    image: pySparkPipelinesImage,
    name: "[Corporate] PySpark Data Pipeline",
    url: "",
    description:
      "Designed, developed, and deployed a PySpark data pipeline running on-premise, using various sources and business rules. Ensured clarity of requirements via consistent communication with client.",
  },
  {
    id: "itl-score-comparison",
    image: itlScoreComparisonImage,
    name: "Azure Databricks DE Project",
    url: "https://github.com/gab-santi/itl-2023-vs-2024-freis",
    description:
      "Created a data project in Azure Databricks. Extracted JSON data and properly formatted it for different types of analysis.",
  },
  {
    id: "ml-model-migration",
    image: placeholder,
    name: "[Corporate] PySpark ML Model Migrated to Snowpark ML",
    url: "",
    description:
      "Fully migrated a PySpark model running on-premise, to run fully in Snowflake using the Snowpark ML library. Was able to migrate the whole end-to-end process since the data sources for the model were also available in Snowflake.",
  },
  {
    id: "personal-website",
    image: placeholder,
    name: "Personal Portfolio Website",
    url: "https://github.com/gab-santi/gabsanti-portfolio-website",
    description:
      "This cool website that you are visiting rn, made with Vite, React.js, and TailwindCSS.",
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
    url: "https://github.com/gab-santi/facebook-page-scraper",
    description: "Scrapes public Facebook page post data without an API key.",
  },
  {
    id: "exercise-tracker",
    image: placeholder,
    name: "Exercise Tracker Website",
    url: "https://github.com/gab-santi/ModernFullStackPractice",
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
  {
    id: "twitter-etl",
    image: placeholder,
    name: "[Deprecated] Twitter Airflow Pipleine",
    url: "https://github.com/gab-santi/Twitter-Airflow-Project",
    description:
      "End-to-end data pipeline written in Python that pulls from tweets, deployed thru Airflow and AWS EC2.",
  },
  {
    id: "twitter-discord-bot",
    image: placeholder,
    name: "[Deprecated] Twitter Discord Bot",
    url: "https://www.google.com/",
    description:
      "Discord bot written in Python that pulls latest tweet data from users, deployed thru Heroku.",
  },
];

// added by Gab
export const aboutMeContent = [
  {
    id: "work",
    image: aboutMePlaceholder,
    topic: "dummy",
    text: "I am a data engineer based in the Philippines, with experience in creating ETL pipelines on-premise and in the cloud. I also have a bit of experience with web development and desktop app development. I was born and raised in Manila, specifically in Las Pinas City. I grew up tinkering with various gadgets, from laptops to gaming consoles. I was always curious about how these gadgets worked and how to solve problems using programming, which made me inclined to have a career in the tech industry. I have found my niche in the AI and Data space, where I chose to focus on the Data Engineering role. I also do entrepreneurship and stock market investing on the side.",
    imageCaption: "Placeholder caption.",
  },
  {
    id: "hobbies",
    image: aboutMePlaceholder,
    topic: "dummy",
    text: "Outside of programming, I do a myriad of things. I like reading, listening to music, traveling to new places, working out, playing various sports, and playing rhythm games competitively, mainly StepMania (SM/ITG) and Sound Voltex (SDVX). I’ve won my share of tournaments, both in-person and online, for both games.",
    imageCaption: "Placeholder caption.",
  },
];
