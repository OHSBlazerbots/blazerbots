import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { footer } from './footer.module.css';
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillAlert } from "@react-icons/all-files/ai/AiFillAlert";
import type { IconType } from "@react-icons/all-files";

const stopClickPropagation:React.MouseEventHandler = event => event.stopPropagation();

const LinkedContactInfo = (displayIcon: IconType, displayText: string, link: string) => (
    <span>
        {displayIcon({})}
        &nbsp;
        <a href={link} className="text-white" onClick={stopClickPropagation} >{displayText}</a>
    </span>
)

const EmailInfo = LinkedContactInfo(AiOutlineMail, "ohsblazerbots@gmail.com", "mailto:ohsblazerbots@gmail.com")
const InstagramInfo = LinkedContactInfo(AiFillInstagram, "Instagram", "https://instagram.com/ohsblazerbots")
const GitHubInfo = LinkedContactInfo(AiFillGithub, "GitHub", "https://github.com/OHSBlazerbots")
// TODO: replace Alert with TBA logo
const TBAInfo = LinkedContactInfo(AiFillAlert, "TheBlueAlliance", "https://www.thebluealliance.com/team/3807")

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
