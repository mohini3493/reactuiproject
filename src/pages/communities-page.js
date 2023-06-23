import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Tabs, Tab, Form } from 'react-bootstrap';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTextWidth, faLink, faExternalLink } from "@fortawesome/free-solid-svg-icons";
const TopContributors = React.lazy(() => import('../components/top-contributors'));
const WebsiteLayout = React.lazy(() => import('../components/website-layout'));

var settings = {
  dots: false,
  lazyLoad: 'progressive',
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
}

function ControlledTabs() {
  const [key, setKey] = useState('post');

  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="post" title="Post">
        <Form.Group className='communities-discussion-form'>
          <Form.Control as="textarea" placeholder=" Share your Insights" rows={3} />
        </Form.Group>
      </Tab>
      <Tab eventKey="question" title="Question">
        <Form.Group className='communities-discussion-form'>
          <Form.Control as="textarea" placeholder=" Share your Insights" rows={3} />
        </Form.Group>
      </Tab>
      <Tab eventKey="articles" title="Articles">
        <Form.Group className='communities-discussion-form'>
          <Form.Control as="textarea" placeholder=" Share your Insights" rows={3} />
        </Form.Group>
      </Tab>
    </Tabs>
  );
}

// Mycommunities
const data = [
  {
    id: 1,
    image: require("../assets/images/c1.png"),
    title: "Dominique crenn",
    description: "Teaches Modern Shoe Production"
  },
  {
    id: 2,
    image: require("../assets/images/c2.png"),
    title: "Dominique crenn",
    description: "Teaches Modern Shoe Production"
  },
  {
    id: 3,
    image: require("../assets/images/c3.png"),
    title: "Dominique crenn",
    description: "Teaches Modern Shoe Production"
  },
  {
    id: 4,
    image: require("../assets/images/c4.png"),
    title: "Dominique crenn",
    description: "Teaches Modern Shoe Production"
  },
]
const mycommunities = data.map(c => {
  return (
    <div className="community-content" key={c.id}>
      <a href='discussion'>
        <img src={c.image} alt="Trending post" />
        <div className="community-trending-sub">
          <h4>{c.title}</h4>
          <div className="trending-hr"></div>
          <p>{c.description}</p>
        </div>
      </a>
    </div>
  )
})

const Mycommunities = () => {
  return (
    <div className="trending-box">
      <Slider {...settings}>
        {mycommunities}
      </Slider>
    </div>
  )
}

// Foodcommunity
const data2 = [
  {
    id: 1,
    image: require("../assets/images/c4.png"),
    title: "SureshRajPillai",
    description: "Teaches Modern Shoe Production"
  },
  {
    id: 2,
    image: require("../assets/images/c5.png"),
    title: "SureshRajPillai",
    description: "Teaches Modern Shoe Production"
  },
  {
    id: 3,
    image: require("../assets/images/c6.png"),
    title: "SureshRajPillai",
    description: "Teaches Modern Shoe Production"
  },
  {
    id: 4,
    image: require("../assets/images/c2.png"),
    title: "SureshRajPillai",
    description: "Teaches Modern Shoe Production"
  },
]
const foodcommunity = data2.map(c => {
  return (
    <div className="community-content" key={c.id}>
      <a href='discussion'>
        <img src={c.image} alt="Trending post" />
        <div className="community-trending-sub">
          <h4>{c.title}</h4>
          <div className="trending-hr"></div>
          <p>{c.description}</p>
        </div>
      </a>
    </div>
  )
})
const Foodcommunity = () => {
  return (
    <div className="trending-box">
      <Slider {...settings}>
        {foodcommunity}
      </Slider>
    </div>
  )
}


const Communities = () => {
  useEffect(() => {
    document.title = "Communities - Wise Talkies";
  }, []);

  return (
    <div>
      <Container>
        <Row className='communities-head'>
          <h2>Community Forum</h2>
          <p>Consulting members of the community.</p>
        </Row>
        <Row>
          <Col md={12} lg={12} xl={8}>
            <Row className='communities-slider'>
              <h2>My Communities</h2>
              <Mycommunities />
            </Row>
            <Row className='communities-slider'>
              <h2>A food Community</h2>
              <Foodcommunity />
            </Row>
          </Col>
          <Col md={12} lg={12} xl={4}>
            <TopContributors />
          </Col>
        </Row>
        <Row>
          <div className='communities-form'>
            <h2>Start a New Discussion </h2>
            <div className='communities-form-detail'>
              <ControlledTabs />
              <div className='communities-icons-info'>
                <div className='communities-icon'>
                  <div><FontAwesomeIcon icon={faTextWidth} /></div>
                  <div><FontAwesomeIcon icon={faLink} /></div>
                  <div><FontAwesomeIcon icon={faExternalLink} /></div>
                </div>
                <div className='communities-icon-text'>
                  <a href='#'>Cancel</a>
                  <a href='#'>Post</a>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}
export default Communities