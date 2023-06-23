import React, { useEffect} from 'react';
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';

const ContactUs = () => {
    useEffect(() => {
        document.title = "Contact Us - Wise Talkies";
      }, []);

    return(
        <div>
            <section className="contact-box">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center">
                                <h3>Connecting world with knowledge</h3>
                                <p>We’d love to hear from you!Tell us your requirements and our experts will reach out to<br /> you at the earliest.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="contact-grey">
                        <Col lg={6} className="contact-info">
                            <h4>Contact information</h4>
                            <p>Lorem ipsum dolor sit amet, consectet adipiscing elit. Aliquet proin eu amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet proin eu amet.</p>
                            <ul className="contact-txt">
                                <li><img src={require("../assets/images/fluent_call-24-regular.png")} alt="contact icon" /> +91 9184560000</li>
                                <li><img src={require("../assets/images/carbon_email.png")} alt="contact icon" /> support@wisetalkies.com</li>
                                <li><img src={require("../assets/images/ep_location.png")} alt="contact icon" /> Kerala, India</li>
                            </ul>
                        </Col>
                        <Col lg={6} className="contact-form">
                            <h3>Get in touch</h3>
                            <Form>
                                <FormGroup>
                                    {/* <Label>Full Name </Label> */}
                                    <Input 
                                        type="text"
                                        name="full-name"
                                        placeholder="Full Name"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    {/* <Label>Email-id </Label> */}
                                    <Input 
                                        type="email"
                                        name="email-id"
                                        placeholder="Email-id"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    {/* <Label>Phone number </Label> */}
                                    <Input 
                                        type="tel"
                                        name="phone-number"
                                        placeholder="Phone number"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    {/* <Label>Message </Label> */}
                                    <Input 
                                        type="textarea"
                                        name="message"
                                        rows={4}
                                        placeholder="Message"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input 
                                        type="submit"
                                        value="Submit"
                                    />
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default ContactUs;