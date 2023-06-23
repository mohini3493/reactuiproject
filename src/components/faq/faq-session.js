import React, { useState, Fragment } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const questions = [
	{
		id: 1,
		title: 'What are Sessions and how are they different from classes?',
		info:
			'Wise Talkies is the streaming platform that makes it possible for anyone to watch or listen to hundreds of video lessons taught by 150+ of the world’s best. Whether it be in business and leadership, photography, cooking, writing, acting, music, sports and more.',
	},
	{
		id: 2,
		title: 'Is Sessions included in my Wise Talkies subscription?',
		info:
			'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
	},
	{
		id: 3,
		title: 'What happens after my 30 day Session is over?',
		info:
			'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
	},
	{
		id: 4,
		title: 'What skill-level is required for the 30 day Sessions?',
		info:
			'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
	},
]

const Question = ({ title, info }) => {
	const [expanded, setExpanded] = useState(false)

	return (
		<div className='question'>
			<div>
				<h4 onClick={() => setExpanded(!expanded)} className='question-title'>
					{title}
				</h4>
				<button className='faq-btn' onClick={() => setExpanded(!expanded)}>
					{expanded ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
				</button>
			</div>
			{expanded && <p>{info}</p>}
		</div>
	)
};

const FaqSession = () => {
	const [ques] = useState(questions)
	return (
		<Fragment>
			{ques.map((question) => (
				<Question key={question.id} {...question} />
			))}
		</Fragment>
	)
};

export default FaqSession;