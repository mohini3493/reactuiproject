import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const SessionOther = () => {
	const data = [
		{
			id: 1,
			image: require("../../assets/images/t1.png"),
			tag: "New",
			title: "Dominique crenn",
			description: "Teaches Modern Shoe Production"
		},
		{
			id: 2,
			image: require("../../assets/images/t2.png"),
			tag: "New",
			title: "Dominique crenn",
			description: "Teaches Modern Shoe Production"
		},
		{
			id: 3,
			image: require("../../assets/images/t3.png"),
			tag: "New",
			title: "Dominique crenn",
			description: "Teaches Modern Shoe Production"
		},
		{
			id: 4,
			image: require("../../assets/images/t4.png"),
			tag: "New",
			title: "Dominique crenn",
			description: "Teaches Modern Shoe Production"
		},
		{
			id: 5,
			image: require("../../assets/images/t1.png"),
			tag: "New",
			title: "Dominique crenn",
			description: "Teaches Modern Shoe Production"
		},
		{
			id: 6,
			image: require("../../assets/images/t2.png"),
			tag: "New",
			title: "Dominique crenn",
			description: "Teaches Modern Shoe Production"
		}
	]

	const sessions = data.map(s => {
		return (
			<div className="content" key={s.id}>
				<div className="content-overlay"></div>
				<img className="content-image" src={s.image} alt='Trendingpost' />
				<div className="trending-content content-details fadeIn-bottom">
					<p className="trending-cat">{s.tag}</p>
					<div className="trending-sub">
						<h4 className="trending-title">{s.title}</h4>
						<div className="trending-hr"></div>
						<p className="trending-txt">{s.description}</p>
					</div>
				</div>
			</div>
		)
	})

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
		<section className="trending-box">
			<Container>
				<Row className="session-other">
					<Col lg={6} md={6}>
						<h3>Explore other classes</h3>
					</Col>
					<Col lg={6} md={6}>
						<ul className="discover-tabs">
							<li>Featured<div className="arrow-up"></div></li>
							<li>Most Popular</li>
							<li>Trending</li>
							<li>Just Added</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<Slider {...settings}>
							{sessions}
						</Slider>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default SessionOther;