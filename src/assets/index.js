// Hero
import InstagramLineIcon from "remixicon-react/InstagramLineIcon"
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon"
import LinkedInBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon"
import MailSendFillIcon from "remixicon-react/MailSendFillIcon"
import GithubLineIcon from "remixicon-react/GithubLineIcon"

export const heroIcons = [
  {
    pic: <InstagramLineIcon />,
    link: "#",
  },

  {
    pic: <FacebookCircleLineIcon />,
    link: "#",
  },

  {
    pic: <LinkedInBoxFillIcon />,
    link: "https://www.linkedin.com/in/abu-sayed-bhuiyan-sabuj",
  },

  {
    pic: <MailSendFillIcon />,
    link: "mailto:sabujasb1214@gmail.com",
  },

  {
    pic: <GithubLineIcon />,
    link: " https://github.com/asbsabuj",
  },
]

// AboutMe icons
import GithubFillIcon from "remixicon-react/GithubFillIcon"
import Projector2LineIcon from "remixicon-react/Projector2LineIcon"
import GroupLineIcon from "remixicon-react/GroupLineIcon"
import AwardFillIcon from "remixicon-react/AwardFillIcon"

export const aboutData = [
  {
    title: "Github Repos",
    amount: 16,
    icon: <GithubFillIcon />,
  },
  {
    title: "Successful Projects",
    amount: 12,
    icon: <Projector2LineIcon />,
  },
  {
    title: "Satisfied clients",
    amount: 0,
    icon: <GroupLineIcon />,
  },
  {
    title: "Awards and Recognition",
    amount: 5,
    icon: <AwardFillIcon />,
  },
]

import DownloadLineIcon from "remixicon-react/DownloadLineIcon"
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon"

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText =
  " Hi, I'm Sabuj, a web developer & designer. I blend the technical  skills of web development with the creative aspects of web design. I code in HTML, CSS, JavaScript, React, NextJS... to build functional and responsive websites and user-friendly  interfaces. My role allows me to ensure that websites not only work well but also look great and provide an excellent user experience."
// End of AboutMe icons

// Skills
export const webdevData = [
  {
    name: "VSCode",
    icon: "/skills/vscode.png",
  },
  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.png",
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.png",
  },
  {
    name: "Vite",
    icon: "/skills/vite.png",
  },
  {
    name: "ReactJS",
    icon: "/skills/react.png",
  },

  {
    name: "AI",
    icon: "/skills/ai.png",
  },
  {
    name: "Framer Motion",
    icon: "/skills/framer.png",
  },

  {
    name: "NextJS",
    icon: "/skills/nextjs.png",
  },
  {
    name: "NodeJS",
    icon: "/skills/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.png",
  },
  {
    name: "PostgreSQL",
    icon: "/skills/postgres.png",
  },
  {
    name: "Prisma",
    icon: "/skills/prisma.png",
  },
  {
    name: "Shadcn",
    icon: "/skills/shadcn.png",
  },
  {
    name: "Zod",
    icon: "/skills/zod.png",
  },
  {
    name: "TypeScript",
    icon: "/skills/ts.png",
  },
]
export const devOpsData = [
  {
    name: "AWS",
    icon: "/skills/aws.png",
  },
  {
    name: "Cloud Formation",
    icon: "/skills/CloudFormation.png",
  },
  {
    name: "AMI",
    icon: "/skills/ec2-ami.png",
  },
  {
    name: "EC2",
    icon: "/skills/ec2.png",
  },
  {
    name: "AutoScaling",
    icon: "/skills/EC2AutoScaling.png",
  },
  {
    name: "Load Balancing",
    icon: "/skills/ElasticLoadBalancing.png",
  },
  {
    name: "Kali Linux",
    icon: "/skills/kali.png",
  },
  {
    name: "Kubuntu",
    icon: "/skills/kubuntu.png",
  },
  {
    name: "Networking",
    icon: "/skills/network.png",
  },
  {
    name: "Route53",
    icon: "/skills/route53.png",
  },
  {
    name: "S3Bucket",
    icon: "/skills/s3.png",
  },
  {
    name: "BashScripting",
    icon: "/skills/sh.png",
  },
  {
    name: "VPC",
    icon: "/skills/vpc.png",
  },
  {
    name: "NATGateway",
    icon: "/skills/vpc-nat-gateway.png",
  },
  {
    name: "Github",
    icon: "/skills/github.png",
  },
]

