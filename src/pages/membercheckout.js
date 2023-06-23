import React from 'react';
import { Button, Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { Label } from 'reactstrap';

const MemberCheckout = () => {
    return(
        <section className="member-checkout">
            <Container>
                <Row>
                    <Col lg={12}>
                        <p>Step 1/2</p>
                        <h3>What brings you to WiseTalkies today?</h3>
                        <Form>
                            <FormGroup className="form-group width28">
                                <input type="checkbox" id="topping" name="topping" value="Paneer" />
                                <Label>Inspiration and entertainment</Label>
                            </FormGroup>
                            <FormGroup className="form-group width28">
                                <input type="checkbox" id="topping" name="topping" value="Paneer" />
                                <Label>To learn something new</Label>
                            </FormGroup>
                            <FormGroup className="form-group width28">
                                <input type="checkbox" id="topping" name="topping" value="Paneer" />
                                <Label>To get better at something I do</Label>
                            </FormGroup>
                            <FormGroup className="form-group width28">
                                <input type="checkbox" id="topping" name="topping" value="Paneer" />
                                <Label>To browse around!</Label>
                            </FormGroup>
                            <FormGroup className="form-group width28">
                                <input type="checkbox" id="topping" name="topping" value="Paneer" />
                                <Label>All of the above</Label>
                            </FormGroup>
                        </Form>
                        <div className="btn-grup">
                            <Button className="nxt-btn">Next</Button>
                            <a href="/" className="skip-link">skip</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MemberCheckout;