import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const SessionMeta = () => {
	const data = [
		{
			meta1: "Duration",
			meta2: "30 days"
		},
		{
			meta1: "Outcome",
			meta2: "Professional Cooking"
		},
		{
			meta1: "Structure",
			meta2: "Certificate Course"
		},
		{
			meta1: "Video Dration",
			meta2: "4 Hrs 45 Minutes"
		},
		{
			meta1: "Difficulty",
			meta2: "All levels"
		},
	]

	const meta = data.map(m => {
		return (
			<li>
				<p className="meta1">{m.meta1}</p>
				<p className="meta2">{m.meta2}</p>
			</li>
		)
	})
	return (
		<section>
			<Container>
				<Row>
					<Col lg={12}>
						<ul className="meta-box">
							{meta}
						</ul>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<div className="meta-info">
							<div className="meta-icon">
								<img src={require('../../assets/images/hlogo.png')} alt="logo" />
							</div>
							<div className="meta-content">
								<h3>Sessions are included with a Wise Talkies subscription</h3>
								<p>Unlimited Access to all 100+ instructors • New classes added every month • Watch on desktop, TV, and phone </p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default SessionMeta;