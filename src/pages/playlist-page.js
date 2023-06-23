import React, { useEffect} from 'react';
import { Container } from 'react-bootstrap';
import Playlist1 from '../assets/images/playlist1.png';
import Playlist2 from '../assets/images/playlist2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { NavDropdown, Dropdown } from 'react-bootstrap';




const categories = [
  {
    url: "quiz1",
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

const PlaylistPage = () => {
  useEffect(() => {
    document.title = "Playlist - Wise Talkies";
  }, []);

  return (
    <div>
      <Container>
        <div>
          <div className='playlist-info'>
            <h2>Playlist</h2>
            <p>Playlists are a way to explore the entire catalog and learn from more instructors.</p>
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
              <div className="playlist-video-info">
                <img src={Playlist2} alt="video" />
                <a href='#'><FontAwesomeIcon icon={faPlay} /> Watch Trailer</a>
              </div>
              <div className="playlist-video-info">
                <img src={Playlist1} alt="video" />
                <a href='#'><FontAwesomeIcon icon={faPlay} /> Watch Trailer</a>
              </div>
            </div>
            <div className='playlist-categories hide-sm hide-md hide-lg'>
              <h3>All Categories</h3>
              {categoriesList}
            </div>
          </div>

        </div>
      </Container>
    </div >
  )
}
export default PlaylistPage