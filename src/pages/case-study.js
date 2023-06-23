import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import FaqGeneral from '../components/faq/faq-general';
import cs from "../assets/images/case-study.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCloudUploadAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faDownLong, faUpLong } from "@fortawesome/free-solid-svg-icons";
const WebsiteLayout = React.lazy(() => import('../components/website-layout'));


const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className='read-more-text'>
      {isReadMore ? text.slice(0, 600) : text}
      <span onClick={toggleReadMore}>
        {isReadMore ? "SHOW MORE" : "SHOW LESS"}
        {isReadMore ? <FontAwesomeIcon icon={faDownLong} /> : <FontAwesomeIcon icon={faUpLong} />}
      </span>
    </p>
  );
};

const CaseStudy = () => {
  useEffect(() => {
    document.title = "Case Study - Wise Talkies";
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
            <div className='case-study-wrapper'>
              <div className='case-study-wrapper-info'>
                <h3>Case study:Explore cooking</h3>
                <p>Suresh Pillai, Master Chef Uk<span>(origin from kerala)</span></p>
              </div>
              <div className='case-study'>
                <img src={cs} alt="Casestudy" />
                <div className='case-study-info'>
                  <h3>Instructions</h3>
                  <p><FontAwesomeIcon icon={faCheck} />Prepare baking pans , preheat the oven.</p>
                  <p><FontAwesomeIcon icon={faCheck} />Combine butter and sugar, add eggs at a time alternate adding dry and wet ingredients.</p>
                  <p><FontAwesomeIcon icon={faCheck} />Pour batter into pans and bake, check the cake and cool the cake.</p>
                  <p><FontAwesomeIcon icon={faCheck} />Add the first coat of frosting, frost and decorate.</p>
                </div>
              </div>
            </div>
            <div className='case-study-descp'>
              <h3>Case Study Description</h3>
              <ReadMore>
                Hailing from Kollam in Kerala, Chef Suresh Pillai grew up on the banks of the Astamudi lake. The local cuisine of the area with fresh catch from the lake and the Arabian Sea on the Kollam shoreline is familiar fare for him. His early work was with a restaurant in Kollam before heading for Bengaluru. Bengaluru is where he honed his culinary skills with a stint at The Leela. He then moved on to London and worked with the renowned MICHELIN Starred VEERASWAMY, GYMKHANA & HOPPERS restaurants. He is also a visiting Chef at the University of Bahamas.
                He was renowned for being a participant in the BBC MASTERCHEF Series before he headed back to India. He was also the Culinary Director of the RAVIZ Group of hotels in Kerala since then. A social media icon for his culinary expertise in Kerala cuisine, he has over 1.5 million followers and growing.
              </ReadMore>
            </div>
            <div className='case-study-attach'>
              <h3>Upload attachments</h3>
              <Form.Group controlId="formFile" className='setting-attach'>
                <Form.Control type="file" className='fileQuiz' />
                <FontAwesomeIcon icon={faCloudUploadAlt} />
                <span>Click to upload</span> or drag and drop SVG,PNG,JPG or GIF (max 800x400px)
              </Form.Group>
            </div>
            {/* <div className='setting-attach'>
                <FontAwesomeIcon icon={faCloudUploadAlt} />
                <span>Click to upload</span> or drag and drop SVG,PNG,JPG or GIF (max 800x400px)
              </div> */}
            <button onClick={event => window.location.href = 'course-details'} className='case-study-btn'>Submit</button>
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

export default CaseStudy