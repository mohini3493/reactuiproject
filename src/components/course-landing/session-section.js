import React, { useState } from 'react';
import { Button, Col, Container, Row, Form, FormGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Input, Modal, ModalBody } from 'reactstrap';
import { useNavigate, Link } from 'react-router-dom';

const NewSessions = () =>{
    const navigate = useNavigate();
    const [value, setValue] = useState();

    // Modal open state
    const [modal, setModal] = React.useState(false);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);

    return(
        <section className="new-session">
            <Container fluid>
                <Row>
                    <Col lg={7}>
                        <img src={require('../../assets/images/trailer-toyiq.png')} alt="Trailer" />
                        <Link to="/" className="non-link"><FontAwesomeIcon icon={faPlay} /> Watch Trailer</Link>
                    </Col>
                    <Col lg={5}>
                        <div className="session-content">
                            <p className="new-wise">New from Wise Talkies</p>
                            <h4>Sessions</h4>
                            <h3>Become a Chef</h3>
                            <hr className="hr1" />
                            <p className="name1">Suresh Pillai</p>
                            <Button onClick={toggle} className="sign-btn">Sign up</Button>
                            <Modal isOpen={modal} toggle={toggle} className="mobile-signup">
                                <ModalBody>
                                    <div className="signup-modal">
                                    <Row>
                                        <Col lg={6}>
                                        <img src={require("../../assets/images/unsplash_4.jpg")} alt='Rectangle3463904' className="signup-bg" />
                                        <div className="signup-sub">
                                            <img src={require("../../assets/images/Group1000001765.png")} alt='Group1000001765' />
                                            <p>You learn better when we are together</p>
                                        </div>
                                        </Col>
                                        <Col lg={6}>
                                        <span onClick={toggle} className="close-modal"><FontAwesomeIcon icon={faTimes} /></span>
                                        <div className="signup-box">
                                            <h3>Sign up</h3>
                                            <p className="first-txt">Welcome to the Wisetalkies</p>
                                            <p className="sub-txt">Enter the phone numbe to continue</p>
                                            <Form>
                                                <FormGroup>
                                                    <PhoneInput
                                                        defaultCountry="IN"
                                                        international
                                                        placeholder="Enter phone number"
                                                        value={value}
                                                        onChange={setValue}
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Input 
                                                        type="submit"
                                                        value="SEND OTP"
                                                    />
                                                </FormGroup>
                                            </Form>
                                            <p className="last-txt">Already have an account ?<Link to="/login" className="open-popup"> Login</Link></p>
                                            <hr class="hr-text" data-content="OR" />
                                            <Button onClick={event =>  navigate('/#')} className="login-google"><img src={require("../../assets/images/flat-color-icons_google.png")}  alt="LoginGoogle" />Login with Google</Button>
                                        </div>
                                        <div className="app-btn">
                                        <Link to="/" className="apple-badge">
                                            <img src={require("../../assets/images/App_Store_Badge.png")} alt="AppleBadge" />
                                        </Link>
                                        <Link to="/" className="google-play-badge">
                                            <img src={require("../../assets/images/google_play_badge.png")} alt="GoogleBadge" />
                                        </Link>
                                        </div>
                                        </Col>
                                    </Row>
                                    </div>
                                </ModalBody>
                            </Modal>
                            <hr className="hr2" data-content="or" />
                            <p className="deal-txt">Ultimate Deal</p>
                            <p className="offer-txt">Exclusive Single Course Offer <strong>upto 15% off</strong></p>
                            <Button onClick={toggle} className="sign-btn">Buy this course <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NewSessions;