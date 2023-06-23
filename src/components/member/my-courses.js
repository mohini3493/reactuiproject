import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyCourses = () => {

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
		}
	]

	const courses = data.map(c => {
		return (
			<Col lg={3}>
				<div className="course-img" key={c.id}>
					<img src={c.image} alt="Courses" />
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
			</Col>
		)
	})

	return (
		<section className="course-box">
			<Container>
				<Row>
					<Col lg={6}>
						<h3>My Courses</h3>
					</Col>
					<Col lg={6}>
						<Link to="/" className="course-all">See all</Link>
					</Col>
				</Row>
				<Row>
					{courses}
					<Col lg={3}></Col>
					<Col lg={3}></Col>
				</Row>
			</Container>
		</section>
	)
}

export default MyCourses;