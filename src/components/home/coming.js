import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const data = [
	{
		id: 1,
		image: require("../../assets/images/coming1.png"),
		tag: "Spring 2022",
		title: "Madam Julia",
		description: "Create Makeup Looks for Any Moment"
	},
	{
		id: 2,
		image: require("../../assets/images/coming2.png"),
		tag: "Spring 2022",
		title: "Madeleine Albright and Condoleezza Rice",
		description: "Diplomacy"
	},
	{
		id: 3,
		image: require("../../assets/images/coming1.png"),
		tag: "Spring 2022",
		title: "Madam Julia",
		description: "Create Makeup Looks for Any Moment"
	},
	{
		id: 4,
		image: require("../../assets/images/coming2.png"),
		tag: "Spring 2022",
		title: "Madeleine Albright and Condoleezza Rice",
		description: "Diplomacy"
	},
]

const coming = data.map(c => {
	return (
		<div key={"Coming post" + c.id}>
			<img src={c.image} alt="Coming post" />
			<div className="snip1584">
				<div className="coming-content">
					<p className="coming-cat">{c.tag}</p>
					<div className="coming-sub">
						<h4 className="coming-title">{c.title}</h4>
						<p className="coming-txt">{c.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
})

const ComingSoon = () => {
	var settings = {
		dots: false,
		lazyLoad: 'progressive',
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
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
		<section className="coming-soon">
			<Container>
				<Row>
					<Col lg={12}>
						<h3>Coming Soon</h3>
						<Slider {...settings}>
							{coming}
						</Slider>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default ComingSoon;