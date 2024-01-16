import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { footer, column as columnStyle } from './footer.module.css';
import { stopClickPropagation } from "../../utils/events";
import { TheBlueAllianceIcon } from "../Icon";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";

type TDisplayElement = () => JSX.Element;
const LinkedContactInfo = (displayElement: TDisplayElement, link: string) => (
    <span>
        <a href={link} className="text-white" onClick={stopClickPropagation} >
            {displayElement()}
        </a>
    </span>
)

const EmailInfo = LinkedContactInfo(() => <>ohsblazerbots@gmail.com</>, "mailto:ohsblazerbots@gmail.com")
const InstagramInfo = LinkedContactInfo(() => AiFillInstagram({size: "32"}), "https://instagram.com/ohsblazerbots")
const GitHubInfo = LinkedContactInfo(() => AiFillGithub({size: "32"}), "https://github.com/OHSBlazerbots")
const TBAInfo = <TheBlueAllianceIcon style={{width: "32px"}}/>

function Footer() {
  return ( 
    <footer className={footer}>
        <Container>
            <Row xs={1} sm={2}>
                <Col className={columnStyle}>Contact Us! {EmailInfo}</Col>
                <Col className={columnStyle}>Follow Us: {InstagramInfo} {GitHubInfo} {TBAInfo}</Col>
            </Row>
            <hr/>
            FRC Team 3807 | Overland BlazerBots
        </Container>
    </footer>
  );
}

export { Footer };
