import React, { useState, useEffect } from 'react';
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Input, Label, Modal, Button, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const LoginPg = () => {
    useEffect(() => {
        document.title = "Login - Wise Talkies";
      }, []);

    const [value, setValue] = useState();

    // Modal open state
    const [modal, setModal] = React.useState(false);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);

    return(
        <div>
            <section className="login-box">
                <Container fluid>
                    <Row>
                        <Col lg={7}>
                            <img src={require("../assets/images/Rectangle3463904.png")} alt='Rectangle3463904' className="login-bg" />
                            <div className="login-sub">
                                <img src={require("../assets/images/Group1000001765.png")} alt='Group1000001765' />
                                <p>You learn better when we are together</p>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="login-form">
                                <h3>Welcome Back  !</h3>
                                <p>Login to continue</p>
                                <Form>
                                    <FormGroup>
                                        <Label>Phone Number</Label>
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
                                    <FormGroup>
                                        <Label>Enter OTP </Label>
                                        <Input 
                                            type="text"
                                            name="enter-otp"
                                            placeholder="Enter 4 digit OTP"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Input 
                                            type="submit"
                                            value="Verify"
                                        />
                                    </FormGroup>
                                </Form>
                                <p>Don’t have an account ? <a onClick={toggle} className="open-popup">Sign up</a></p>
                                <Modal isOpen={modal} toggle={toggle} className="mobile-signup">
                                    <ModalBody>
                                        <div className="signup-modal">
                                        <Row>
                                            <Col lg={6}>
                                            <img src={require("../assets/images/unsplash_4.jpg")} alt='Rectangle3463904' className="signup-bg" />
                                            <div className="signup-sub">
                                                <img src={require("../assets/images/Group1000001765.png")} alt='Group1000001765' />
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
                                                <p className="last-txt">Already have an account ?<a href="/login" className="open-popup"> Login</a></p>
                                                <hr class="hr-text" data-content="OR" />
                                                <Button className="login-google"><img src={require("../assets/images/flat-color-icons_google.png")} />Login with Google</Button>
                                            </div>
                                            <div className="app-btn">
                                            <a href="/" className="apple-badge">
                                                <img src={require("../assets/images/App_Store_Badge.png")} alt="AppleBadge" />
                                            </a>
                                            <a href="/" className="google-play-badge">
                                                <img src={require("../assets/images/google_play_badge.png")} alt="GoogleBadge" />
                                            </a>
                                            </div>
                                            </Col>
                                        </Row>
                                        </div>
                                    </ModalBody>
                                </Modal>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default LoginPg;