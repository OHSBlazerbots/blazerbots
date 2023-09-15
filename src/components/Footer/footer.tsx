import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { footer, linkActive } from './footer.module.css';
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram"

const stopClickPropagation:React.MouseEventHandler = event => event.stopPropagation();

function Footer() {
  return ( 
    <footer className={footer}>
        <Container>
            <Row>
                <Col>
                    Contact Us!
                </Col>
                <Col>
                </Col>
                <Col>
                    Follow Us On Social Media!
                </Col>
            </Row>
            <Row>
                <Col>
                    <AiOutlineMail />  
                    <a href="mailto:ohsblazerbots@gmail.com" className="text-white" onClick={stopClickPropagation} >ohsblazerbots@gmail.com</a>
                </Col>
                <Col>
                </Col>
                <Col>
                    <AiFillInstagram /> Instgram
                </Col>
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;
