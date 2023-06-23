import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import RightOne from '../../assets/images/Group14379.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const RightBox = () => {
    const navigate = useNavigate();
    return(
        <section className="right-one-box">
            <Container fluid>
                <div className="grey-box">
                    <Row>
                        <Col lg={5}>
                            <h3 className="right-title">Stream anytime, anywhere, at your own pace.</h3>
                            <ul className="right-list">
                                <li className="d-flex align-items-start"><FontAwesomeIcon icon={faCheck} /> Watch on desktop, TV, or mobile device</li>
                                <li className="d-flex align-items-start"><FontAwesomeIcon icon={faCheck} /> Download and watch offline<br/> (select plans)</li>
                                <li className="d-flex align-items-start"><FontAwesomeIcon icon={faCheck} /> Downloadable instructor guides for<br/> every class</li>
                            </ul>
                            <p className="rupee-txt">₹1296/month</p>
                            <p className="rupee-bottom">Billed annually</p>
                            <div className="d-grid">
                                <Button onClick={event =>  navigate('/membership')} className="blue-btn">Get Started</Button>
                                <Button onClick={event =>  navigate('/category')} className="grey-btn">Explore Classes</Button>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <img src={RightOne} alt="Right One" className="right-tab" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
};

export default RightBox;
