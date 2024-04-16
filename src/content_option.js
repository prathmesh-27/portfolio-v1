const logopath = "assests/PV.png";
const meta = {
    title: "Prathmesh Vairale",
    description: "I’m Prathmesh Vairale Full stack devloper _ AIML Enthusiast,currently persuing B-tech",
};

const introdata = {
    title: "Prathmesh Vairale",
    animated: {
        first: "Passionate about Coding",
        second: "Crafting cool websites",
        third: "AI and ML Enthusiast",
    },
    description: `I am a B.Tech (CSE) student with a goal-driven creative mindset and a passion for AI and ML. <br><br>Currently, I am honing my skills while pursuing my degree.<br><br>Off-screen, I enjoy sketching my thoughts and ideas <a href="https://www.pinterest.com/prathmeshvairale" target="_blank"><span class="blue-bold">here</span></a><br><br>`,

    your_img_url: "assests/m.jpg",
};

const dataabout = {
    title: "About Myself",
    aboutme: `Hello there! My journey into the world of programming began during my freshman year at <span><a href="https://ies.ipsacademy.org/" >Institute of Engineering and Science IPS Academy, Indore</a></span>. I am Currently pursuing my Bachelor's in Computer Science and Engineering from there (2021-2025).
    
    <br><br>I am currently exploring new opportunities and open to freelance work.
    
    <br><br>In addition to my academic and professional pursuits, I am deeply passionate about exploring the realms of technology and innovation. Whether it's diving into the latest advancements in AI or experimenting with new programming languages, I am always eager to expand my horizons.
    
    <br><br>Let's connect and embark on this exciting journey together!`,
    hobbies: ['Sketching my thoughts and ideas',
        'Blogging on a Whim',
        'The Joy of Gardening',
        'Anime and K-Drama Adventures',
        'Exploring the Culinary World']
};
const worktimeline = [{
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
},
{
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
},
{
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
},
];

const skills = [{
    title: 'Programming',
    skills: ['Python', 'Java', 'C++']
},
{
    title: 'Technical',
    skills: ['OS', 'DBMS', 'Git']
},
{
    title: 'Web Development',
    skills: ['Html', 'Css', "React",]
},
{
    title: 'Soft Skills',
    skills: ['Documentation', 'Teamwork', 'Problem-Solving']
}
];

const services = [{
    title: "UI/UX Design",
    description: "I create user-friendly designs that make websites easy to navigate and enjoyable to use, focusing on how users interact with the site to ensure a positive experience.",
},
{
    title: "Full-Stack Website Development",
    description: "I develop websites from start to finish, handling both the frontend and backend, ensuring it functions smoothly and looks great.",
},
{
    title: "E-commerce sites",
    description: "I build simple e-commerce websites that look good and work well, helping businesses sell their products online easily.",
},
{
    title: "Responsive Web Design",
    description: "I specialize in creating responsive web designs that adapt seamlessly to various devices and screen sizes, ensuring an optimal user experience across all platforms.",
},
{
    title: "Content Management Systems (CMS) Development",
    description: "I specialize in developing and customizing Content Management Systems (CMS) to empower clients with user-friendly platforms for managing their website content efficiently.",
},
];

const dataportfolio = [
    {
        section: "Projects",
        items: [
            {
                img: "Project_images/CineSense.png",
                title: "CineSense",
                description: "CineSense is an OTT platform with a sentiment-driven movie recommendation system, employing content-based filtering and the Cosine Similarity algorithm to offer personalized movie suggestions based on user preferences. Developed in Python with Flask, CineSense enhances the movie browsing experience, providing efficient and tailored recommendations that redefine user engagement with OTT platforms.",
                glink: "https://github.com/prathmesh-27/CineSense",
                ylink: "#",
                duration: "Sept 15,2023 to Nov 04,2023",
                technologies: ["Python", "HTML", "CSS", "JavaScript", "Flask",],
            },
            {
                img: "Project_images/Flight-Ticket-Booking.png",
                title: "Flight-Ticket Booking Management",
                description: "This Java project, developed during a training program, focuses on creating a dynamic web application. It utilizes Java for its versatile development capabilities, MySQL for efficient database management, and Apache Tomcat version 9 for seamless server-side deployment.",
                glink: "https://github.com/prathmesh-27/flight-ticket-management",
                ylink: "#",
                duration: "May 20th, 2023 to July 5th, 2023",
                technologies: ["Java", "CSS", "JavaScript"],
            },
        ],
    },
    {
        section: "Certificates",
        items: [
            {
                img: "Ceritificates/cv-builder-certificate.png",
                title: "CV_Builder_Certificate",
                description: "Certificate in Computer Vision",
                link: "#",
                duration: "Jan 15,2024 to Mar 15,2024"
            },
            {
                img: "Ceritificates/introduction-to-deep-learning.png",
                title: "Introduction to Deep Learning",
                description: "Certificate in Introduction to Deep Learning by Great Learning ",
                link: "https://www.freecodecamp.org/certification/prathmesh-vairale/responsive-web-design",
                duration: "Sept 12,2022"
            },


            {
                img: " Ceritificates/cpp-udemy.png",
                title: "Learn C++ Programmming - Beginner to Advance - Deep Dive in C++",
                description: "Certificate in C++ from Beginner to Advance on Udemy.",
                link: "https://www.udemy.com/certificate/UC-fea886dd-2381-4b74-b85f-a636c321e9a2/",
                duration: "April 11,2024"
            }
            ,
            {
                img: "Ceritificates/responsive-web-design.png",
                title: "Responsive Web Design",
                description: "Certificate in Responsive Web Design",
                link: "https://www.freecodecamp.org/certification/prathmesh-vairale/responsive-web-design",
                duration: "Sept 12,2021"
            },


            // Add more certificate items as needed
        ],
    },
];



const contactConfig = {
    YOUR_EMAIL: "prathmeshvairale17@gmail.com",
    YOUR_FONE: "(+91)88279-71844",
    description: "My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_ydsik4e",
    YOUR_TEMPLATE_ID: "template_338qopo",
    YOUR_USER_ID: "BsnVTU7iZkFCnE6lo",
};

const socialprofils = {
    github: "https://github.com/prathmesh-27",
    linkedin: "https://www.linkedin.com/in/prathmesh-vairale-603898225",
    twitter: "https://twitter.com/PrathmVairale27",
    // youtube: ""
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logopath,
};