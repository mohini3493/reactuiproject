import React, { useEffect} from 'react';
import { Col, Container, Row, Tab, Nav, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import TrailerImg from '../assets/images/trailer.png'
import { faPlay, faAngleLeft, faAngleRight, faFileImage, faNoteSticky, faFileAudio } from "@fortawesome/free-solid-svg-icons";
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl } from 'react-bootstrap';
import { faTextWidth } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
const Module = React.lazy(() => import('../components/module'));
const FaqGeneral = React.lazy(() => import('../components/faq/faq-general'));
const WebsiteLayout = React.lazy(() => import('../components/website-layout'));


const Notes = () => {
  useEffect(() => {
    document.title = "Notes - Wise Talkies";
  }, []);

  return (
    <div className='tab-notes'>
      <div className='course-note-form'>
        <p><FontAwesomeIcon icon={faNoteSticky} />New note</p>
        <Form.Group>
          <Form.Control as="textarea" placeholder="Leave a note here.." rows={3} />
        </Form.Group>
        <div className='communities-icons-info'>
          <div className='communities-icon'>
            <div><FontAwesomeIcon icon={faTextWidth} /></div>
            <div><FontAwesomeIcon icon={faLink} /></div>
            <div><FontAwesomeIcon icon={faExternalLink} /></div>
          </div>
          <div className='communities-icon-text'>
            <a href='#'>Cancel</a>
            <a href='#'>Save</a>
          </div>
        </div>
      </div>
      <div className='course-about-instructor'>
        <h3>About Instructor</h3>
        <div className='course-about-instructor-info'>
          <img src={TrailerImg} alt="About Image" />
          <div>
            <h3>Suresh Pillai</h3>
            <p>Cooking Department</p>
          </div>
        </div>
        <p>
          Chef Suresh Pillai grew up on the banks of the Astamudi lake. The local cuisine of the area with fresh catch from the lake and the Arabian Sea on the Kollam shoreline is familiar fare for him. His early work was with a restaurant in Kollam before heading for Bengaluru.
        </p>
        <a href='instructor'>LEARN MORE</a>
      </div>
    </div>
  )
}

const Resources = () => {
  return (
    <div className='resources'>
      <div className='resources-documents'>
        <h4>Related documents</h4>
        <p><FontAwesomeIcon icon={faFileImage} />Cake icing without powdered sugar</p>
        <p><FontAwesomeIcon icon={faFileImage} />Edible photo cakes</p>
        <p><FontAwesomeIcon icon={faFileImage} />Ingredients</p>
      </div>
      <div className='resources-links'>
        <h4>Related links</h4>
        <div>
          <li><a href='#'></a>https://bakewithshivesh.com/eggless-rasmalai-cake/</li>
          <li><a href='#'></a>https://recipes.timesofindia.com/recipes/homemade-cake/rs54404412.cms</li>
          <li><a href='#'></a>https://www.craftybaking.com/learn/baked-goods/cakes/ingredients</li>
          <li><a href='#'></a>https://sallysbakingaddiction.com/how-to-measure-baking-ingredients/</li>
        </div>
      </div>
    </div>
  )
}

const QandA = () => {
  return (
    <div className='course-tab-qanda'>
      <InputGroup>
        <FormControl
          placeholder="Ask a question"
          aria-label="Ask a question"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text>Post</InputGroup.Text>
      </InputGroup>
    </div>
  )
}

const CourseDetail = () => {
  return (
    <div>
        <Container>
          <div className='course-detail-container'>
            <div className='page-breadcrumbs'>
              <a href='#'><FontAwesomeIcon icon={faHome} /></a>
              <div className='breadcrumbs-links'>
                <a href='#'>Course</a>
                <div>/</div>
                <a href='#'>Food</a>
                <div>/</div>
                <a href='#'> KeralaFood</a>
              </div>
            </div>
            <div className='course-detail-wrapper'>
              <div>
                <div className='course-detail-head'>
                  <div>
                    <h3>Fundamentals of cooking</h3>
                    <p>Suresh Pillai, Master Chef Uk<span>(origin from kerala)</span></p>
                  </div>
                  <div className='detail-head-btns'>
                    <span>Chapter 1/5</span>
                    <button onClick={event =>  window.location.href='/#'} className='head-btn1'><FontAwesomeIcon icon={faAngleLeft} /></button>
                    <button onClick={event =>  window.location.href='/#'} className='head-btn2'><FontAwesomeIcon icon={faAngleRight} /></button>
                  </div>
                </div>
                <div className='course-detail-head-img'>
                  <img src={TrailerImg} alt="Course Image" />
                  <FontAwesomeIcon icon={faPlay} className='course-play-btn1' />
                  <FontAwesomeIcon icon={faFileAudio} className='course-play-btn2' />
                </div>
                <div className='course-tabs'>
                  <Tab.Container id="left-tabs-example" defaultActiveKey="Notes">
                    <Row>
                      <Col>
                        <Nav variant="pills">
                          <Nav.Item>
                            <Nav.Link eventKey="Notes">Notes</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="Resources">Resources</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="Q & A">Q & A</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Col>
                          <Tab.Content>
                            <Tab.Pane eventKey="Notes">
                              <Notes />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Resources">
                              <Resources />
                            </Tab.Pane>
                            <Tab.Pane eventKey="Q & A">
                              <QandA />
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Col>
                    </Row>
                  </Tab.Container>
                </div>
              </div>
              <div>
                <Module />
              </div>
            </div>
            <div className='course-hr'></div>
            <div className='faq-wrap'>
              <h2>Frequently asked questions</h2>
              <FaqGeneral />
            </div>
          </div>
        </Container>
    </div>
  )
}

export default CourseDetail