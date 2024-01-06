import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { footer } from './footer.module.css';
import { stopClickPropagation } from "../../utils/events";
import { TheBlueAllianceIcon } from "../Icon";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";

type TDisplayIcon = () => JSX.Element;
const LinkedContactInfo = (displayIcon: TDisplayIcon, link: string, displayText?: string) => (
    <span>
        <a href={link} className="text-white" onClick={stopClickPropagation} >
            {displayIcon()}
            {displayText && ` ${displayText}`}
        </a>
    </span>
)

const EmailInfo = LinkedContactInfo(() => AiOutlineMail({size: "16"}), "mailto:ohsblazerbots@gmail.com", "ohsblazerbots@gmail.com")
const InstagramInfo = LinkedContactInfo(() => AiFillInstagram({size: "48"}), "https://instagram.com/ohsblazerbots")
const GitHubInfo = LinkedContactInfo(() => AiFillGithub({size: "48"}), "https://github.com/OHSBlazerbots")
const TBAInfo = LinkedContactInfo(() => <TheBlueAllianceIcon style={{width: "48px"}}/>, "https://www.thebluealliance.com/team/3807")

function Footer() {
  return ( 
    <footer className={footer}>
        <Container>
                    <div>Contact Us!</div>
                    <div>{EmailInfo}</div>
            <hr/>
                    <div>{InstagramInfo} {GitHubInfo} {TBAInfo}</div>
            <hr/>
            FRC Team 3807 | Overland BlazerBots
        </Container>
    </footer>
  );
}

export { Footer };
