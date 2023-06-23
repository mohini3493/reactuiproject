import React from 'react';
import { Col, Container, Row, ProgressBar } from 'react-bootstrap';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ProgressCourses = () => {

	const data = [
		{
			id: 1,
			title: "Suresh Pillai",
			image: require('../../assets/images/course1.png'),
			skill: "Teaches Authenctic Kerela food",
			info: "40",
			tagline: "In Progress"
		},
		{
			id: 2,
			title: "AShely Brown",
			image: require('../../assets/images/course2.png'),
			skill: "Teaches International food",
			info: "70",
			tagline: "In Progress"
		},
		{
			id: 3,
			title: "Freya Bnna",
			image: require('../../assets/images/course3.png'),
			skill: "Teaches International food",
			info: "8",
			tagline: "In Progress"
		},
		{
			id: 4,
			title: "Freya Bnna",
			image: require('../../assets/images/course4.png'),
			skill: "Teaches International food",
			info: "8",
			tagline: "In Progress"
		},
		{
			id: 5,
			title: "AShely Brown",
			image: require('../../assets/images/course1.png'),
			skill: "Teaches Authenctic Kerela food",
			info: "70",
			tagline: "In Progress"
		},
	]

	const courses = data.map(c => {
		return (
			<div className="course-img" key={c.id}>
				<img src={c.image} alt="Courses"/>
				<div className="course-content">
					<div className="course-icon">
						<img src={require('../../assets/images/icons_resume.png')} alt="Icon" />
					</div>
					<div className="course-sub">
						<div className="course-title">{c.title}</div>
						<div className="course-hr"></div>
						<div className="course-skill">{c.skill}</div>
						<div className="progress-info">
							<div className="sub-info">{c.info}</div>
							<div className="sub-info green-info">{c.tagline}</div>
						</div>
						<ProgressBar now={c.info} />
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
		autoplay: false,
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
		<section className="course-box progress-box">
			<Container>
				<Row>
					<Col lg={10} md={10}>
						<h3>My Courses</h3>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<Slider {...settings}>
							{courses}
						</Slider>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default ProgressCourses;