import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FaqGeneral from '../faq/faq-general';
import { useNavigate } from 'react-router-dom';

const FaqBox = () => {
	const navigate = useNavigate();
	return (
		<section className="faq-box">
			<Container>
				<Row>
					<Col lg={12}>
						<h3 className="text-center">Frequently asked questions</h3>
						<FaqGeneral />
						<Button onClick={event =>  navigate('/faq')} className="faq-blue-btn">See More</Button>
					</Col>
				</Row>
			</Container>
		</section>
	)
};

export default FaqBox;
