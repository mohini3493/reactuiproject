import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import FooterLogo from '../assets/images/footer-logo.png';
import AppleBadge from '../assets/images/App_Store_Badge.png';
import GoogleBadge from '../assets/images/google_play_badge.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>
            <footer>
            <div className="footer">
                <Container>
                    <Row>
                        <Col lg={4} md={4}>
                            <Link to="/" className="footer-logo">
                                <img src={FooterLogo} alt="Footer Logo" />
                            </Link>
                            <p>Thrikkakara <br />
                            Kochi, Kerala 6915008, IN</p>
                        </Col>
                        <Col lg={2} md={2} sm={6}>
                            <h6><Link to="/about">About</Link></h6>
                            <ul className="footer-link">
                                <li><Link to="/">Careers</Link></li>
                                <li><Link to="/">Newsroom</Link></li>
                                <li><Link to="/">Social Impact</Link></li>
                            </ul>
                        </Col>
                        <Col lg={2} md={2} sm={6}>
                            <h6><Link to="/category">Explore</Link></h6>
                            <ul className="footer-link">
                                <li><Link to="/communities">Community</Link></li>
                                <li><Link to="/articles">Articles</Link></li>
                                <li><Link to="/faq">Faq</Link></li>
                            </ul>
                        </Col>
                        <Col lg={2} md={2}>
                            <h6>Download</h6>
                            <Link to="/" className="apple-badge">
                                <img src={AppleBadge} alt="Apple Badge" />
                            </Link>
                            <Link to="/" className="google-play-badge">
                                <img src={GoogleBadge} alt="Google Play Badge" />
                            </Link>
                        </Col>
                        <Col lg={2} md={2}>
                            <h6>Social</h6>
                            <ul className="footer-link">
                                <li><Link to="/"><FontAwesomeIcon icon={faTwitter} className="icon-color twitter-color" /> Twitter</Link></li>
                                <li><Link to="/"><FontAwesomeIcon icon={faYoutube} className="icon-color youtube-color" /> Youtube</Link></li>
                                <li><Link to="/"><FontAwesomeIcon icon={faLinkedin} className="icon-color linkedin-color" /> LinkedIn</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bottom-footer">
                <Container>
                    <Row>
                        <Col lg={6} md={6}>
                            <p>Not Copyright 2020 • Wise Talkies.</p>
                        </Col>
                        <Col lg={6} md={6}>
                            <p className="right-txt">Privacy Policy  | Terms and conditions</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            </footer>
        </Fragment>
    )
};

export default Footer;
