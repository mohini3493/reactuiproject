import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

const WeAre = () =>{
    const [isOpen, setOpen] = useState(false)
    return(
        <section className="weare-box">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="logo-with-txt">
                            <h3>We are</h3>
                            <img src={require("../../assets/images/Group1000001765.png")} alt="Wise Talkies logo" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6}>
                        <p>There's an undeniable satisfaction that comes from building something out of wood using your own hands—a satisfaction that's magnified ten-fold when that project is something as necessary for daily life as a piece of furniture.</p>

                        <p>There are a host of other benefits to making your own furniture, including:
                        saving money while also delivering a higher quality product.</p>
                        
                        <p>It puts you in creative control of your piece, from design to finish.
                        You can tailor a particular piece to fit unusual space constraints.</p>

                        <p>There are a host of other benefits to making your own furniture, including:
                        saving money while also delivering a higher quality product.
                        </p>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="video-box">
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                            <img src={require("../../assets/images/Group1000001887.png")} onClick={()=> setOpen(true)} alt="Video Image" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WeAre;