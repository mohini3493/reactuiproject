import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const WelcomeMember = () => {
	const navigate = useNavigate();
	return (
		<section className="welcome-box">
			<Container>
				<Row>
					<Col lg={9}>
						<div className="first-box">
							<h3>Welcome back, Sanjana!</h3>
							<p>Please complete your Case Study submission, there is just 5 days left to your Deadline</p>
							<Button onClick={event =>  navigate('/case-study')}><FontAwesomeIcon icon={faPlay} /> start</Button>
						</div>
					</Col>
					<Col lg={3}></Col>
				</Row>
			</Container>
		</section>
	)
}

export default WelcomeMember;