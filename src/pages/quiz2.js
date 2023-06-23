import React from 'react';
import { Row, Form } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";


const Quiz2 = () => {
	return (
		<div className='quiz-container'>
			<section className='quiz-page'>
				<div className='breadcrumbDetails'>
					<Breadcrumb>
						<Breadcrumb.Item active>Module 1 : Fundamental of cooking</Breadcrumb.Item>
						<Breadcrumb.Item >Question 2</Breadcrumb.Item>
					</Breadcrumb>
					<a href='topic-quiz'><FontAwesomeIcon icon={faClose} /></a>
				</div>
				<Row>
					<div className='quizInfo'>
						<h3>Which part of the ginger plant we eat ?</h3>
						<p>Hint :Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortxvbor nisl proin ut ultricies purus mauris.</p>
						<div>
							<h3>Answer</h3>
							<Form.Control
								as="textarea"
								placeholder="Write here please "
								className='quizTextarea'
							/>
						</div>
						<div className='quizBtns'>
							<button onClick={event =>  window.location.href='/quiz1'} class="btn quizBtn1"><FontAwesomeIcon icon={faArrowLeft} /> <span>Previous</span></button>
							<button  onClick={event =>  window.location.href='/quiz3'} class="btn quizBtn2">Continue <FontAwesomeIcon icon={faArrowRight} /></button>
						</div>
					</div>
				</Row>
			</section>
		</div>
	)
}

export default Quiz2;