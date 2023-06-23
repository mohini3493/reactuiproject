import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyCertificates = () => {

	const data = [
		{
			id: 1,
			image: require("../../assets/images/certy4.png"),
		},
		{
			id: 2,
			image: require("../../assets/images/certy3.png"),
		},
	]

	const certificates = data.map(c => {
		return (
			<Col lg={4}>
				<div className="my-certy" key={c.id}>
					<img src={c.image} alt="certificate" />
					<div className="view-btn">
						<Button>view</Button>
					</div>
				</div>
			</Col>
		)
	})
	return (
		<section className="certificate-box">
			<Container>
				<Row>
					<Col lg={6} md={6}>
						<h3>My Certificates</h3>
					</Col>
					<Col lg={6} md={6}>
						<Link to="/" className="certi-link">See all</Link>
					</Col>
				</Row>
				<Row>
					{certificates}
					<Col lg={4}></Col>
				</Row>
			</Container>
		</section>
	)
}

export default MyCertificates;