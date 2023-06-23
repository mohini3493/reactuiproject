import React, { useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFileImage, faDownload } from "@fortawesome/free-solid-svg-icons";
const Module = React.lazy(() => import('../components/module'));
const FaqGeneral = React.lazy(() => import('../components/faq/faq-general'));
const WebsiteLayout = React.lazy(() => import('../components/website-layout'));

const CourseDetails = () => {
  useEffect(() => {
    document.title = "Course Details - Wise Talkies";
  }, []);

  return (
    <div>
        <Container>
          <div className='course-details-container'>
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
            <div className='course-details-wrapper'>
              <div className='course-details-info'>
                <h3>Completion : Happy Cooking!!</h3>
                <p>Lorem ipsum dolor sit amet, consectet adipiscing elit. Aliquet proin eu amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span><FontAwesomeIcon icon={faFileImage} />Certificate</span>
                <div className='course-details-links'>
                  <p>Certificate of completion</p>
                  <a href='course-completion'> <FontAwesomeIcon icon={faDownload} />Download Certificate</a>
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

export default CourseDetails