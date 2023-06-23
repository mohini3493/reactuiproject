import React, { useEffect} from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const WebsiteLayout = React.lazy(() => import('../components/website-layout'));

const MemberShip = () => {
	useEffect(() => {
		document.title = "Membership - Wise Talkies";
	  }, []);

	return (
		<div>
			<section className="membership-box">
				<Container>
					<Row>
						<Col lg={12}>
							<div className="text-center membership-main">
								<h3>Choose your preferred plan</h3>
								<p>Our plans are Quarterly, monthly, yearly.</p>
							</div>
						</Col>
					</Row>
					<Row>
						<Col lg={3}>
							<div className="plan-title">
								<h1>Our <span>plans</span></h1>
							</div>
						</Col>
					</Row>
					<Row className="package-table">
						<Col lg={3} md={3} className="plan-width">
							<div className="package-box package-details">
								<h3 className="main-title">Subscription plan</h3>
								<div className="plan-hr"></div>
								<h3 className="sub-title">For each membership plan</h3>
								<Table className="plan-table plan-first-table">
									<tr>
										<td>Devices you can watch at the same time</td>
									</tr>
									<tr>
										<td>Download for offline viewing</td>
									</tr>
									<tr>
										<td>All 100+ classes across 11 categories</td>
									</tr>
									<tr>
										<td>Access to session by WiseTalkies Learn by doing in just 30 days</td>
									</tr>
									<tr>
										<td>Watch on your computer, TV, phone, tablet</td>
									</tr>
									<tr>
										<td>Bonus class guides and content</td>
									</tr>
								</Table>
							</div>
						</Col>
						<Col lg={3} md={3} className="plan-width">
							<div className="package-box package-name">
								<h3>Standard</h3>
								<div className="plan-price">₹1,225/mo</div>
								<Button className="plan-btn">Get Started</Button>
								<Table className="plan-table">
									<tr>
										<td>1</td>
									</tr>
									<tr>
										<td>No</td>
									</tr>
									<tr>
										<td><FontAwesomeIcon icon={faCheck} /></td>
									</tr>
									<tr>
										<td><FontAwesomeIcon icon={faCheck} /></td>
									</tr>
									<tr>
										<td><FontAwesomeIcon icon={faCheck} /></td>
									</tr>
									<tr>
										<td><FontAwesomeIcon icon={faCheck} /></td>
									</tr>
								</Table>
							</div>
						</Col>
						<Col lg={3} md={3} className="plan-width">
							<div className="package-box package-name selected-plan">
								<div className="selected-div">
									<Button className="selected-box">selected <FontAwesomeIcon icon={faCheck} /></Button>
								</div>
								<h3>Plus</h3>
								<div className="plan-price">₹1,725/mo</div>
								<Button className="plan-btn">Get Started</Button>
								<Table className="plan-table">
									<tr>
										<td>2</td>
									</tr>
									<tr>
										<td>Yes</td>
									</tr>
									<tr>
										<td><FontAwesomeIcon icon={faCheck} /></td>
									</tr>
									<tr>
										<td><FontAwesomeIcon icon={faCheck} /></td>
									</tr>
									<tr>
										<td><FontAwesomeIcon icon={faCheck} /></td>
									</tr>
									<tr>
										<td><FontAwesomeIcon icon={faCheck} /></td>
									</tr>
								</Table>
							</div>
						</Col>
						<Col lg={3} md={3} className="plan-width">
							<div className="package-box package-name">
								<h3>Premimum</h3>
								<div className="plan-price">₹1,925/mo</div>
								<Button className="plan-btn">Get Started</Button>
								<Table className="plan-table">
									<tr>
										<td>3</td>
									</tr>
									<tr>
										<td>Yes</td>
									</tr>
									<tr>
										<td><FontAwesomeIcon icon={faCheck} /></td>
									</tr>
									<tr>
										<td><FontAwesomeIcon icon={faCheck} /></td>
									</tr>
									<tr>
										<td><FontAwesomeIcon icon={faCheck} /></td>
									</tr>
									<tr>
										<td><FontAwesomeIcon icon={faCheck} /></td>
									</tr>
								</Table>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="selected-block">
				<Container>
					<Row>
						<Col lg={9}>
							<div className="selected-details">
								<div>
									<h3>Selected Plan</h3>
									<h2>Plus</h2>
								</div>
								<div>
									<h3>Membership Fees</h3>
									<h2>₹1,725/mo</h2>
								</div>
							</div>
						</Col>
						<Col lg={3}>
							<Button>Get Started</Button>
						</Col>
					</Row>
				</Container>
			</section>
			</div>
	)
}

export default MemberShip;