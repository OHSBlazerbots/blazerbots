import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { footer, column as columnStyle } from './footer.module.css';
import { stopClickPropagation } from "../../utils/events";
import { TheBlueAllianceIcon } from "../Icon";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";

const FooterLink = (link: string, displayElement: JSX.Element) => (
    <a href={link} className="text-white" onClick={stopClickPropagation} >
        {displayElement}
    </a>
);

const EmailInfo = FooterLink("mailto:ohsblazerbots@gmail.com", <>ohsblazerbots@gmail.com</>)
const InstagramInfo = FooterLink("https://instagram.com/ohsblazerbots", <AiFillInstagram size="32" />)
const GitHubInfo = FooterLink("https://github.com/OHSBlazerbots", <AiFillGithub size="32" />)
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
