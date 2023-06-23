import React from 'react';
import { Row, Form } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faClose, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";


const Quiz3 = () => {
	return (
		<div className='quiz-container'>
			<section className='quiz-page'>
				<div className='breadcrumbDetails'>
					<Breadcrumb>
						<Breadcrumb.Item active>Module 1 : Fundamental of cooking</Breadcrumb.Item>
						<Breadcrumb.Item >Question 3</Breadcrumb.Item>
					</Breadcrumb>
					<a href='topic-quiz'><FontAwesomeIcon icon={faClose} /></a>
				</div>
				<Row>
					<div className='quizInfo'>
						<h3>Where did rice orginally come from ? </h3>
						<p>Hint :Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortxvbor nisl proin ut ultricies purus mauris.</p>
						<div>
							<h3>Description</h3>
							<Form.Control
								as="textarea"
								placeholder="Write here please "
								className='quizTextarea'
							/>
						</div>
						<Form.Group controlId="formFile" className='attachment'>
							<Form.Control type="file" className='fileQuiz' />
							<FontAwesomeIcon icon={faCloudUploadAlt} />
							<span>Click to upload</span> or drag and drop SVG,PNG,JPG or GIF (max 800x400px)
						</Form.Group>
						{/* <div className='attachment'>
							<FontAwesomeIcon icon={faCloudUploadAlt} />
							<span>Click to upload</span> or drag and drop SVG,PNG,JPG or GIF (max 800x400px)
						</div> */}
						<div className='quizBtns'>
							<button onClick={event =>  window.location.href='/quiz2'} class="btn quizBtn1"><FontAwesomeIcon icon={faArrowLeft} /> <span>Previous</span></button>
							<button onClick={event =>  window.location.href='/quiz4'} class="btn quizBtn2">Continue <FontAwesomeIcon icon={faArrowRight} /></button>
						</div>
					</div>
				</Row>
			</section>
		</div>
	)
}

export default Quiz3;