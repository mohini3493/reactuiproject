import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const Module = React.lazy(() => import('../components/module'));
const FaqGeneral = React.lazy(() => import('../components/faq/faq-general'));
const WebsiteLayout = React.lazy(() => import('../components/website-layout'));

const TopicQuizCompletion = () => {
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
                <span className='quiz-completion-span'>8 / 10 correct</span>
                <h3>You’ve successfully completed Module 1</h3>
                <p className='quiz-completion-para'>Your assessment will be evaluated in 2 weeks</p>
                <button onClick={event =>  window.location.href='#'}>Proceed</button>
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

export default TopicQuizCompletion