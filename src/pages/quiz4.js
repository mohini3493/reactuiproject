import React from 'react';
import { Row, Form } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const Quiz4 = () => {
	return (
		<div className='quiz-container'>
			<section className='quiz-page'>
				<div className='breadcrumbDetails'>
					<Breadcrumb>
						<Breadcrumb.Item active>Module 1 : Fundamental of cooking</Breadcrumb.Item>
						<Breadcrumb.Item >Question 4</Breadcrumb.Item>
					</Breadcrumb>
					<a href='topic-quiz'><FontAwesomeIcon icon={faClose} /></a>
				</div>
				<Row>
					<div className='quizInfo'>
						<h3>Which is the national vegetable of india ? </h3>
						<p>Hint :Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortxvbor nisl proin ut ultricies purus mauris.</p>
						<div>
							<Form className='quiz-form'>
								<div className='quiz-option'>
									<label>Lady’s finger</label>
									<input label="" name="#" type="radio" />
								</div>
								<div className='quiz-option'>
									<label>Brinjal</label>
									<input label="" name="#" type="radio" />
								</div>
								<div className='quiz-option'>
									<label>Carrot</label>
									<input label="" name="#" type="radio" />
								</div>
								<div className='quiz-option'>
									<label>Indian pumpkin</label>
									<input label="" name="#" type="radio" />
								</div>
							</Form>
						</div>
						<div className='quizBtns'>
							<button onClick={event =>  window.location.href='/topic-quiz-completion'} class="btn quizBtn2">SUBMIT</button>
						</div>
					</div>
				</Row>
			</section>
		</div>
	)
}

export default Quiz4;