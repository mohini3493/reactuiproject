import React, { useEffect} from 'react';
import { Container } from 'react-bootstrap';
import cc from "../assets/images/course-completion.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faShareAlt, faHome } from "@fortawesome/free-solid-svg-icons";
const FaqGeneral = React.lazy(() => import('../components/faq/faq-general'));
const WebsiteLayout = React.lazy(() => import('../components/website-layout'));

const CourseCompletion = () => {
  useEffect(() => {
    document.title = "Course Completion - Wise Talkies";
  }, []);

  return (
    <div>
        <Container>
          <div className='course-completion-container'>
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
            <div className='course-completion-wrapper'>
              <div className='course-completion'>
                <img src={cc} alt="Course-image" />
                <div className='course-completion-info'>
                  <h3>Certificate of completion of cooking course</h3>
                  <p>Anim laboris amet pariatur aute non amet. Deserunt non incididunt et ea enim nostrud sint aute</p>
                  <p>Anim laboris amet pariatur aute non amet. Deserunt non incididunt et ea enim nostrud sint aute</p>
                  <a href='#'> <FontAwesomeIcon icon={faDownload} />Download Certificate</a>
                  <div className='course-completion-btns'>
                    <button onClick={event =>  window.location.href='/#'}><FontAwesomeIcon icon={faShareAlt} />Share</button>
                    <button onClick={event =>  window.location.href='/#'}>Add to profile</button>
                  </div>
                </div>
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

export default CourseCompletion