// import { PiCopyrightThin } from 'react-icons/pi'
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon"

// export const copyRightIcon = <PiCopyrightThin />
export const copyRightIcon = <CopyrightLineIcon />
// Experience
export const educationData = [
  {
    year: 2012,
    uni: false,
    title: "Secondary School Certificate",
    institute: "Savar Cantonment Public School & College",
    group: "Science",
    gpa: "5.00",
  },

  {
    year: 2014,
    uni: false,
    title: "Higher Secondary School Certificate",
    institute: "Notre dame College",
    group: "Science",
    gpa: "5.00",
  },

  {
    year: 2020,
    uni: true,
    title: "Bachelor of Science",
    institute: "Jahangirnagar University",
    group: "Information Technology",
    gpa: "3.67",
  },

  {
    year: 2022,
    uni: true,
    title: "Master of Science",
    institute: "Jahangirnagar University",
    group: "Information Technology",
    gpa: "3.69",
  },
]

export const experienceData = [
  {
    year: "08/2020-10/2020",
    title: "Junior Software Engineer",
    company: "BD lab IT, Savar, Dhaka",
    experience:
      "clean and reusable code production with industry recognized conventions, interactive user interface creationwith react, javascript, redux.",
  },

  {
    year: "09/2021-02/2022",
    title: "Business Development Specialist",
    company: "Emerging IT Bangladesh Ltd- Uttara, Dhaka",
    experience:
      "managed branding and promotion, social media, marketing and sales, content writing, software development cycle handling issues.",
  },
]

export const projectsData = [
  {
    name: "E-Com2",
    desc: "E commerce website with continous ci/cd. Now it has authentiation, sign in, sign out, product demo. ",
    url: "/projects/ecom2.png",
    liveUrl: "https://ecom-two-murex.vercel.app/",
    tech: [
      "NextJS",
      "ReactJS",
      "NodeJS",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "Shadcn",
      "TypeScript",
      "TailwindCSS",
    ],
  },
  {
    name: "JobFinder",
    desc: "An app for posting and finding jobs, managing job interview schedule and finding the best job solution",
    url: "/projects/JobFinder.png",
    liveUrl: "https://mern-stack-job-finder.onrender.com/landing",
    tech: [
      "ReactJS",
      "Express-Router",
      "NodeJS",
      "MongoDB",
      "Styled-Component",
      "JavaScript",
    ],
  },
  {
    name: "RecipeWithReact",
    desc: "Beautiful application where one can create, edit and save recipes they like. If there is a recipe that is no longer needed, it can be deleted too.",
    url: "/projects/recipeAdd.png",
    liveUrl: "https://velvety-gingersnap-6a1992.netlify.app/",
    tech: ["ReactJS", "CSS", "JavaScript"],
  },
  {
    name: "ShoeShop",
    desc: "A Nike like shoe shop where one can find new shoes and their prizes in a vibrant and animated reresentation.",
    url: "/projects/ShoeShop.png",
    liveUrl: "https://shoe-shop-sjbuilds.vercel.app/",
    tech: ["ReactJS", "TailwindCSS", "JavaScript"],
  },
  {
    name: "BlogPost",
    desc: "Simple blog posting website, where you can post blog and delete blog posts",
    url: "/projects/blogpost.png",
    liveUrl: "https://blog-posting-rd38.onrender.com/blogs",
    tech: ["NodeJS", "CSS", "ReactJS"],
  },
  {
    name: "NodeFarm",
    desc: "A backend app for veggies and fruits where informtion about the product and order amount can be found",
    url: "/projects/nodefarm.png",
    liveUrl: "./components/sub/NotFound.jsx",
    tech: ["NodeJS", "CSS", "JavaScript", "HTML"],
  },
  {
    name: "MineSweeper",
    desc: "Traditional minesweeper game to remind old times with very easy user interface",
    url: "/projects/minesweeper.png",
    liveUrl: "./components/sub/NotFound.jsx",
    tech: ["HTML", "JavaScript", "CSS"],
  },
]

export const projectsButton = [
  "All",
  "NodeJS",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "TailwindCSS",
  "NextJS",
  "FramerMotion",
  "Styled-Component",
  "MongoDB",
  "Express-Router",
  "PostgreSQL",
  "Prisma",
  "Zod",
  "Shadcn",
  "TypeScript",
]

