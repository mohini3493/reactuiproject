import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLeftLong, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faDownLong, faUpLong, faStar, faUserGroup, faAward } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookSquare, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import I1 from '../assets/images/articles-details.png';
import I2 from '../assets/images/suresh-pillai.png';
import IC1 from '../assets/images/ic1.png';
import IC2 from '../assets/images/ic2.png';
import IC3 from '../assets/images/ic3.png';
import IR1 from '../assets/images/ir1.png';
import IR2 from '../assets/images/ir2.png';
import IR3 from '../assets/images/ir3.png';
const WebsiteLayout = React.lazy(() => import('../components/website-layout'));

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className='instructor-read-more'>
      <p>{isReadMore ? text.slice(0, 600) : text}</p>
      <span onClick={toggleReadMore}>
        {isReadMore ? "SHOW MORE" : "SHOW LESS"}
        {isReadMore ? <FontAwesomeIcon icon={faDownLong} /> : <FontAwesomeIcon icon={faUpLong} />}
      </span>
    </div>
  );
};

const Instructor = () => {
  useEffect(() => {
    document.title = "Instructor - Wise Talkies";
  }, []);

  const data = [
    {
      id: 1,
      image: IR1,
      name: "Cheyenne Carder",
      day: "2 days ago",
      description: "Really enjoyed the course, being a total beginner it really set a good foundation.The instructor knows what he's talking about. And he knows how to teach the stuff. Awesome!"
    },
    {
      id: 2,
      image: IR2,
      name: "Kadin Bergson",
      day: "6 days ago",
      description: "Really enjoyed the course, being a total beginner it really set a good foundation.The instructor knows what he's talking about. And he knows how to teach the stuff. Awesome!"
    },
    {
      id: 3,
      image: IR3,
      name: "Allison Carder",
      day: "2 days ago",
      description: "Really enjoyed the course, being a total beginner it really set a good foundation.The instructor knows what he's talking about. And he knows how to teach the stuff. Awesome!"
    }
  ]

  const Reviews = data.map(r => {
    return (
      <div className='reviews-card' key={r.id}>
        <div className='reviews-info'>
          <img src={r.image} alt="Review img" />
          <div>
            <h3>{r.name}</h3>
            <div className='review-stars'><FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} className='review-stars-white' />
              <span>{r.day}</span></div>
            <p>{r.description}</p>
          </div>
        </div>
      </div>
    )
  })

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
            <div className='instructor-wrapper'>
              <div className='instructor-wrapper-infos'>
                <div className='instructor-info-titles'>
                  <h3>Hello, I am</h3>
                  <h1>Suresh Pillai</h1>
                </div>
                <div className='instructor-info-link'>
                  <FontAwesomeIcon icon={faLeftLong} />
                  <a href='course-detail'> Go Back</a>
                </div>
              </div>
              <div className='instructor-info-images'>
                <div><img src={I2} alt="Course Img" /> </div>
                <div className='instructor-trailer-image'>
                  <img src={I1} alt="Course Trailer Img" />
                  <p><FontAwesomeIcon icon={faPlay} />Watch Trailer</p>
                </div>
              </div>
              <div className='instructor-icons-info'>
                <div><FontAwesomeIcon icon={faStar} />4.6 Instructor rating</div>
                <div><FontAwesomeIcon icon={faAward} />4k Reviews</div>
                <div><FontAwesomeIcon icon={faUserGroup} />2k Students</div>
              </div>
              <ReadMore>
                He was renowned for being a participant in the BBC MASTERCHEF Series before he headed back to India. He was also the Culinary Director of the RAVIZ Group of hotels in Kerala since then. A social media icon for his culinary expertise in Kerala cuisine, he has over 1.5 million followers and growing.
                Hailing from Kollam in Kerala, Chef Suresh Pillai grew up on the banks of the Astamudi lake. The local cuisine of the area with fresh catch from the lake and the Arabian Sea on the Kollam shoreline is familiar fare for him. His early work was with a restaurant in Kollam before heading for Bengaluru. Bengaluru is where he honed his culinary skills with a stint at The Leela. He then moved on to London and worked with the renowned MICHELIN Starred VEERASWAMY, GYMKHANA & HOPPERS restaurants. He is also a visiting Chef at the University of Bahamas.
                He was renowned for being a participant in the BBC MASTERCHEF Series before he headed back to India. He was also the Culinary Director of the RAVIZ Group of hotels in Kerala since then. A social media icon for his culinary expertise in Kerala cuisine, he has over 1.5 million followers and growing.
              </ReadMore>
              <div className='instructor-cousre'>
                <h3>Courses by  Suresh Pillai</h3>
                <div className='instructor-cousre-images'>
                  <div>
                    <img src={IC1} alt="Course Img" />
                    <p>Traditional Food</p>
                  </div>
                  <div>
                    <img src={IC2} alt="Course Img" />
                    <p>Appam</p>
                  </div>
                  <div>
                    <img src={IC3} alt="Course Img" />
                    <p>Banana Fritters</p>
                  </div>
                </div>
              </div>
              <div className="articles-share">
                <h2>Connect</h2>
                <ul className="articles-share-links">
                  <li><a href="#"><FontAwesomeIcon icon={faFacebookSquare} className="icon-color facebook-color" /> </a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="icon-color linkedin-color" /> </a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faTwitter} className="icon-color twitter-color" /> </a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faYoutube} className="icon-color youtube-color" /> </a></li>
                </ul>
              </div>
              <div className='reviews'>
                <h3>Reviews</h3>
                {Reviews}
              </div>
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Instructor