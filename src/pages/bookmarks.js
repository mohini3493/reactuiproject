import React, { useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import T1 from '../assets/images/t1.png';
import T2 from '../assets/images/t2.png';
import T3 from '../assets/images/t3.png';
import Video from '../assets/images/video-bookmark.png';


const BookmarksPage = () => {
  useEffect(() => {
    document.title = "Bookmarks - Wise Talkies";
  }, []);

  //cards
  const cards = [
    {
      id: 1,
      tag: "New",
      title: "Dominiquecrenn",
      description: "Teaches Modern Shoe Production",
      image: T1
    },
    {
      id: 2,
      tag: "New",
      title: "Dominiquecrenn",
      description: "Teaches Modern Shoe Production",
      image: T2
    },
    {
      id: 2,
      tag: "New",
      title: "Dominiquecrenn",
      description: "Teaches Modern Shoe Production",
      image: T3
    }
  ]

  const manageCards = cards.map(c => {
    return (
      <div className="bookmark-courses-card" key={c.id}>
        <img src={c.image} alt="courses" />
        <span>{c.tag}</span>
        <div className='bookmark-courses-info'>
          <h3>{c.title}</h3>
          <div className="trending-hr"></div>
          <p>{c.description}</p>
        </div>
      </div>
    )
  })

  //trailers
  const data = [
    {
      id: 1,
      image: Video,
      link: "#"
    },
    {
      id: 2,
      image: Video,
      link: "#"
    }
  ]

  const trailers = data.map(t => {
    return (
      <div className="bookmark-video-info" key={t.id}>
        <img src={t.image} alt="video" />
        <a href={t.link}><FontAwesomeIcon icon={faPlay} /> Watch Trailer</a>
      </div>
    )
  })
  return (
    <>
      <Container className='bookmarks'>
        <h2 className='bookmark-title'>My Bookmarks</h2>
        <div>
          <div className='cardsInfo'>
            <div>
              <h3>Course</h3>
              <p>The course you are intrested.</p>
            </div>
            <span>See all</span>
          </div>
          <div className='bookmark-courses'>{manageCards}</div>
        </div>
        <div className='bookmark-video-wrap'>
          <div className='cardsInfo'>
            <div>
              <h3>Videos</h3>
              <p>The Videos you are intrested.</p>
            </div>
            <span>See all</span>
          </div>
          <div className='bookmark-videos'>
            {trailers}
          </div>
        </div>
      </Container>
    </>
  )
}
export default BookmarksPage