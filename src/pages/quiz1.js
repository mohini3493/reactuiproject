import React from 'react';
import { Row, Form } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faClose } from "@fortawesome/free-solid-svg-icons";


const Quiz1 = () => {
	return (
		<div className='quiz-container'>
			<section className='quiz-page'>
				<div className='breadcrumbDetails'>
					<Breadcrumb>
						<Breadcrumb.Item active>Module 1 : Fundamental of cooking</Breadcrumb.Item>
						<Breadcrumb.Item >Question 1</Breadcrumb.Item>
					</Breadcrumb>
					<a href='topic-quiz'><FontAwesomeIcon icon={faClose} /></a>
				</div>
				<Row>
					<div className='quizInfo'>
						<h3>Which is the national food of india ? </h3>
						<p>Hint : A dish of rice and legumes, moong dal is the most common lentil used which is the split and skinned version of green gram. </p>
						<div>
							<Form className='quiz-form'>
								<div className='quiz-option'>
									<label>Roti</label>
									<input label="" name="group1" type="radio" />
								</div>
								<div className='quiz-option'>
									<label>Khichdi</label>
									<input label="" name="group1" type="radio" />
								</div>
								<div className='quiz-option'>
									<label>Dal</label>
									<input label="" name="group1" type="radio" />
								</div>
								<div className='quiz-option'>
									<label>None of these</label>
									<input label="" name="group1" type="radio" />
								</div>
							</Form>
						</div>
						<div className='quizBtns'>
							<button onClick={event =>  window.location.href='/topic-quiz'} class="btn quizBtn1"><FontAwesomeIcon icon={faArrowLeft} /> <span>Previous</span></button>
							<button onClick={event =>  window.location.href='/quiz2'} class="btn quizBtn2">Continue <FontAwesomeIcon icon={faArrowRight} /></button>
						</div>
					</div>
				</Row>
			</section>
		</div>
	)
}

export default Quiz1;