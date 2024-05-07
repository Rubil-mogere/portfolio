
const headerOptions = [{ name: "Home", path: "home" }, { name: "About", path: "about" }, { name: "Education", path: "education" }, { name: "Experience", path: "experience" }, { name: "Projects", path: "project" }, { name: "Skills", path: "skills" },
//  { name: "Resume", path: "resume" }, 
 { name: "Contact", path: "contact" }]
const aboutPointsFirstHalf = [{point:"Birthday",value:"1 september 2002"},{point:"City",value:"Nairobi, Kenya"},]
const aboutPointsSecondHalf = [{point:"Phone",value:"+254759261022"},{point:"Email",value:"mogererubil@gmail.com"}]
const interest =[{name:"",img:""},{name:"",img:""},{name:"",img:""},{name:"",img:""},{name:"",img:""},]
const skills = [
    {
        tech: "LANGUAGES AND DATABASES",
        tools: [ {name: "JS", img : "javaScript"},
            {name: "HTML",img: "html"},
            {name: "CSS",img:"css" },
            {name: "MongoDB",img: "mongodb" }
        ]
    },
    {
    tech: "LIBRARIES",tools: [
            { name: "Nodejs",img : "node" },
            { name: "Expressjs",img: "express"},
            { name: "MUI",img: "mui"},
            { name: "React",img: "react"},
            { name: "Mongoose",img: "mongoose"},
            { name: "Nextjs",img: "next"},
            { name: "BootStrap",img: "bootstrap"},
        ]
    },
    {
        tech:"OTHER TOOLS",tools:[
            {name:"GIT",img:"git"},
            {name:"Github",img:"github"},
            {name:"Glitch",img:"glitch"},
            {name:"Netlify",img:"netlify"},
            {name:"Postman",img:"postman"},
            {name:"ClickUp",img:"clickup"},
        ]
    }
]
const educationDetails =[{
    
    name:" Zetech Universsity   ",
    location:" Kiambu,Ruiru,Kenya",
    cgpa:"3.50",
    degree:"Bachelor of Science Information Technology ",
    duration:"September 2021, April 2024",
    id:"dcrust",
    link:"https://www.dcrustm.ac.in/"
}]
const contactDetails = [{name:"Address",value:"Rubil, Nairobi, Kenya"},{name:"Email",value:"mogererubil@gmail.com"},{name:"Contact",value:"+254759261022"},{name:"Social Profiles",value:{"linkedin" : "https://www.linkedin.com/in/rubil-mogere-6120b6307/","github":"https://github.com/Rubil-mogere","gmail":"mogererubil@gmail.com"}}]
const about = "I have just finished my last semester in zetech university awaiting for graduation. I have worked on multiple projects using different tehnologies like JS, Nodejs, ExpressJs, GIT, JWT, HTML, CSS, Postman."
const experienceDetails = [{name:"FunctionUp",role:"Associate Software Developer",date:"September, 2021 - Present",location:"Nairobi,Kenya", responsibility:["Developing both front-end and back-end components using Node.js, Express.js for server-side logic, Next.js for client-side rendering, and JavaScript for interactive UI elements.","Develop and manage well-functioning databases and applications","Build features and applications with a mobile responsive design"],link:"https://functionup.org/"}]
const resumeLink = "https://drive.google.com/file/d/1xwS64c3Ops0lv1qXzagU88zRA7yYZySY/view?usp=sharing"
const projects=[
    


]
module.exports = {
    headerOptions, aboutPointsFirstHalf, aboutPointsSecondHalf, skills, about, experienceDetails, educationDetails, contactDetails,
    resumeLink,projects
}
