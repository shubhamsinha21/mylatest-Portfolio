import {
    mobile,
    blockchain,
    datascience,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nextjs,
    chakra,
    solidity,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    fintech,
    zauvijek,
    spotifyMusic,
    threejs,
    currencyConverter,
    passwordGenerator,
    portfolio
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Blockchain Developer",
        icon: blockchain,
    },
    {
        title: "Data Science",
        icon: datascience,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },

    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },

    {
        name: "Chakra UI",
        icon: chakra,
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
        name: "Solidity",
        icon: solidity,
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
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Data Analyst",
        company_name: "Fintech and Blockchain Association",
        icon: fintech,
        iconBg: "#383E56",
        date: "May 2022 - Aug 2022",
        points: [
            "Data Mining and Data Gathering from various sources.",
            "Data Preprocessing and Data Cleansing based on what is actual useful for building the model.",
            "Collaborating with Finance team for Verification of Datasets.",
            "Representation of visual data using python libraries.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Zauvijek Tech Private Limited",
        icon: zauvijek,
        iconBg: "#E6DEDD",
        date: "Mar 2023, Apr 2023",
        points: [
            "Developing User Interface of company website Using Next Js and Chakra UI.",
            "Created Zauvujek Business Profile Using Canva.",
            "Writing Documentation, creating Flow Diagrams and Design's on Figma.",
            "Interacting with other developers and building the IT-DESK product.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "SpotifyMusic App",
        description:
            "Android Music Player App using React-Native and typescript. It uses react-native playback service library to create playlist",
        tags: [
            {
                name: "react-native",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: spotifyMusic,
        source_code_link: "https://github.com/shubhamsinha21/SpotifyMusic",
    },

    {
        name: "Currency Converter App",
        description:
            "Currency Converter Application for android that simply converts currency in Indian Rupees.",
        tags: [
            {
                name: "react-native",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: currencyConverter,
        source_code_link: "https://github.com/shubhamsinha21/CurrencyConverterApp",
    },

    {
        name: "Password Generator App",
        description:
            "App that generated password. It has 4 options such as - uppercase, lowercase, numbers & symbols.",
        tags: [
            {
                name: "react-native",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },

        ],
        image: passwordGenerator,
        source_code_link: "https://github.com/shubhamsinha21/Password-Generator-App",
    },

    {
        name: "Portfolio Website",
        description:
            "Portfolio Website to showcase my skills and experiences.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "three-js",
                color: "pink-text-gradient",
            },
            {
                name: "tailwindCss",
                color: "red-text-gradient",
            },

        ],
        image: portfolio,
        source_code_link: "https://github.com/shubhamsinha21/mylatest-Portfolio",
    },


];

export { services, technologies, experiences, testimonials, projects };
