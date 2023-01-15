// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaPython,
  FaReact,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { SiBlender, SiMysql, SiPowerbi, SiTableau, SiVisualstudiocode } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Data from "./images/Data.jpg";
import SQL from "./images/SQL.PNG";
import Programming from "./images/Programming.PNG";
import Profile from "./images/Profile.PNG";
import Logo from "./images/logo.svg";
import Logoog from "./images/logo spin.png";

// Hero Images (add your images to the /images directory with the same names)
import Light from "./images/hero-light.jpg";
import Dark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { Light };
export { Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "CameronCSS";

// Blog link icon (imported above)
export const Blog = <FaLinkedin />;

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <SiMysql className="display-4" />,
    name: "SQL",
  },
  {
    id: 2,
    skill: <SiTableau className="display-4" />,
    name: "Tableau",
  },
  {
    id: 3,
    skill: <SiPowerbi className="display-4" />,
    name: "PowerBI",
  },
  {
    id: 4,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 5,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <SiBlender className="display-4" />,
    name: "Blender",
  },
  {
    id: 7,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 8,
    skill: <SiVisualstudiocode className="display-4" />,
    name: "Visualstudio",
  },
  {
    id: 9,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://docs.google.com/document/d/e/2PACX-1vS_OUdiDvbQCtnctV3ih1JdHsawKYk8PNGjyFXUwnEKYqbqeM01ifNlwX7l3U5zWPptq14A74yOQAVN/pub";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["SQL-Projects", "Data-Analysis", "Programming-Projects"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "Data-Analysis",
    image: Data,
  },
  {
    name: "SQL-Projects",
    image: SQL,
  },
  {
    name: "Programming-Projects",
    image: Programming,
  },
  {
    name: "CameronCSS",
    image: Profile,
  },
  {
    name: "CameronCSS.github.io",
    image: Logoog,
  },
  {
    name: "react-deploy",
    image: Logo,
  },
  {
    name: "PersonalProjects",
    image: Logoog,
  },

];

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "An passionate data analyst dedicated to uncovering valuable insights hidden within complex data sets. Utilizing my proficiency in SQL, Power BI, Tableau, and Python, I strive to make data more accessible and actionable for others. Constantly seeking new challenges and opportunities to expand my knowledge and skills as a data analyst.";


/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xayznwzp";
