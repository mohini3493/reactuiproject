import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const data = [
	{
		id: 1,
		image: require("../../assets/images/8kMU.png"),
		title: "Craig Rosser",
		description: "CTO"
	},
	{
		id: 2,
		image: require("../../assets/images/8kMU1.png"),
		title: "Ashlynn Herwitz",
		description: "CEO"
	},
	{
		id: 3,
		image: require("../../assets/images/8kMU2.png"),
		title: "Craig Rosser",
		description: "CTO"
	},
	{
		id: 4,
		image: require("../../assets/images/8kMU.png"),
		title: "Craig Rosser",
		description: "CTO"
	},
]
const meetTeam = data.map(m => {
	return (
		<div className="content">
			<div className="content-overlay"></div>
			<img className="content-image" src={m.image} alt="Team post" />
			<div className="team-content content-details fadeIn-bottom">
				<div className="team-sub">
					<h4 className="team-title">{m.title}</h4>
					<div className="team-hr"></div>
					<p className="team-txt">{m.description}</p>
				</div>
			</div>
		</div>
	)
})
const MeetOurTeam = () => {
	var settings = {
		dots: true,
		lazyLoad: 'progressive',
		infinite: true,
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
		<section className="team-box">
			<Container>
				<Row>
					<Col lg={12} md={12}>
						<h3>Meet Our Team</h3>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<Slider {...settings}>
							{meetTeam}
						</Slider>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default MeetOurTeam;