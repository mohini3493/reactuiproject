import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const NonHeroSection = () => {
	const data = [
		{
			id: 1,
			image: require("../../assets/images/non1.png"),
			title: "Suresh Pillai",
			tag1: "Teaches Authenctic Kerala food",
			button: "Start"
		},
		{
			id: 2,
			image: require("../../assets/images/non2.png"),
			title: "Robert downy",
			tag1: "Teaches Acting",
			tag2: "Coming Soon"
		},
		{
			id: 3,
			image: require("../../assets/images/non1.png"),
			title: "Chris Evans",
			tag1: "Teaches Dance",
			tag2: "Coming Soon"
		},
		{
			id: 4,
			image: require("../../assets/images/non2.png"),
			title: "Suresh Pillai",
			tag1: "Teaches food",
			tag2: "Coming Soon"
		},
	]

	const nonhero = data.map(n => {
		return (
			<div className="instructor-box" key={n.id}>
				<img src={n.image} alt="instructor" />
				<div className="hero-content">
					<div className="hero-name">{n.title}</div>
					<div className="hero-hr"></div>
					<div className="hero-skill">{n.tag1}</div>
					{n.tag2 && (<div className="hero-coming">{n.tag2}</div>)}
					{n.button && (<Button><FontAwesomeIcon icon={faPlay} /> Start</Button>)}
				</div>
			</div>
		)
	})
	var settings = {
		lazyLoad: 'progressive',
		infinite: true,
		arrows: true,
		speed: 500,
		autoplay: false,
		autoplaySpeed: 2000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<section className="non-hero-box">
			<Container fluid>
				<Row>
					<Col lg={4} md={4}>
						<h3>Unlimited access to 100+ instructors.</h3>
						<h4>New classes added every month</h4>
						<p className="hero-price">₹1725/month</p>
						<p className="hero-status">Billed annually</p>
						<Button className="non-hero-btn">Join now</Button>
					</Col>
					<Col lg={8} md={8}>
						<div className="welcome-hero">Welcome to the class</div>
						<Slider {...settings}>
							{nonhero}
						</Slider>
					</Col>
				</Row>
			</Container>
		</section>
	)
};

export default NonHeroSection;