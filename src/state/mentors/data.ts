import { makeList, MentorProps, MentorsState } from "./types";


import kate_mcdonnell from "../../images/mentors/kate_mcdonnell.jpg";
import daniel_brandt from "../../images/mentors/daniel_brandt.jpg";
import ron_depoty from "../../images/mentors/ron_depoty.jpg";
import abraham_selenke from "../../images/mentors/abraham_selenke.jpg";
import autumn_dekay from "../../images/mentors/autumn_dekay.jpg";
import joey_muller from "../../images/mentors/joey_muller.jpg";
import sam_goldman from "../../images/mentors/sam_goldman.jpg";
import talya_goldman from "../../images/mentors/talya_goldman.jpg";
import scott_miller from "../../images/mentors/scott_miller.jpg";


const mentorData: MentorProps[] = [
  { name: "Kate McDonnell", since: "2012", image: kate_mcdonnell, role: "Team Coach", bio: "Kate McDonnell, or Ms. McD to students, began mentoring the BlazerBots during the 2012 season, the same year she began teaching computer science, math, and science at Overland High School. Today she teaches Computer Science at Overland and Elevations while studying for her PhEd in Computer Science education at the University of Florida. She's the glue that holds the team together year after year, doing all of the paperwork (there's lots of that), purchasing, and general adminstrative work. She'll frequently step in to help wherever she's needed, whether it be build, programming, or electrical!" },
  { name: "Daniel Brandt", since: "2019", image: daniel_brandt, role: "Team Coach" },
  { name: "Ron DePoty", since: "2016", image: ron_depoty, role: "Media and Chief Mascot" },
  { name: "Abraham Selenke", since: "2022", image: abraham_selenke, role: "Leadership" },
  { name: "Autumn Dekay", since: "2022", image: autumn_dekay, role: "Design and Build" },
  { name: "Joey Muller", since: "2022", image: joey_muller, role: "Programming" },
  { name: "Sam Goldman", since: "2022", image: sam_goldman, role: "Fundraising and Drive Team" },
  { name: "Talya Goldman", since: "2023", image: talya_goldman, role: "Electrical and CAD" },
  { name: "Scott Miller", since: "2023", image: scott_miller, role: "Build" },
];


// Sponsor content is not dynamic, simply need to export values
export { mentorData };
