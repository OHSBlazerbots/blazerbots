import { MentorProps } from "./types";

import kate_mcdonnell from "../../images/mentors/kate_mcdonnell.jpg";
import troy_farris from "../../images/mentors/troy_farris.jpg";
import ron_depoty from "../../images/mentors/ron_depoty.jpg";
import abraham_selenke from "../../images/mentors/abraham_selenke.jpg";
import autumn_dekay from "../../images/mentors/autumn_dekay.jpg";
import joey_muller from "../../images/mentors/joey_muller.jpg";
import sam_goldman from "../../images/mentors/sam_goldman.jpg";
import talya_goldman from "../../images/mentors/talya_goldman.jpg";
import scott_miller from "../../images/mentors/scott_miller.jpg";

const mentorData: MentorProps[] = [
  {
    name: "Kate McDonnell",
    since: "2012",
    image: kate_mcdonnell,
    role: "Team Coach",
    bio: "Kate McDonnell, or Ms. McD to students, began mentoring the BlazerBots during the 2012 season, the same year she began teaching computer science, math, and science at Overland High School. Today she teaches Computer Science at Overland and Elevations while studying for her PhEd in Computer Science education at the University of Florida. She's the glue that holds the team together year after year, doing all of the paperwork (there's lots of that), purchasing, and general adminstrative work. She'll frequently step in to help wherever she's needed, whether it be build, programming, or electrical!",
  },
  {
    name: "Troy Farris",
    since: "2012",
    image: troy_farris,
    role: "Build",
    bio: "Troy joined the BlazerBots in 2012 and mentored the build team through the 2020 season and is excited to be returning for the 2025 season! Troy brings a wealth of manufacturing experience to the shop!"
  },
  {
    name: "Ron DePoty",
    since: "2016",
    image: ron_depoty,
    role: "Media and Chief Mascot",
    bio: "Ron found the BlazerBots in 2016 through his then employer and longtime BlazerBots sponsor, Comcast. Ron currently works as a project manager at Charter Communications. Ron brings knowledge of media and photography to the BlazerBots and frequently dresses up as a pink dragon at competitions while photographing the event! Ron is also an alum of FRC, having competed on 191 X-CATS while in high school.",
  },
  {
    name: "Abraham Selenke",
    since: "2022",
    image: abraham_selenke,
    role: "Leadership",
    bio: "Abraham joined the BlazerBots as a mentor for the 2023 season, after participating as a student for three years (from 2013-2015), and quickly connected with the students! His focuses as a mentor include teaching leadership skills, helping enhance communication between subteams, and guiding the electrical team. Abraham also spearheaded the recent effort to create an independent booster club for the BlazerBots. For all of these efforts, he was awarded the 2023/24 Overland Volunteer of the Year Award.",
  },
  {
    name: "Autumn Dekay",
    since: "2022",
    image: autumn_dekay,
    role: "Design and Build",
    bio: "Autumn began mentoring the BlazerBots for the 2023 season, having participated as a student for four years (2012-2015). Autumn brings mechanical engineering, CAD, and manufacturing knowledge to the team.",
  },
  {
    name: "Joey Muller",
    since: "2022",
    image: joey_muller,
    role: "Programming",
    bio: "Joey joined the BlazerBots as a mentor for the 2023 season, after participating in high school for two years (2014-2015). Joey works as a software engineer and brings those skills to the BlazerBots, where he leads the small but dedicated programming team. He assists them with setting realistic goals and with communicating the sub-team's needs to the rest of the team.",
  },
  {
    name: "Sam Goldman",
    since: "2022",
    image: sam_goldman,
    role: "Fundraising and Drive Team",
    bio: "Sam joined the BlazerBots as a mentor for the 2023 season, after participating in high school for four years (2013-2016). He focuses his mentoring efforts on advising students on overall game strategy and on training the drive team. He also serves as the drive coach when needed. Outside of strategy, he focuses on finding corporate sponsors and funding the team so students can focus on building the robot!",
  },
  {
    name: "Talya Goldman",
    since: "2023",
    image: talya_goldman,
    role: "Electrical and CAD",
    bio: "Talya joined in 2024, after participating as a student for three years (2014-2017). Talya studied Biomedical Engineering in school and brings mechanical engineering and CAD skills to the team, and also helps mentor the electrical team.",
  },
  {
    name: "Scott Miller",
    since: "2023",
    image: scott_miller,
    role: "Build",
    bio: "Scott joined in 2024 and works as a Guidance, Navigation, and Controls engineer for the United Launch alliance. Scott brings his knowledge of woodworking to the team, and has generally focused on assisting with the build process. The 2024 season was Scott's first ever exposure to FRC, but he's looking forward to many more!",
  },
];

// Mentor content is not dynamic, simply need to export values
export { mentorData };
