import React, { useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookSquare, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ArticlesImg from '../assets/images/articles-details.png';
const LatestArticles = React.lazy(()=> import('../components/latest-articles'));
const WebsiteLayout = React.lazy(()=> import('../components/website-layout'));

const categories = [
  {
    url: "#",
    title: "Food"
  },
  {
    url: "#",
    title: "KerelaFood"
  },
  {
    url: "#",
    title: "Food Stylist"
  },
  {
    url: "#",
    title: "Sweets"
  },
]

const categoriesList = categories.map((category, index) =>
  <li key={index}>
    <a href={category.url}>{category.title}</a>
  </li>
);

const ArticelsDetailsPage = () => {
  useEffect(() => {
    document.title = "Articels Details - Wise Talkies";
  }, []);

  return (
    <div>
      <Container>
        <div className='articles-details-head'>
          <a href='#' className='articles-details-backBtn'><FontAwesomeIcon icon={faLeftLong} />Go Back</a>
          <div className='articles-details-info'>
            <h2>Before you feast on sadya, know the 'Science' behind amazing Onam recipes</h2>
            {categoriesList}
          </div>
        </div>
        <div>
          <div className="articles-details-image">
            <img src={ArticlesImg} alt="Image" />
            <a href='#'><FontAwesomeIcon icon={faPlay} /></a>
          </div>
          <div>
            <p>Onam is an annual Hindu festival celebrated by the people of Kerala to welcome the mythical King Mahabali. Onasadya is the hallmark of the Onam festival. It is the traditional feast prepared with the vegetables and crops harvested during this season. It is usually served for lunch and comprises a whopping 26 items that are eaten off a plantain leaf.</p>
            <p>Most of the dishes served in the sadya are prepared based on the science that nutrition is the key to good health.
              The sadya is a balanced and nutritious meal, which ensures proper digestion and optimum absorption of nutrients by the body. There is a logic to all aspects of the sadya —the ingredients chosen to prepare the dishes, the way the plantain leaf is laid and the order in which the dishes are served.</p>
            <p>The plantain leaf is placed with the narrow end to the left and the broad end to the right because most Indians eat with the right hand, and serving rice and curries on the right side of the leaf makes it easier to eat them. The condiments and chutneys are served on the left of the leaf. The meal starts with a sweet (sharkara upperi), which is made of deep-fried plantain coated with jaggery and dry ginger. This combination activates the salivary glands which set the digestive system in readiness for the meal.</p>
            <p>The plantain leaf is placed with the narrow end to the left and the broad end to the right because most Indians eat with the right hand, and serving rice and curries on the right side of the leaf makes it easier to eat them. The condiments and chutneys are served on the left of the leaf. The meal starts with a sweet (sharkara upperi), which is made of deep-fried plantain coated with jaggery and dry ginger. This combination activates the salivary glands which set the digestive system in readiness for the meal.</p>
          </div>
          <div className="articles-share">
            <h2>Get more information</h2>
            <ul className="articles-share-links">
              <li><a href="#"><FontAwesomeIcon icon={faFacebookSquare} className="icon-color facebook-color" /> </a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="icon-color linkedin-color" /> </a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} className="icon-color twitter-color" /> </a></li>
              <li><a href="#"><FontAwesomeIcon icon={faYoutube} className="icon-color youtube-color" /> </a></li>
            </ul>
          </div>
        </div>
        <LatestArticles />
      </Container>
    </div>
  )
}
export default ArticelsDetailsPage