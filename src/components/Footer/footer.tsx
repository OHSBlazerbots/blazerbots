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
const InstagramInfo = LinkedContactInfo(() => AiFillInstagram({size: "16"}), "https://instagram.com/ohsblazerbots", "Instagram")
const GitHubInfo = LinkedContactInfo(() => AiFillGithub({size: "16"}), "https://github.com/OHSBlazerbots", "GitHub")
const TBAInfo = LinkedContactInfo(() => <TheBlueAllianceIcon style={{width: "16px"}}/>, "https://www.thebluealliance.com/team/3807", "TheBlueAlliance")

function Footer() {
  return ( 
    <footer className={footer}>
        <Container>
            <Row>
                <Col>
                    <div>Contact Us!</div>
                    <div>{EmailInfo}</div>
                </Col>
                <Col>
                    <div>Follow Us On Social Media!</div>
                    <div>{InstagramInfo} | {GitHubInfo} | {TBAInfo}</div>
                </Col>
            </Row>
        </Container>
    </footer>
  );
}

export { Footer };