import Home5LineIcon from "remixicon-react/Home5LineIcon"
import UserLineIcon from "remixicon-react/UserLineIcon"
import HistoryLineIcon from "remixicon-react/HistoryLineIcon"
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon"
import UserStarLineIcon from "remixicon-react/UserStarLineIcon"
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon"
import PriceTag3LineIcon from "remixicon-react/PriceTag3LineIcon"
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon"
import QuestionAnswerLineIcon from "remixicon-react/QuestionAnswerLineIcon"

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home5LineIcon />,
  },
  {
    id: "about",
    name: "About",
    icon: <UserLineIcon />,
  },
  {
    id: "experience",
    name: "MyRoad",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },
  {
    id: "reviews",
    name: "Reviews",
    icon: <UserStarLineIcon />,
  },
  {
    id: "projects",
    name: "Projects",
    icon: <ProjectorLineIcon />,
  },
  {
    id: "pricing",
    name: "Pricing",
    icon: <PriceTag3LineIcon />,
  },
  {
    id: "contact",
    name: "Contact",
    icon: <ContactsBook2LineIcon />,
  },
  {
    id: "questions",
    name: "Questions",
    icon: <QuestionAnswerLineIcon />,
  },
]

export const questions = [
  {
    question1: "Important Notice! Please read...",
    answer:
      "These questions and answers are only for demo purposes and not real. I will adding real questions and answers regarding my portfolio soon. Thank you!",
  },
  {
    question: "How much do you charge for a website?",
    answer:
      "Our website packages usually range from £2997 – £4997. However it really depends on what kind of website you need. We recently wrote a full guide on how much it costs for a website to give you an idea of the different options available.",
  },
  {
    question: "Why are you so expensive?",
    answer:
      "The process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "It takes approximately 6-10 weeks to build a website from start to finish, providing we have all the information from you. Our full web design process is broken down here. Generally speaking, the website will only take a long time if we are still waiting for text and images from yourself.",
  },
  {
    question: "How do we communicate throughout the website build?",
    answer:
      "Before we begin working together, we’ll usually have an initially chat on the phone or via Skype to discuss the project. Once we get started, most of the communication will take place over email. This makes the process a lot easier as we’ll have all of the information saved and can come back to it later. Once we’ve finished the project, we will book in your 1hr digital marketing training session.",
  },
  {
    question: "What will you need from me?",
    answer:
      "It really depends on what type of website you want. We’ll be able to discuss this on our discovery call before we start working together. Depending on which package we agree on we could need…",
  },
  {
    question: "What if I don’t like the website?",
    answer:
      "You’re in luck. We offer a risk-free guarantee. Before we build your new website, we’ll design a mockup of your homepage. We’ll design a layout in Photoshop first, that way you’ll get to see our initial designs within approximately ten days. This is your opportunity to give us feedback and if you really don’t like it, you don’t have to move forward. Best part is, this won’t cost you anything.",
  },
  {
    question: "Do you offer a payment schedule?",
    answer:
      "Yes, we split the payment into two. The first 50% is usually taken once you have seen the mockup of your homepage and you’re happy to move forward. The following 50% is taken 30 days after this.",
  },
  {
    question: "Can I make the final payment when the site is ready to go live?",
    answer:
      "No. In the past we have found that projects can take a lot longer than expected to complete. We might be waiting for information from you and this can delay the process. Sometimes these delays can take months. This is why we always invoice 30 days after the original payment. At this point we’ll be well on our way with your new website and you’ll be able to see the progress.",
  },
  {
    question: "Who hosts the website?",
    answer:
      "If we build your website, we will generally manage the hosting for you so you don’t need to do anything. We use the same hosting company for our own website and for ALL our clients. Each website is managed individually to avoid any security issues. Every website we build has unlimited bandwidth, 20GB of disk space, 2GB Ram and 99.9% uptime. We’ve used the same company for 5 years and we don’t plan on changing this anytime soon.",
  },
  {
    question: "Can I update the website myself once it’s been built?",
    answer:
      "Yes. We like to offer the ability for our clients to update the website themselves. We we’ll give you all the training and tools to be able to make website amendments. We use a easy to use platform called WordPress so you can add edit and delete content without paying us to do it for you.",
  },
  {
    question:
      "What if I don’t want to manage the website at all. Can you do it all for me?",
    answer:
      "Yes, we can arrange a maintenance package to suit your needs. This can range from 1hr per month to 10 hours per month and we can discuss a package that’s right for you.",
  },
]

