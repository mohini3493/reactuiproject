import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const Module = React.lazy(() => import('../components/module'));
const FaqGeneral = React.lazy(() => import('../components/faq/faq-general'));
const WebsiteLayout = React.lazy(() => import('../components/website-layout'));

const TopicQuiz = () => {
  return (
    <div>
        <Container>
          <div className='topic-quiz-container'>
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
            <div className='quiz-topic-wrapper'>
              <div className='quiz-topic-info'>
                <h3>Topic  1: Fundamentals of cooking</h3>
                <p>Lorem ipsum dolor sit amet, consectet adipiscing elit. Aliquet proin eu amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet proin eu amet.</p>
                <button onClick={event =>  window.location.href='/quiz1'}>Start Assessment</button>
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

export default TopicQuiz