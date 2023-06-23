import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

const data = [
	{
		id: 1,
		image: require("../../assets/images/t1.png"),
		title: "Dominique crenn",
		tag: "New",
		description: "Teaches Modern Shoe Production"
	},
	{
		id: 2,
		image: require("../../assets/images/t2.png"),
		title: "Dominique crenn",
		tag: "New",
		description: "Teaches Modern Shoe Production"
	},
	{
		id: 3,
		image: require("../../assets/images/t3.png"),
		title: "Dominique crenn",
		tag: "New",
		description: "Teaches Modern Shoe Production"
	},
	{
		id: 4,
		image: require("../../assets/images/t4.png"),
		title: "Dominique crenn",
		tag: "New",
		description: "Teaches Modern Shoe Production"
	},
	{
		id: 5,
		image: require("../../assets/images/t1.png"),
		title: "Dominique crenn",
		tag: "New",
		description: "Teaches Modern Shoe Production"
	},
	{
		id: 6,
		image: require("../../assets/images/t2.png"),
		title: "Dominique crenn",
		tag: "New",
		description: "Teaches Modern Shoe Production"
	},
]

const trending = data.map(t => {
	return (
		<div className="content" key={t.id}>
			<div className="content-overlay"></div>
			<img className="content-image" src={t.image} alt="Trending post" />
			<div className="trending-content content-details fadeIn-bottom">
				<p className="trending-cat">{t.tag}</p>
				<div className="trending-sub">
					<h4 className="trending-title">{t.title}</h4>
					<div className="trending-hr"></div>
					<p className="trending-txt">{t.description}</p>
				</div>
			</div>
		</div>
	)
})

const TrendingBox = () => {
	const navigate = useNavigate();
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
		<section className="trending-box">
			<Container>
				<Row>
					<Col lg={6} md={6} sm={6}>
						<h3>Trending</h3>
					</Col>
					<Col lg={6} md={6} sm={6}>
						<a href="#" className="trending-link">See all</a>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<Slider {...settings}>
							{trending}
						</Slider>
						<Button onClick={event =>  navigate('/category')} className="trend-btn">Explore Classes</Button>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default TrendingBox;
