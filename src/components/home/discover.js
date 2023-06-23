import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const data = [
	{
		id: 1,
		image: require("../../assets/images/d1.png"),
		title: "Shreya Ghoshal",
		description: "Teaches Classical Music"
	},
	{
		id: 2,
		image: require("../../assets/images/d2.png"),
		title: "Shreya Ghoshal",
		description: "Teaches Classical Music"
	},
	{
		id: 3,
		image: require("../../assets/images/d3.png"),
		title: "Shreya Ghoshal",
		description: "Teaches Classical Music"
	},
	{
		id: 4,
		image: require("../../assets/images/d4.png"),
		title: "Dr. J Rajmohan Pillai",
		description: "Teaches Classical Music"
	},
	{
		id: 5,
		image: require("../../assets/images/d1.png"),
		title: "Shreya Ghoshal",
		description: "Teaches Classical Music"
	},
]
const discover = data.map(d => {
	return (
		<div className="content" key={"Discover" + d.id}>
			<div className="content-overlay"></div>
			<img className="content-image" src={d.image} alt="Trending post" />
			<div className="content-details fadeIn-bottom">
				<div className="discover-sub">
					<h4 className="discover-subtitle">{d.title}</h4>
					<div className="discover-hr"></div>
					<p className="discover-txt">{d.description}</p>
				</div>
			</div>
		</div>
	)
})

const DiscoverLife = () => {
	var settings = {
		dots: true,
		lazyLoad: 'progressive',
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 4,
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
	};

	return (
		<section className="discover-box">
			<Container>
				<Row>
					<Col lg={12}>
						<h3 className="discover-title">Discover Lifelong<br /> Learning</h3>
						<ul className="discover-tabs">
							<li>All<div className="arrow-up"></div></li>
							<li>Food</li>
							<li>Music</li>
							<li>Writing</li>
							<li>Business</li>
							<li>Arts</li>
						</ul>
						<Slider {...settings}>
							{discover}
						</Slider>
					</Col>
				</Row>
			</Container>
		</section>
	)
};

export default DiscoverLife;