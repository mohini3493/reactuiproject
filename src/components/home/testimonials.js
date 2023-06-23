import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

const data = [
	{
		id: 1,
		image: require("../../assets/images/testimonial1.png"),
		quote: "“I’ve learned a positively immeasurable amount of things from Timbaland and Natalie Portman. It gave me this sense of possibility. Like I can actually do it. I can get a Billboard hit single, and it’s not that far away.”",
		description: "Robert Entertainer, USA"
	},
	{
		id: 2,
		image: require("../../assets/images/testimonial1.png"),
		quote: "“I’ve learned a positively immeasurable amount of things from Timbaland and Natalie Portman. It gave me this sense of possibility. Like I can actually do it. I can get a Billboard hit single, and it’s not that far away.”",
		description: "Robert Entertainer, USA"
	},
	{
		id: 3,
		image: require("../../assets/images/testimonial1.png"),
		quote: "“I’ve learned a positively immeasurable amount of things from Timbaland and Natalie Portman. It gave me this sense of possibility. Like I can actually do it. I can get a Billboard hit single, and it’s not that far away.”",
		description: "Robert Entertainer, USA"
	},
]

const testimonials = data.map(t => {
	return (
		<div className="testimonial-one" key={t.id}>
			<div className="testimonial-txt">
				<blockquote>{t.quote}</blockquote>
				<p className="testimonial-title">{t.description}</p>
			</div>
			<img src={t.image} alt="Testimonial image" />
		</div>
	)
})
const TestimonialsBox = () => {
	var settings = {
		dots: true,
		lazyLoad: 'progressive',
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
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
		<section className="testimonials-box">
			<Container>
				<Row>
					<Col lg={2}></Col>
					<Col lg={8}>
						<h3>See what our members are saying.</h3>
						<Slider {...settings}>
							{testimonials}
						</Slider>
					</Col>
					<Col lg={2}></Col>
				</Row>
			</Container>
		</section>
	)
}

export default TestimonialsBox;