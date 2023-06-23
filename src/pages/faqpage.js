import React, { useEffect} from 'react';
import { Col, Container, Row, Form, FormGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Input } from 'reactstrap';
const FaqGeneral = React.lazy(() => import('../components/faq/faq-general'));
const FaqPayment = React.lazy(() => import('../components/faq/faq-payment'));
const FaqSession = React.lazy(() => import('../components/faq/faq-session'));

const Faq = () => {
	useEffect(() => {
		document.title = "Faqs - Wise Talkies";
	  }, []);

	return (
		<div>
			<section className="faq-box faq-page">
				<Container>
					<Row>
						<Col lg={12} md={12}>
							<div className="faq-head">
								<h3>Frequently asked questions</h3>
								<p className="faq-txt">Have questions? We’re here to help.</p>
								<Form className="search-form faq-search-form">
									<FormGroup>
										<FontAwesomeIcon icon={faMagnifyingGlass} />
										<Input
											type="text"
											name="search"
											placeholder="Search"
										/>
									</FormGroup>
								</Form>
							</div>
							<div className="faq-accordions">
								<p className="faq-title">General</p>
								<FaqGeneral />
								<p className="faq-title faq-top-space">Pricing & Payment</p>
								<FaqPayment />
								<p className="faq-title faq-top-space">Sessions</p>
								<FaqSession />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	)
}

export default Faq;