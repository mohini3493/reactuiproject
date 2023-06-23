import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const NonVideo = () => {
    return(
        <section className="non-video">
            <Container>
                <Row className="non-row">
                    <Col lg={3}>
                        <h3>Stream anytime, anywhere, at your own pace.</h3>
                        <ul className="non-list">
                            <li><FontAwesomeIcon icon={faCheck} /> Watch on desktop, TV, or mobile device</li>
                            <li><FontAwesomeIcon icon={faCheck} /> Offline Viewing</li>
                            <li><FontAwesomeIcon icon={faCheck} /> Downloadable instructor guides for every class</li>
                        </ul>
                    </Col>
                    <Col lg={9}>
                        <img src={require('../../assets/images/trailer-toyiq.png')} alt="Trailer" />
                        <Link to="/" className="non-link"><FontAwesomeIcon icon={faPlay} /> Watch Trailer</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NonVideo;