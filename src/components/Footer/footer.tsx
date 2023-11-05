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
                    {/* This is for the center of the footer, row 1 */}
                </Col>
                <Col>
                    Follow Us On Social Media!
                </Col>
            </Row>
            <Row>
                <Col>
                    <AiOutlineMail />
                    <span> </span>
                    <a href="mailto:ohsblazerbots@gmail.com" className="text-white" onClick={stopClickPropagation} >ohsblazerbots@gmail.com</a>
                </Col>
                <Col>
                    {/* This is for the center of the footer, row 2 */}
                </Col>
                <Col>
                    <AiFillInstagram /> 
                    <span> </span>
                    <a href="mailto:ohsblazerbots@gmail.com" className="text-white" onClick={stopClickPropagation} >Instagram</a>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* This is for the left of the footer, row 3 */}
                </Col>
                <Col>
                    {/* This is for the center of the footer, row 3 */}
                </Col>
                <Col>
                    {/* This is for the right of the footer, row 3 */}
                </Col>
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;
