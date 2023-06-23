import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

const HeroSection = (props) => {
  const navigate = useNavigate();
  var settings = {
    lazyLoad: 'progressive',
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2.05,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };
  const data = [
    {
      id: 1,
      image: require("../../assets/images/h1.png")
    },
    {
      id: 2,
      image: require("../../assets/images/h2.png")
    },
    {
      id: 3,
      image: require("../../assets/images/h3.png")
    },
    {
      id: 4,
      image: require("../../assets/images/h1.png")
    },
  ]
  const heroImgs = data.map(h => {
    return (
      <div key={h.id}>
        <img src={h.image} alt="Trending post" />
      </div>
    )
  })
  return (
    <section className="hero-box">
      <Container fluid>
        <Row>
          <Col lg={5} md={5}>
            <h3>Practical Learning from the best.</h3>
            <p>Learn from the most inspiring artists, leaders, and icons in the world.</p>
            <Button className="hero-btn" onClick={event =>  navigate('/category')}>Explore</Button>
          </Col>
          <Col lg={7} md={7}>
            <Slider {...settings}>
              {heroImgs}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default HeroSection;
