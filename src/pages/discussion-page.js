import React, { useEffect} from 'react';
import { Container } from 'react-bootstrap';
import T1 from '../assets/images/discussion.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faClockFour, faArrowTrendUp, faUpLong, faDownLong, faReply } from "@fortawesome/free-solid-svg-icons";
const TopContributors = React.lazy(()=> import('../components/top-contributors'));
const WebsiteLayout = React.lazy(()=> import('../components/website-layout'));


const DiscussionPage = () => {
  useEffect(() => {
    document.title = "Discussion Page - Wise Talkies";
  }, []); 

  const cards = [
    {
      id: 1,
      tag1: "Food",
      tag2: "Kerela Food",
      title: "Ritika Sharma",
      description: "Which is the Most important ingrediant for cooking Kerela tradional food?",
      image: T1
    },
    {
      id: 2,
      tag1: "Food",
      tag2: "Kerela Food",
      title: "Ritika Sharma",
      description: "Which is the Most important ingrediant for cooking Kerela tradional food?",
      image: T1
    },
    {
      id: 3,
      tag1: "Food",
      tag2: "Kerela Food",
      title: "Ritika Sharma",
      description: "Which is the Most important ingrediant for cooking Kerela tradional food?",
      image: T1
    },
    {
      id: 4,
      tag1: "Food",
      tag2: "Kerela Food",
      title: "Ritika Sharma",
      description: "Which is the Most important ingrediant for cooking Kerela tradional food?",
      image: T1
    },
    {
      id: 5,
      tag1: "Food",
      tag2: "Kerela Food",
      title: "Ritika Sharma",
      description: "Which is the Most important ingrediant for cooking Kerela tradional food?",
      image: T1
    },
  ]

  const discussionCard = cards.map(c => {
    return (
      <div className="discussion-card" key={c.id}>
        <div className="discussion-card-tag">
          <span>{c.tag1}</span>
          <span>{c.tag2}</span>
        </div>
        <div className="discussion-card-info">
          <img src={c.image} alt="discussion-card" />
          <h5>{c.title}</h5>
          <span>Question</span>
        </div>
        <div className="discussion-card-info2">
          <p>{c.description}</p>
          <div>
            <a href='discussion-details'> <FontAwesomeIcon icon={faReply} />Reply</a>
            <a href='discussion-details'> &bull; shows 8 repiles</a>
          </div>
        </div>
        <div className='info2-icons'>
          <a href='discussion-details'><FontAwesomeIcon icon={faUpLong} /></a>
          8
          <a href='discussion-details'><FontAwesomeIcon icon={faDownLong} /></a>
        </div>
      </div>
    )
  })

  return (
    <div>
      <Container className='discussion-container'>
        <h2 className='bookmark-title'>Discussion</h2>
        <div className='discussion-tags'>
          <a href='#' className='discuss-bg-btn'><FontAwesomeIcon icon={faClockFour} />New</a>
          <a href='#'><FontAwesomeIcon icon={faArrowTrendUp} />Trending</a>
          <a href='#'><FontAwesomeIcon icon={faTags} />Category</a>
        </div>
        <div className='discussion-wrapper'>
          <div className='discussion-cards'>{discussionCard}</div>
          <div>
            <div className='contributors-top-btn'>+ Start with Disscusion</div>
            <TopContributors />
          </div>
        </div>
      </Container>
    </div>
  )
}
export default DiscussionPage