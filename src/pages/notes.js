import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Modal, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const WebsiteLayout = React.lazy(()=> import('../components/website-layout'));

const NotesDetails = () => {
    // Modal open state
    const [modal, setModal] = React.useState(false);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);

    return(
        <WebsiteLayout>
            <section className="notes-section">
                <Container>
                    <Row>
                        <Col>
                            <a onClick={toggle} className="open-popup">My Notes</a>
                            <Modal isOpen={modal} toggle={toggle}>
                                    <ModalBody>
                                    <span onClick={toggle} className="close-modal"><FontAwesomeIcon icon={faTimes} /></span>
                                    <div className="notes-box">
                                        <Row className="title-line">
                                            <Col lg={6} md={6}>
                                                <h3>Explore Cooking</h3>
                                            </Col>
                                            <Col lg={6} md={6}>
                                                <span>8:20 am, April 1, 2022</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12}>
                                                <div className="buttons">
                                                    <Button>Food</Button>
                                                    <Button>KerelaFood</Button>
                                                    <Button>Food Stylist</Button>
                                                    <Button>Sweets</Button>
                                                </div>
                                                <hr className="notes-hr" />
                                                <img src={require('../assets/images/Group1000002400.jpg')} />
                                                <h4>Steps to be followed:</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nibh dui, at maximus odio rhoncus at. Mauris at velit eu turpis sollicitudin congue a ac quam. Mauris facilisis pulvinar lectus, maximus placerat leo elementum ut. Etiam a diam volutpat turpis luctus vulputate ut eu felis. Vestibulum dictum, purus eu auctor pretium, elit elit porta lorem, in convallis tortor erat in leo. Aliquam ac consectetur urna, eget pharetra neque. Morbi dictum faucibus eleifend. Cras a risus sagittis, accumsan justo et, faucibus tellus. Cras ullamcorper mauris in lorem vulputate tempor. Nullam cursus, nunc a scelerisque mattis, tortor magna efficitur nunc, ac consectetur mi risus a massa. Vestibulum turpis ipsum, maximus eget viverra sed, facilisis at eros. In dignissim rutrum lobortis. Duis lectus tellus, porttitor ac pharetra varius, sollicitudin vitae ante. Mauris faucibus consectetur nibh, vel euismod felis sodales vitae.</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nibh dui, at maximus odio rhoncus at. Mauris at velit eu turpis sollicitudin congue a ac quam. Mauris facilisis pulvinar lectus, maximus placerat leo elementum ut. Etiam a diam volutpat turpis luctus vulputate ut eu felis. Vestibulum dictum, purus eu auctor pretium, elit elit porta lorem, in convallis tortor erat in leo. Aliquam ac consectetur urna, eget pharetra neque. Morbi dictum faucibus eleifend. Cras a risus sagittis, accumsan justo et, faucibus tellus. Cras ullamcorper mauris in lorem vulputate tempor. Nullam cursus, nunc a scelerisque mattis, tortor magna efficitur nunc, ac consectetur mi risus a massa. Vestibulum turpis ipsum, maximus eget viverra sed, facilisis at eros. In dignissim rutrum lobortis. Duis lectus tellus, porttitor ac pharetra varius, sollicitudin vitae ante. Mauris faucibus consectetur nibh, vel euismod felis sodales vitae.</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nibh dui, at maximus odio rhoncus at. Mauris at velit eu turpis sollicitudin congue a ac quam. Mauris facilisis pulvinar lectus, maximus placerat leo elementum ut. Etiam a diam volutpat turpis luctus vulputate ut eu felis. Vestibulum dictum, purus eu auctor pretium, elit elit porta lorem, in convallis tortor erat in leo. Aliquam ac consectetur urna, eget pharetra neque. Morbi dictum faucibus eleifend. Cras a risus sagittis, accumsan justo et, faucibus tellus. Cras ullamcorper mauris in lorem vulputate tempor. Nullam cursus, nunc a scelerisque mattis, tortor magna efficitur nunc, ac consectetur mi risus a massa. Vestibulum turpis ipsum, maximus eget viverra sed, facilisis at eros. In dignissim rutrum lobortis. Duis lectus tellus, porttitor ac pharetra varius, sollicitudin vitae ante. Mauris faucibus consectetur nibh, vel euismod felis sodales vitae.</p>
                                            </Col>
                                        </Row>
                                    </div>
                                    </ModalBody>
                                </Modal>
                        </Col>
                    </Row>
                </Container>
            </section>
        </WebsiteLayout>
    )
}

export default NotesDetails;