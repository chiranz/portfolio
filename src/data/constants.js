import ecommimg from "../images/ecomm.png";
import blogimg from "../images/blog.svg";
import portfolioimg from "../images/portfolio.png";

export const person = {
  name: "Chiranjibi Poudyal",
  profession: "Full-stack developer",

  headline:
    "Self taught Web developer with a desire to build successful businesses in this distracted modern world.",
  lookingFor: "Looking forward to work with an aspiring startups.",
  workType: "Willing to relocate or can work remotely.",
  bio: `I am a Civil Engineer turned Full-stack developer and Blockchain enthusiast. 
    I enjoy learning about technology and using it for solving critical issues.`,
  about: `I was born in a small village in Darjeeling. Bought up by my parents with
    my three sisters. After doing well in my 10th I completed Diploma in Civil Engineering in 2011
    and later B.Tech in 2014. I come from a humble beginings. Back in 2010 when I got my first laptop
     I fell for this thing called internet and started using it vigorously. I wasted over 4000 hours
     on facebook from 2010 to late 2013. Facebook was internet for me that time.`
};

export const navLinks = [
  { name: "portfolio", linkTo: "/portfolio", icon: "fa fa-briefcase" },
  { name: "my cv", linkTo: "/my-cv", icon: "fa fa-file" },
  { name: "blog", linkTo: "/blog", icon: "fa fa-rss" },
  { name: "contact", linkTo: "/contact", icon: "fa fa-address-card" },
  { name: "about", linkTo: "/about", icon: "fa fa-user" }
];

export const footerStrings = {
  title:
    "This is a fully integrated open-source project that uses React, Grab your copy from ",
  copyright: `Copyright © ${new Date().getFullYear()} `,
  name: "Chiranjibi Poudyal",
  allRights: "All rights reserved."
};

export const personContact = {
  websiteLink: "https://www.chiranjibipoudyal.com",
  website: "www.chiranjibipoudyal.com",
  phone: "+91-7602534695",
  email: "chiranpoudyal@gmail.com"
};

export const education = {
  institute: "Surendra Institute of Engineering and Management",
  period: "2011-2014",
  website: "siemsiliguri.org",
  websiteLink: "https://www.siemsiliguri.org",
  course: "B.Tech in Civil Engineering",
  achievements: [
    "Qualified Graduate Aptitude Test for Engineering(GATE) in first attempt. A proof that I am technically sound."
  ]
};

export const projects = [
  {
    title: "Developer Portfolio",
    description: `A progressive responsive portfolio for www.chiranjibipoudyal.com. This project is my latest
    work on frontend development.`,
    liveLink: "https://www.chiranjibipoudyal.com/",
    repoLink: "https://github.com/chiranz/portfolio",
    usedTech: ["React", "Html", "css", "scss"],
    img: portfolioimg
  },
  {
    title: "Blogging Site",
    description: `A minimalistic blogging site with CRUD functionality where you can login/register
    using google and github account. Here media files are served from AWS-S3.`,
    liveLink: "https://dev-djblog.herokuapp.com/",
    repoLink: "https://www.github.com/chiranz/djblog",
    usedTech: ["django", "html", "css", "bootstrap", "social-auth", "aws-s3"],
    img: blogimg
  },
  {
    title: "Electronics Store",
    description: `A simple electronic store where you can add multiple products available
    and checkout using paypal sandbox.`,
    liveLink: "https://reactestore.netlify.com",
    repoLink: "https://www.github.com/chiranz/react-Estore",
    usedTech: ["React", "html", "css"],
    img: ecommimg
  }
];

export const techStack = {
  skills: ["clean code", "algorithms", "client negotiations", "unit testing"],
  comfortableWith: [
    "django",
    "react",
    "redux",
    "django-rest-framework",
    "python",
    "javascript",
    "bash",
    "git",
    "html",
    "css",
    "scss",
    "bootstrap"
  ],
  learning: [
    "distributed systems",
    "bitcoin",
    "smart contracts",
    "integrated testing",
    "caching",
    "deployments",
    "docker"
  ]
};

export const interests = [
  "I love reading when I get bored of everything.",
  "Exploring the  nature and human body",
  "Interested in nutrition and health"
];
