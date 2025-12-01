import { FaMousePointer, FaTools } from "react-icons/fa";
import {
  FaUserAstronaut,
  FaPalette,
  FaChess,
  FaChartLine,
  FaListCheck,
  FaRecordVinyl,
  FaChartColumn,
  FaTicket,
} from "react-icons/fa6";

const TECHNOLOGY = {
  ["Axios"]: { name: "Axios", colour: "#c8d0ff" },
  ["CSS"]: { name: "CSS", colour: "#c9f0ff" },
  ["Cloudinary Image Storage"]: {
    name: "Cloudinary Image Storage",
    colour: "#ffd8e8",
  },
  ["Express"]: { name: "Express", colour: "#e0e0e0" },
  ["express-fileupload"]: { name: "express-fileupload", colour: "#bde6e7ff" },
  ["Firestore"]: { name: "Firestore", colour: "#ffe3b8" },
  ["Flamingo Finance's REST API Service"]: {
    name: "Flamingo Finance's REST API Service",
    colour: "#ffd7ef",
  },
  ["Helmet"]: { name: "Helmet", colour: "#ffe6cc" },
  ["HTML"]: { name: "HTML", colour: "#ffddcc" },
  ["JavaScript"]: { name: "JavaScript", colour: "#fff4b8" },
  ["Jest"]: { name: "Jest", colour: "#f2c8d9" },
  ["Joi"]: { name: "Joi", colour: "#c8f5e6" },
  ["JWT Auth"]: { name: "JWT Auth", colour: "#ffe7c2" },
  ["MongoDB"]: { name: "MongoDB", colour: "#c9f3d2" },
  ["Morgan"]: { name: "Morgan", colour: "#cbd5e1" },
  ["Multer"]: { name: "Multer", colour: "#ffe8cc" },
  ["MySQL"]: { name: "MySQL", colour: "#d5ecff" },
  ["Node.js"]: { name: "Node.js", colour: "#fff7afff" },
  ["QR Code"]: { name: "QR Code", colour: "#eeeeee" },
  ["R3F"]: { name: "R3F", colour: "#e3d7ff" },
  ["Radix UI"]: { name: "Radix UI", colour: "#e1f2ff" },
  ["React"]: { name: "React", colour: "#d4f6ff" },
  ["React (TypeScript)"]: { name: "React (TypeScript)", colour: "#d8e8ff" },
  ["Recharts"]: { name: "Recharts", colour: "#f0efd9" },
  ["Redux"]: { name: "Redux", colour: "#e8d4ff" },
  ["Rollup"]: { name: "Rollup", colour: "#ffd4cc" },
  ["Sequelize"]: { name: "Sequelize", colour: "#d8f0ff" },
  ["Storybook"]: { name: "Storybook", colour: "#ffd5f5" },
  ["SVGR"]: { name: "SVGR", colour: "#e2ffe8" },
  ["Tailwind CSS"]: { name: "Tailwind CSS", colour: "#d4f8f0" },
  ["Tanstack Query"]: { name: "Tanstack Query", colour: "#ffeac7" },
  ["Tanstack Tables"]: { name: "Tanstack Tables", colour: "#e5e5ff" },
  ["Three.js"]: { name: "Three.js", colour: "#d3ffe2" },
  ["TypeScript"]: { name: "TypeScript", colour: "#d6e4ff" },
  ["vanilla-extract"]: { name: "vanilla-extract", colour: "#fff3d6" },
};

