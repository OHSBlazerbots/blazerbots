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
  { name: "Kate McDonnell", since: "2012", image: kate_mcdonnell },
  { name: "Daniel Brandt", since: "???", image: daniel_brandt },
  { name: "Ron DePoty", since: "2016", image: ron_depoty },
  { name: "Abraham Selenke", since: "2022", image: abraham_selenke },
  { name: "Autumn Dekay", since: "2022", image: autumn_dekay },
  { name: "Joey Muller", since: "2022", image: joey_muller },
  { name: "Sam Goldman", since: "2022", image: sam_goldman },
  { name: "Talya Goldman", since: "2023", image: talya_goldman },
  { name: "Scott Miller", since: "2023", image: scott_miller },
];


// Sponsor content is not dynamic, simply need to export values
export { mentorData };
