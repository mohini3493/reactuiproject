import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import MacbookGold from '../../assets/images/Apple-Macbook-Gold.png';
import MacbookGold1 from '../../assets/images/Apple-Macbook-Gold1.png';
import { Link } from 'react-router-dom';

const CrossBox = () => {
    return(
        <section className="cross-section">
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <h3 className="text-center cross-title">What Will You<br/> Discover?</h3>
                    </Col>
                </Row>
                <Row className="cross-space-bottom">
                    <Col lg={8} md={8} className="cross-padding">
                        <img src={MacbookGold} alt="Macbook Gold" className="cross-tab" />
                    </Col>
                    <Col lg={4} md={4} className="col-four-box">
                        <div className="cross-right-box">
                            <h3>Immersive Courses</h3>
                            <p>Cinema-quality video, interactive learning exercises, and the most engaging instructors from schools like Yale, NYU, Cornell, and MIT.</p>
                            <Link to="#">Learn more <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </div>
                    </Col>
                </Row>
                <Row className="cross-space-bottom">
                    <Col lg={4} md={4} className="col-four-box-left">
                        <div className="cross-right-box">
                            <h3>Online Learning Designed For Real Life</h3>
                            <p>Move your creative journey forward  without putting life on hold. </p>
                            <Link to="#">Learn more <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </div>
                    </Col>
                    <Col lg={8} md={8} className="cross-padding">
                        <img src={MacbookGold1} alt="Macbook Gold Right" className="cross-tab" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default CrossBox;