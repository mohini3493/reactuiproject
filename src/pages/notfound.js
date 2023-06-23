import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const WebsiteLayout = React.lazy(()=> import('../components/website-layout'));

const NotFound = () => {
    return(
        <WebsiteLayout>
            <section className="found-box text-center">
                <Container>
                    <Row>
                        <Col lg={12} md={12}>
                            <h1 className="found-title">Ooops... Page not found</h1>
                            <img src={require("../assets/images/Group47.png")} alt="Spaceman with 404" />
                            <p className="found-txt">Sorry, we were unable to find that page</p>
                            <Button className="found-search-btn">Search <FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                            <Button className="go-back-btn">Go Back <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </WebsiteLayout>
    )
}

export default NotFound;