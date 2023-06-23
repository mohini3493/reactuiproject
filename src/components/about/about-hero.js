import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

const AboutHero = () => {
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
          slidesToShow: 2.05,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.05,
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
      image: require("../../assets/images/h4.png")
    },
    {
      id: 2,
      image: require("../../assets/images/h3.png")
    },
    {
      id: 3,
      image: require("../../assets/images/h1.png")
    },
  ]
  const aboutImgs = data.map(a => {
    return (
      <div key={a.id}>
        <img src={a.image} alt="Trending post" />
      </div>
    )
  })
  return (
    <section className="hero-box">
      <Container fluid>
        <Row>
          <Col lg={5} md={5}>
            <h3>World-class online education</h3>
            <p>A best and cheapest way of getting know learning to make a better tomorrow </p>
            <Button onClick={event =>  navigate('/contact-us')} className="hero-btn">Get In Touch</Button>
          </Col>
          <Col lg={7} md={7}>
            <Slider {...settings}>
              {aboutImgs}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default AboutHero;