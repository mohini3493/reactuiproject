import React from 'react';
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { Label } from 'reactstrap';
import { Input, Modal, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

const MemberCheckout2 = () => {
    // Modal open state
    const [modal, setModal] = React.useState(false);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);

    return(
        <section className="member-checkout">
            <Container>
                <Row>
                    <Col lg={12}>
                        <p>Step 2/2</p>
                        <h3>What topics do you find interesting?</h3>
                        <Row>
                            <Col lg={6}>
                                <Form>
                                    <FormGroup className="form-group width58">
                                        <Input type="checkbox" id="topping" name="topping" value="Paneer" />
                                        <Label>Food</Label>
                                    </FormGroup>
                                    <FormGroup className="form-group width58">
                                        <Input type="checkbox" id="topping" name="topping" value="Paneer" />
                                        <Label>Arts & Entertainment</Label>
                                    </FormGroup>
                                    <FormGroup className="form-group width58">
                                        <Input type="checkbox" id="topping" name="topping" value="Paneer" />
                                        <Label>Music</Label>
                                    </FormGroup>
                                    <FormGroup className="form-group width58">
                                        <Input type="checkbox" id="topping" name="topping" value="Paneer" />
                                        <Label>Writing</Label>
                                    </FormGroup>
                                    <FormGroup className="form-group width58">
                                        <Input type="checkbox" id="topping" name="topping" value="Paneer" />
                                        <Label>Sports & Gaming</Label>
                                    </FormGroup>
                                    <FormGroup className="form-group width58">
                                        <Input type="checkbox" id="topping" name="topping" value="Paneer" />
                                        <Label>Design & Style</Label>
                                    </FormGroup>
                                </Form>
                            </Col>
                            <Col lg={6}>
                                <Form>
                                    <FormGroup className="form-group width58">
                                        <Input type="checkbox" id="topping" name="topping" value="Paneer" />
                                        <Label>Business</Label>
                                    </FormGroup>
                                    <FormGroup className="form-group width58">
                                        <Input type="checkbox" id="topping" name="topping" value="Paneer" />
                                        <Label>Science & Tech</Label>
                                    </FormGroup>
                                    <FormGroup className="form-group width58">
                                        <Input type="checkbox" id="topping" name="topping" value="Paneer" />
                                        <Label>Home & Lifestyle</Label>
                                    </FormGroup>
                                    <FormGroup className="form-group width58">
                                        <Input type="checkbox" id="topping" name="topping" value="Paneer" />
                                        <Label>Community & Government</Label>
                                    </FormGroup>
                                    <FormGroup className="form-group width58">
                                        <Input type="checkbox" id="topping" name="topping" value="Paneer" />
                                        <Label>Wellness</Label>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                        <div className="btn-grup">
                            <Button className="nxt-btn">Submit</Button>
                            <a onClick={toggle} className="skip-link">skip</a>
                            <Modal isOpen={modal} toggle={toggle}>
                                <ModalBody>
                                    <span onClick={toggle} className="close-modal"><FontAwesomeIcon icon={faTimes} /></span>
                                    <div className="checkout-modal">
                                        <Row className="main-row">
                                            <Col lg={2}>
                                                <Button className="number-btn">20</Button>
                                            </Col>
                                            <Col lg={10}>
                                                <h3>Classes for You</h3>
                                                <p className="interest-txt">from 3 interests</p>
                                            </Col>
                                        </Row>
                                        <Row className="sub-row">
                                            <Col lg={8}>
                                                <p className="other-txt">Here are your custom results. Scroll down to view your recommended classes or click to filter by category. Every membership includes:</p>
                                                <ul className="check-list">
                                                    <li><FontAwesomeIcon icon={faCheck} /> All 150+ classes and categories in our library</li>
                                                    <li><FontAwesomeIcon icon={faCheck} /> New classes added every month</li>
                                                    <li><FontAwesomeIcon icon={faCheck} /> Download and watch offline</li>
                                                </ul>
                                            </Col>
                                            <Col lg={4}>
                                                <Button className="plan-btn">Get Started</Button>
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
    )
}

export default MemberCheckout2;