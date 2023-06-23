import React, { useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import TrailerImg from '../assets/images/trailer.png';
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { NavDropdown, Dropdown } from 'react-bootstrap';
const WebsiteLayout = React.lazy(() => import('../components/website-layout'));

//categories
const categories = [
  {
    url: "#",
    title: "Arts & Entertainment"
  },
  {
    url: "#",
    title: "Home & Lifestyle"
  },
  {
    url: "#",
    title: "Food"
  },
  {
    url: "#",
    title: "Business"
  },
  {
    url: "#",
    title: "Music"
  },
  {
    url: "#",
    title: "Writing"
  },
  {
    url: "#",
    title: "Design & Style"
  },
  {
    url: "#",
    title: "Sports & Gaming"
  },
  {
    url: "#",
    title: "Community & Government"
  },
  {
    url: "#",
    title: "Wellness"
  },
  {
    url: "#",
    title: "Science & Tech"
  },
]

const categoriesList = categories.map((category, index) =>
  <li key={index}>
    <a href={category.url}>{category.title}</a>
  </li>
);

const categoriesList2 = categories.map((c) =>
  <NavDropdown.Item href={c.url}>{c.title}</NavDropdown.Item>
);

// trailers
const data = [
  {
    id: 1,
    image: TrailerImg,
    link: "#",
    title: "Suresh Pillai",
    description: "eaches Authentic kerela food"
  },
  {
    id: 2,
    image: TrailerImg,
    link: "#",
    title: "Suresh Pillai",
    description: "eaches Authentic kerela food"
  }
]

const trailers = data.map(t => {
  return (
    <div className="trailer" key={t.id}>
      <img src={t.image} alt="video" />
      <div className='trailer-info'>
        <div className='trailer-watch-btn'><a href={t.link}><FontAwesomeIcon icon={faPlay} /> Watch Trailer</a></div>
        <div className='trailer-details'>
          <h3>{t.title}</h3>
          <div className="trending-hr"></div>
          <p>{t.description}</p>
        </div>
      </div>
    </div>
  )
})

const BrowseTrailerPage = () => {
  useEffect(() => {
    document.title = "Browse Trailer - Wise Talkies";
  }, []);

  return (
    <div>
      <Container>
        <div>
          <div className='playlist-info'>
            <h2>Choose you Instructors</h2>
            <p>Browse the class trailers and add some instructors you want to learn from</p>
          </div>
          <div className='hide-xl'>
            <Dropdown>
              <Dropdown.Toggle className='mobile-category'>
                <FontAwesomeIcon icon={faSliders} /> Category
              </Dropdown.Toggle>
              <Dropdown.Menu className='mobile-category-links'>
                {categoriesList2}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='playlist'>
            <div>
              {trailers}
            </div>
            <div className='playlist-categories hide-sm hide-md hide-lg'>
              <h3>All Categories</h3>
              {categoriesList}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default BrowseTrailerPage