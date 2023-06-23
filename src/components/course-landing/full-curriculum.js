import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const FullCurriculum = () => {
	const data = [
		{
			id: 0,
			no: 1,
			title: "Module 1: Introduction to Cooking",
			description: "Suresh Pillai introduces himself, gives an overview of how he became a professional Chef. He fills you in on the class format and everything you’ll learn in the next 30 days.",
			info: "1 day to complete",
			topicBox: [
				{
					image: require('../../assets/images/unsplash1.png'),
					no: "Topic 1",
					title: "Introduction to cooking",
					meta: "14 minutes  • Take Quiz",
					metaImage: require('../../assets/images/task-list.png'),
					description: "Suresh Pillai introduces himself, fills you in on the session format, and offers a preview of everything you’ll learn in the next 30 days.",
				},
				{
					image: require('../../assets/images/unsplash1.png'),
					no: "Topic 2",
					title: "Guide to cooking",
					meta: "24 minutes  • Take Quiz",
					metaImage: require('../../assets/images/task-list.png'),
					description: "Suresh Pillai introduces himself, fills you in on the session format, and offers a preview of everything you’ll learn in the next 30 days.",
				}
			]
		},
		{
			id: 1,
			no: 2,
			title: "Methods of Cooking (All Cuisine)",
			description: "Suresh Pillai introduces himself, gives an overview of how he became a professional Chef. He fills you in on the class format and everything you’ll learn in the next 30 days.",
			info: "1 day to complete",
			topicBox: [
				{
					image: require('../../assets/images/unsplash1.png'),
					no: "Topic 1",
					title: "Introduction to cooking",
					meta: "14 minutes  • Take Quiz",
					metaImage: require('../../assets/images/task-list.png'),
					description: "Suresh Pillai introduces himself, fills you in on the session format, and offers a preview of everything you’ll learn in the next 30 days.",
				},
				{
					image: require('../../assets/images/unsplash1.png'),
					no: "Topic 2",
					title: "Guide to cooking",
					meta: "24 minutes  • Take Quiz",
					metaImage: require('../../assets/images/task-list.png'),
					description: "Suresh Pillai introduces himself, fills you in on the session format, and offers a preview of everything you’ll learn in the next 30 days.",
				}
			]
		},
		{
			id: 2,
			no: 3,
			title: "Evolving as a Chef",
			description: "Suresh Pillai introduces himself, gives an overview of how he became a professional Chef. He fills you in on the class format and everything you’ll learn in the next 30 days.",
			info: "1 day to complete",
			topicBox: [
				{
					image: require('../../assets/images/unsplash1.png'),
					no: "Topic 1",
					title: "Introduction to cooking",
					meta: "14 minutes  • Take Quiz",
					metaImage: require('../../assets/images/task-list.png'),
					description: "Suresh Pillai introduces himself, fills you in on the session format, and offers a preview of everything you’ll learn in the next 30 days.",
				},
				{
					image: require('../../assets/images/unsplash1.png'),
					no: "Topic 2",
					title: "Guide to cooking",
					meta: "24 minutes  • Take Quiz",
					metaImage: require('../../assets/images/task-list.png'),
					description: "Suresh Pillai introduces himself, fills you in on the session format, and offers a preview of everything you’ll learn in the next 30 days.",
				}
			]
		},
		{
			id: 3,
			no: 4,
			title: "Building a Brand and Collaboration",
			description: "Suresh Pillai introduces himself, gives an overview of how he became a professional Chef. He fills you in on the class format and everything you’ll learn in the next 30 days.",
			info: "1 day to complete",
			topicBox: [
				{
					image: require('../../assets/images/unsplash1.png'),
					no: "Topic 1",
					title: "Introduction to cooking",
					meta: "14 minutes  • Take Quiz",
					metaImage: require('../../assets/images/task-list.png'),
					description: "Suresh Pillai introduces himself, fills you in on the session format, and offers a preview of everything you’ll learn in the next 30 days.",
				},
				{
					image: require('../../assets/images/unsplash1.png'),
					no: "Topic 2",
					title: "Guide to cooking",
					meta: "24 minutes  • Take Quiz",
					metaImage: require('../../assets/images/task-list.png'),
					description: "Suresh Pillai introduces himself, fills you in on the session format, and offers a preview of everything you’ll learn in the next 30 days.",
				}
			]
		}
	]
	const accordion = data.map(a => {
		return (
			<Accordion.Item eventKey={a.id}>
				<Accordion.Header><span>{a.no}</span>{a.title}</Accordion.Header>
				<Accordion.Body>
					<p>{a.description}</p>
					<p>{a.info}</p>
					{a.topicBox.map((tbox) => {
						return (
							<div className="topic-box">
								<div>
									<img src={tbox.image} className="topic-img" alt='topic'/>
								</div>
								<div className="topic-sub">
									<p className="topic-txt">{tbox.no}</p>
									<h3>{tbox.title}</h3>
									<div>
										<p className="topic-meta">{tbox.meta}<img src={tbox.metaImage} alt='meta'/></p>
									</div>
									<p className="topic-txt1">{tbox.description}</p>
								</div>
							</div>)
					})}
				</Accordion.Body>
			</Accordion.Item>
		)
	})
	return (
		<section>
			<Container>
				<Row>
					<Col lg={12}>
						<h3 className="curriculum-title">Explore the full curriculum</h3>
						<div className="curriculum-content">
							<Accordion defaultActiveKey="0" flush>
								{accordion}
							</Accordion>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default FullCurriculum;