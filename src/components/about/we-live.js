import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const WeLiveBy = () => {
	const data = [
		{
			id: 1,
			image: require("../../assets/images/heart.png"),
			title: "Passion",
			description: "Lorem ipsum dolor sit amet, consectet adipiscing elit. Aliquet proin eu amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet proin eu amet."
		},
		{
			id: 2,
			image: require("../../assets/images/carbon_tools.png"),
			title: "Innovation",
			description: "Lorem ipsum dolor sit amet, consectet adipiscing elit. Aliquet proin eu amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet proin eu amet."
		},
		{
			id: 3,
			image: require("../../assets/images/la_users.png"),
			title: "Teamwork",
			description: "Lorem ipsum dolor sit amet, consectet adipiscing elit. Aliquet proin eu amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet proin eu amet."
		}
	]
	const items = data.map(i => {
		return(
		<Col lg={4} md={4}>
			<div className="icon-box" key={i.id}>
				<img src={i.image} alt="Icon" />
				<h4>{i.title}</h4>
				<p>{i.description}</p>
			</div>
		</Col>
		)
	})
	return (
		<section className="welive-box">
			<Container>
				<Row>
					<Col lg={12}>
						<h3>The Values We Live By</h3>
					</Col>
				</Row>
				<Row>
					{items}
				</Row>
			</Container>
		</section>
	)
}

export default WeLiveBy;