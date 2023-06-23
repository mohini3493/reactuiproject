import React, { useEffect} from 'react';
import { Container, Form } from 'react-bootstrap';
import T5 from '../assets/images/t5.png';
import T1 from '../assets/images/discussion.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faPlay, faLeftLong, faCommentDots, faEye, faReply } from "@fortawesome/free-solid-svg-icons";
const TopContributors = React.lazy(()=> import('../components/top-contributors'));
const WebsiteLayout = React.lazy(()=> import('../components/website-layout'));


const DiscussionPage = () => {
  useEffect(() => {
    document.title = "Discussion Details - Wise Talkies";
  }, []);

  const cards = [
    {
      id: 1,
      title: "Ritika Sharma",
      description: "Cool Stuff tutor! I’m wondering where I can find the list of recommended resources...",
      image: T1
    },
    {
      id: 2,
      title: "Ritika Sharma",
      description: "Cool Stuff tutor! I’m wondering where I can find the list of recommended resources...",
      image: T1
    },
    {
      id: 3,
      title: "Ritika Sharma",
      description: "Cool Stuff tutor! I’m wondering where I can find the list of recommended resources...",
      image: T1
    },
    {
      id: 4,
      title: "Ritika Sharma",
      description: "Cool Stuff tutor! I’m wondering where I can find the list of recommended resources...",
      image: T1
    },
    {
      id: 5,
      title: "Ritika Sharma",
      description: "Cool Stuff tutor! I’m wondering where I can find the list of recommended resources...",
      image: T1
    },
    {
      id: 6,
      title: "Ritika Sharma",
      description: "Cool Stuff tutor! I’m wondering where I can find the list of recommended resources...",
      image: T1
    },
  ]

  const repiles = cards.map(r => {
    return (
      <div className='repiles-card'>
        <div className="discussion-details-card-info">
          <img src={r.image} alt="discussion-repiles-card" />
          <h5>Ritika Sharma</h5>
        </div>
        <p>{r.description}</p>
        <div className='replile-links'>
          <span>Liked</span>
          <span>Reply</span>
          <span>3h 16likes <FontAwesomeIcon icon={faThumbsUp} /></span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <Container>
        <div className='discussion-details-head'>
          <a href='#' className='articles-details-backBtn'><FontAwesomeIcon icon={faLeftLong} />Go Back</a>
          <p>Kerela food</p>
          <h2>Fundamental of cooking</h2>
        </div>
        <div className='discussion-wrapper'>
          <div className='discussion-details'>
            <div className="discussion-details-sections">
              <section className="discussion-card">
                <div className="discussion-card-tag">
                  <span>Food</span>
                  <span>Kerela Food</span>
                </div>
                <div className="discussion-card-info">
                  <img src={T1} alt="discussion-card" />
                  <h5>Ritika Sharma</h5>
                  <span>Question</span>
                </div>
                <div className="discussion-card-info2">
                  <p>Which is the Most important ingrediant for cooking Kerela tradional food?</p>
                  <div>
                    <a href='#'> <FontAwesomeIcon icon={faReply} />Reply</a>
                    <a href='#'> &bull; shows 8 repiles</a>
                  </div>
                </div>
              </section>
              <section className='discussion-details-section'>
                <div className="discussion-details-card">
                  <div className="discussion-details-card-info">
                    <img src={T5} alt="discussion-card" />
                    <div>
                      <h5>Ritika Sharma</h5>
                      <p>Steps in cooking &bull; <span> 2:34</span></p>
                    </div>
                  </div>
                  <div className='discussion-details-card-icons'>
                    <span><FontAwesomeIcon icon={faEye} /><p>60</p></span>
                    <span><FontAwesomeIcon icon={faCommentDots} /><p>8</p></span>
                  </div>
                </div>
                <div>
                  <div className='discussion-details-play'>
                    <span><FontAwesomeIcon icon={faPlay} /></span>
                    <div></div>
                    <p>2:34</p>
                  </div>
                  <div className="discussion-card-info2">
                    <a href='#'> <FontAwesomeIcon icon={faReply} />Reply</a>
                    <a href='#'> &bull; Hide Repiles</a>
                  </div>
                </div>
              </section>
              <section className='discussion-details-section'>
                <div className='repiles-info'>
                  {repiles}
                </div>
                <div className='repiles-comment'>
                  <Form.Control
                    as="textarea"
                    placeholder="Add Comment"
                    className='quizTextarea'
                  />
                  <button><span>Buy a Gift card</span></button>
                </div>
              </section>
            </div>
          </div>
          <div>
            <TopContributors />
          </div>
        </div>
      </Container>
    </div>
  )
}
export default DiscussionPage