import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon"
export const questionArrow = <ArrowDropDownLineIcon />

// Reviews

import StarFillIcon from "remixicon-react/StarFillIcon"
import StarHalfLineIcon from "remixicon-react/StarHalfLineIcon"
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon"
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon"

export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

export const reviewsData = [
  {
    image: "/reviews/client-4.png",
    name: "Be the first one to review",
    comment: "There are no reviews yet !!",
    stars: [0, 0, 0, 0, 0],
  },

  // {
  //   image: "/reviews/client-4.png",
  //   name: "Mark T., Freelance Graphic Designer",
  //   comment:
  //     "Your work on our website has been phenomenal. The design is visually stunning and incredibly user-friendly. We've received countless compliments from our customers, and our sales have noticeably increased. Thank you for capturing our brand's essence so perfectly!",
  //   stars: [1, 1, 1, 1, 0.5],
  // },
  // {
  //   image: "/reviews/client-2.png",
  //   name: "Sarah B., E-commerce Store Owner",
  //   comment:
  //     "Working with you, has been an absolute pleasure. The portfolio website you created for me is sleek, modern, and beautifully showcases my work. Your attention to detail and creative flair are truly impressive. I couldn't be happier with the final result!",
  //   stars: [1, 1, 1, 1, 1],
  // },
  // {
  //   image: "/reviews/client-3.png",
  //   name: "Emily R., CEO of Tech Startup",
  //   comment:
  //     "The redesign of our corporate website exceeded all expectations. Your innovative ideas and professional execution have given us a site that is not only visually appealing but also highly functional. We've seen a significant improvement in user engagement thanks to your expertise.",
  //   stars: [1, 1, 1, 1, 1],
  // },
  // {
  //   image: "/reviews/client-1.png",
  //   name: "Bob W., Lifestyle Blogger",
  //   comment:
  //     "I absolutely love the blog design you created for me, [Web Designer's Name]. It's exactly what I envisioned—stylish, unique, and easy to navigate. Your responsiveness and creative input were invaluable. My readers are raving about the new look, and I couldn't be more thrilled!",
  //   stars: [1, 1, 1, 1, 0.5],
  // },
  // {
  //   image: "/reviews/client-5.png",
  //   name: "David H., Director of Non-Profit Organization",
  //   comment:
  //     "your work on our non-profit’s website has been transformative. The design is clean, engaging, and effectively conveys our mission. We've seen an increase in online donations and volunteer sign-ups, all thanks to your fantastic design. Your dedication and talent are greatly appreciated!",
  //   stars: [1, 1, 1, 1, 1],
  // },
]

export const pricingPlans = [
  {
    title: "No pricing plans for now! Demo ones are given here.",
    pricing: "Pricing will depend on work",
    features: [
      "Possible features could be divided by type of services needed.",
    ],
    recommended: "Whomever may need my services!",
  },
  {
    title: "Demo Basic",
    pricing: "$500 - $1,000",
    features: [
      "Up to 5 pages",
      "Responsive design ",
      "Basic SEO ",
      "Contact form",
      "Social media links",
      "1 month support",
    ],
    recommended: "Small businesses, personal websites, bloggers",
  },
  {
    title: "Demo Standard",
    pricing: "$1,500 - $3,000",
    features: [
      "Up to 10 pages",
      "Responsive design",
      "Advanced SEO",
      "Contact form",
      "Social media links",
      "E-commerce (20 products)",
      "Blog setup",
      "Google Analytics",
      "3 months support",
    ],
    recommended:
      "Large businesses, complex e-commerce sites, custom web applications",
  },
  // {
  //   title: "Premium",
  //   pricing: "$5,000 - $10,000",
  //   features: [
  //     "Unlimited pages",
  //     "Responsive design",
  //     "Comprehensive SEO",
  //     "Contact form ",
  //     "Social media links",
  //     "Advanced security",
  //     "E-commerce (unlimited products)",
  //     "Blog setup",
  //     "Google Analytics with custom reports",
  //     "6 months support",
  //   ],
  //   recommended: "Medium-sized businesses, online stores, service providers",
  // },
]

import CheckLineIcon from "remixicon-react/CheckLineIcon"

export const checkIcon = <CheckLineIcon />

// Toggle
import MoonFoggyFillIcon from "remixicon-react/MoonFoggyFillIcon"
import SunFoggyFillIcon from "remixicon-react/SunFoggyFillIcon"

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