export default [
  {
    title: "Portfolio",
    icon: FaUserAstronaut,
    colour: "#7e007b",
    description: [
      "the current website you're viewing right now!",
      "entirely and uniquely built by me, myself, and I",
    ],
    stack: [TECHNOLOGY["React"], TECHNOLOGY["Three.js"], TECHNOLOGY["R3F"]],
    links: [
      {
        name: "GitHub",
        address: "https://github.com/marcobuontempo/portfolio/",
      },
      {
        name: "Website",
        address: "https://www.marcobuontempo.com/",
      },
    ],
  },
  {
    title: "Museum of CSS Art",
    icon: FaPalette,
    colour: "#ff9f1c",
    description: [
      "a creative project, exclusively using CSS styling tricks to create artworks and designs",
      "many artworks are created using only a single HTML <div> element, requiring out-of-the-box thinking, resourcefulness, and creativity",
      "serves no functional purpose, just enjoy :)",
    ],
    stack: [TECHNOLOGY["CSS"]],
    links: [
      {
        name: "GitHub",
        address: "https://github.com/marcobuontempo/mocssa/",
      },
      {
        name: "Website",
        address: "https://museumofcss.art/",
      },
    ],
  },
  {
    title: "Tonnetto Chess Engine",
    icon: FaChess,
    colour: "#2ec4b6",
    description: [
      "fully-custom TypeScript chess engine",
      "no runtime dependencies, working directly in the browser",
      "uses a board-centric design, implementing multiple chess programming concepts",
      "bug-free, verified through deep perft analysis (including integrated Jest testing)",
      "~1600+ ELO",
    ],
    stack: [TECHNOLOGY["TypeScript"], TECHNOLOGY["Jest"]],
    links: [
      {
        name: "GitHub",
        address: "https://github.com/marcobuontempo/tonnetto/",
      },
      {
        name: "GUI Demo",
        address: "https://chess.marcobuontempo.com/",
      },
    ],
  },
  {
    title: "Flamboyance Dashboard",
    icon: FaChartLine,
    colour: "#ff6b6b",
    description: [
      "front-end analytics and insights dashboard for flamingo.finance's DeFi platform",
      '1st place "Dashboard-Athon" winner, as a solo dev (including ~AUD$3k prize money)!',
      "received contribution for an updated/modern UI redesign, which I have since implemented",
    ],
    stack: [
      TECHNOLOGY["React (TypeScript)"],
      TECHNOLOGY["Redux"],
      TECHNOLOGY["Recharts"],
      TECHNOLOGY["Tanstack Tables"],
      TECHNOLOGY["Tailwind CSS"],
      TECHNOLOGY["Axios"],
      TECHNOLOGY["Flamingo Finance's REST API Service"],
    ],
    links: [
      {
        name: "GitHub",
        address: "https://github.com/marcobuontempo/flamboyance-cc/",
      },
      {
        name: "Website",
        address: "https://www.flamboyance.cc/",
      },
    ],
  },
  {
    title: "Task Planner JWD",
    icon: FaListCheck,
    colour: "#4d96ff",
    description: [
      'my first ever "complete" web project: a very simple front-end only task planner!',
      "created collaboratively in a team during Generation Australia's bootcamp, with instructor guidance and training",
    ],
    stack: [TECHNOLOGY["HTML"], TECHNOLOGY["CSS"], TECHNOLOGY["JavaScript"]],
    links: [
      {
        name: "GitHub",
        address: "https://github.com/marcobuontempo/Task-Planner-JWD/",
      },
      {
        name: "Website",
        address: "https://marcobuontempo.github.io/Task-Planner-JWD/",
      },
    ],
  },
  {
    title: "Reactive Cursors",
    icon: FaMousePointer,
    colour: "#f72585",
    description: [
      "React.js custom-cursor UI component, available through npm registry",
      "fully customisable with deep configuration options",
      "supports basic in-built shapes, as well as any user supplied SVG design",
      "accessibility features are fully baked-in under the hood, including automatic fallbacks",
    ],
    stack: [
      TECHNOLOGY["React (TypeScript)"],
      TECHNOLOGY["Rollup"],
      TECHNOLOGY["Storybook"],
      TECHNOLOGY["SVGR"],
      TECHNOLOGY["Jest"],
    ],
    links: [
      {
        name: "GitHub",
        address: "https://github.com/haus-of-cards/cursors",
      },
      {
        name: "Website",
        address: "https://haus-of-cards.github.io/cursors/",
      },
      {
        name: "npm package",
        address: "https://www.npmjs.com/package/@holmesdev/cursors",
      },
    ],
  },
  {
    title: "Vinyl Vision",
    icon: FaRecordVinyl,
    colour: "#ffbe0b",
    description: [
      'full-stack "FERN" prototype e-commerce platform',
      "local cart and user login with persisting data",
      "dynamic product querying, including structured queries and composite indexes",
      'authentication and authorisation, with "Admin" roles (elevated priveleges)',
      "full CRUD functionality, with image uploading to Cloudinary",
    ],
    stack: [
      TECHNOLOGY["vanilla-extract"],
      TECHNOLOGY["Firestore"],
      TECHNOLOGY["Express"],
      TECHNOLOGY["React (TypeScript)"],
      TECHNOLOGY["Node.js"],
      TECHNOLOGY["Cloudinary Image Storage"],
      TECHNOLOGY["Tanstack Query"],
      TECHNOLOGY["Joi"],
      TECHNOLOGY["Helmet"],
      TECHNOLOGY["Morgan"],
      TECHNOLOGY["express-fileupload"],
    ],
    links: [
      {
        name: "GitHub",
        address: "https://github.com/marcobuontempo/vinyl-vision/",
      },
      {
        name: "Website",
        address: "https://vinyl-vision.marcobuontempo.com/",
      },
    ],
  },
  {
    title: "Bob's Garage",
    icon: FaTools,
    colour: "#6a994e",
    description: [
      'full-stack "MyERN" application for service-based business',
      "full CRUD functionality, including server-side image uploading",
      "user accounts with persisting individual preferences —  e.g. change frontend theme (light/dark)",
      '"favourites" system, where users can add/remove individual services into a curated list',
    ],
    stack: [
      TECHNOLOGY["MySQL"],
      TECHNOLOGY["Express"],
      TECHNOLOGY["React (TypeScript)"],
      TECHNOLOGY["Node.js"],
      TECHNOLOGY["Sequelize"],
      TECHNOLOGY["Multer"],
      TECHNOLOGY["Joi"],
      TECHNOLOGY["Redux"],
      TECHNOLOGY["Radix UI"],
      TECHNOLOGY["Tailwind CSS"],
      TECHNOLOGY["Tanstack Query"],
    ],
    links: [
      {
        name: "GitHub",
        address: "https://github.com/marcobuontempo/bobs-garage/",
      },
      {
        name: "Website",
        address: "https://bobs-garage.marcobuontempo.com/",
      },
    ],
  },
  {
    title: "Data Structures & Algorithms Visualiser",
    icon: FaChartColumn,
    colour: "#1982c4",
    description: [
      "custom implementations of common data structures and algorithms",
      "data structures: Doubly-Linked List, Binary Tree, Hash Table",
      "algorithms: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Bogo Sort",
      "other: OS signal trigger, capture, and response (SIGINT)",
    ],
    stack: [TECHNOLOGY["TypeScript"], TECHNOLOGY["Jest"]],
    links: [
      {
        name: "GitHub",
        address:
          "https://github.com/marcobuontempo/data-structures-and-algorithms",
      },
      {
        name: "GUI",
        address: "https://dsa.marcobuontempo.com/",
      },
    ],
  },
  {
    title: "FOSS Front Row",
    icon: FaTicket,
    colour: "#9d4edd",
    description: [
      'proof-of-concept "MERN" stack project for an event ticketing system',
      "full CRUD application for event management (i.e create and manage your ticketed events)",
      "integrates QR code generation and scanning for event tickets",
      'allows both "User" and "Admin" account roles',
    ],
    stack: [
      TECHNOLOGY["MongoDB"],
      TECHNOLOGY["Express"],
      TECHNOLOGY["React"],
      TECHNOLOGY["Node.js"],
      TECHNOLOGY["JWT Auth"],
      TECHNOLOGY["Redux"],
      TECHNOLOGY["QR Code"],
    ],
    links: [
      {
        name: "GitHub",
        address: "https://github.com/marcobuontempo/foss-front-row/",
      },
      {
        name: "Video Demo",
        address: "https://www.youtube.com/watch?v=rvq_WHKXlh8/",
      },
    ],
  },
];
