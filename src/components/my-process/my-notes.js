import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Modal, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MyNotes = () => {
    var settings = {
        dots: true,
        arrows: true,
        lazyLoad: 'progressive',
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
          ]
    };
    // Modal open state
    const [modal, setModal] = React.useState(false);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);

    return(
        <section className="all-notes">
            <Container>
                <Row>
                    <Col lg={10} md={10}>
                        <h3>My Notes</h3>
                        <p>Notes which you generate</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Slider {...settings}>
                            <div className="note-img" onClick={toggle}>
                                <img src={require('../../assets/images/notes-bg.png')} alt="Notes"/>
                                <div className="note-content">
                                    <p className="note-cat">Food</p>
                                    <div className="note-sub">
                                        <div className="note-title">Explore Cooking</div>
                                        <div className="note-txt">When you enter into any new area of science, you almost always find.</div>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="note-img" onClick={toggle}>
                                <img src={require('../../assets/images/bg1.png')} alt="Notes"/>
                                <div className="note-content">
                                    <div className="cat-group">
                                        <p className="note-cat cat1">Food</p>
                                        <p className="note-cat2">Chef’s suggestion</p>
                                    </div>
                                    <div className="note-sub">
                                        <div className="note-title dark1">Rice Preperation</div>
                                        <div className="note-txt dark-txt">Your business is in a continual battle for your customers’ recognition whether you know it</div>
                                        <p className="green-txt">Always Remember</p>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="note-img" onClick={toggle}>
                                <img src={require('../../assets/images/notes-bg.png')} alt="Notes"/>
                                <div className="note-content">
                                    <p className="note-cat">Food</p>
                                    <div className="note-sub">
                                        <div className="note-title">Explore Cooking</div>
                                        <div className="note-txt">When you enter into any new area of science, you almost always find.</div>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="note-img" onClick={toggle}>
                                <img src={require('../../assets/images/bg1.png')} alt="Notes"/>
                                <div className="note-content">
                                    <div className="cat-group">
                                        <p className="note-cat cat1">Food</p>
                                        <p className="note-cat2">Chef’s suggestion</p>
                                    </div>
                                    <div className="note-sub">
                                        <div className="note-title dark1">Rice Preperation</div>
                                        <div className="note-txt dark-txt">Your business is in a continual battle for your customers’ recognition whether you know it</div>
                                        <p className="green-txt">Always Remember</p>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="note-img" onClick={toggle}>
                                <img src={require('../../assets/images/notes-bg.png')} alt="Notes"/>
                                <div className="note-content">
                                    <p className="note-cat">Food</p>
                                    <div className="note-sub">
                                        <div className="note-title">Explore Cooking</div>
                                        <div className="note-txt">When you enter into any new area of science, you almost always find.</div>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="note-img" onClick={toggle}>
                                <img src={require('../../assets/images/bg1.png')} alt="Notes"/>
                                <div className="note-content">
                                    <div className="cat-group">
                                        <p className="note-cat cat1">Food</p>
                                        <p className="note-cat2">Chef’s suggestion</p>
                                    </div>
                                    <div className="note-sub">
                                        <div className="note-title dark1">Rice Preperation</div>
                                        <div className="note-txt dark-txt">Your business is in a continual battle for your customers’ recognition whether you know it</div>
                                        <p className="green-txt">Always Remember</p>
                                    </div>                                    
                                </div>
                            </div>
                        </Slider>
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
                                        <img src={require('../../assets/images/Group1000002400.jpg')} alt="Notes"/>
                                        <h4>Steps to be followed:</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nibh dui, at maximus odio rhoncus at. Mauris at velit eu turpis sollicitudin congue a ac quam. Mauris facilisis pulvinar lectus, maximus placerat leo elementum ut. Etiam a diam volutpat turpis luctus vulputate ut eu felis. Vestibulum dictum, purus eu auctor pretium, elit elit porta lorem, in convallis tortor erat in leo. Aliquam ac consectetur urna, eget pharetra neque. Morbi dictum faucibus eleifend. Cras a risus sagittis, accumsan justo et, faucibus tellus. Cras ullamcorper mauris in lorem vulputate tempor. Nullam cursus, nunc a scelerisque mattis, tortor magna efficitur nunc, ac consectetur mi risus a massa. Vestibulum turpis ipsum, maximus eget viverra sed, facilisis at eros. In dignissim rutrum lobortis. Duis lectus tellus, porttitor ac pharetra varius, sollicitudin vitae ante. Mauris faucibus consectetur nibh, vel euismod felis sodales vitae.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nibh dui, at maximus odio rhoncus at. Mauris at velit eu turpis sollicitudin congue a ac quam. Mauris facilisis pulvinar lectus, maximus placerat leo elementum ut. Etiam a diam volutpat turpis luctus vulputate ut eu felis. Vestibulum dictum, purus eu auctor pretium, elit elit porta lorem, in convallis tortor erat in leo. Aliquam ac consectetur urna, eget pharetra neque. Morbi dictum faucibus eleifend. Cras a risus sagittis, accumsan justo et, faucibus tellus. Cras ullamcorper mauris in lorem vulputate tempor. Nullam cursus, nunc a scelerisque mattis, tortor magna efficitur nunc, ac consectetur mi risus a massa. Vestibulum turpis ipsum, maximus eget viverra sed, facilisis at eros. In dignissim rutrum lobortis. Duis lectus tellus, porttitor ac pharetra varius, sollicitudin vitae ante. Mauris faucibus consectetur nibh, vel euismod felis sodales vitae.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nibh dui, at maximus odio rhoncus at. Mauris at velit eu turpis sollicitudin congue a ac quam. Mauris facilisis pulvinar lectus, maximus placerat leo elementum ut. Etiam a diam volutpat turpis luctus vulputate ut eu felis. Vestibulum dictum, purus eu auctor pretium, elit elit porta lorem, in convallis tortor erat in leo. Aliquam ac consectetur urna, eget pharetra neque. Morbi dictum faucibus eleifend. Cras a risus sagittis, accumsan justo et, faucibus tellus. Cras ullamcorper mauris in lorem vulputate tempor. Nullam cursus, nunc a scelerisque mattis, tortor magna efficitur nunc, ac consectetur mi risus a massa. Vestibulum turpis ipsum, maximus eget viverra sed, facilisis at eros. In dignissim rutrum lobortis. Duis lectus tellus, porttitor ac pharetra varius, sollicitudin vitae ante. Mauris faucibus consectetur nibh, vel euismod felis sodales vitae.</p>
                                        <Button className="faq-blue-btn">Edit</Button>
                                    </Col>
                                </Row>
                            </div>
                            </ModalBody>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MyNotes;