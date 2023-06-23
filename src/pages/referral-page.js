import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ReferralVector1 from '../assets/images/Referral-Vector1.png';
import ReferralVector2 from '../assets/images/Referral-Vector2.png';
import r1 from '../assets/images/r1.png';
import r2 from '../assets/images/r2.png';
import r3 from '../assets/images/r3.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { faTwitter, faFacebookSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const WebsiteLayout = React.lazy(() => import('../components/website-layout'));


const ReferralPage = () => {
	useEffect(() => {
		document.title = "Referral - Wise Talkies";
	  }, []);

	const [copied, setCopied] = useState(false);
	const [data, setData] = useState("");

	const handleData = (event) => {
		setCopied(false)
		setData(event.target.value);
	};
	const refdata = [
		{
			id: 1,
			image: r1,
			title: "Send Invitation",
			description: "Invite your friends to WiseTalkies. If they sign up, you and your friend will get 2 days trial offer."
		},
		{
			id: 2,
			image: ReferralVector1,
		},
		{
			id: 3,
			image: r2,
			title: "Registration",
			description: "Let them register to our services using your referral link."
		},
		{
			id: 4,
			image: ReferralVector2,
		},
		{
			id: 5,
			image: r3,
			title: "2 Days for free!",
			description: "You and your friends get 2 days trailoffer."
		}
	]

	const referral = refdata.map(r => {
		return (
			<div className='referral' key={r.id}>
				<div className='referral-image'>
					<img src={r.image} alt="Referral" />
				</div>
				<h3>{r.title}</h3>
				<p>{r.description}</p>
			</div>
		)
	})

	return (
		<div>
			<Container>
				<div className="referral-page">
					<div className='referrals'>
						<div>
							<div>
								<h3>Referrals</h3>
								<p>Invite your friends to WiseTalkies. If they sign up, you and your friend will get 2 days trial offer.</p>
							</div>
						</div>
						<div className='referral-list'>
							{referral}
						</div>
						<div className='referral-form'>
							<h3>Invite your friends</h3>
							<p>Insert your friend’s addressess and send them invitations to join Wisetalkies!</p>
							<form class="inviteForm">
								<div className='inviteInput'>
									<label class="visually-hidden" for="inlineFormInputGroupUsername">email-id</label>
									<div class="input-group">
										<div class="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></div>
										<input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="email-id" />
									</div>
								</div>
								<button onClick={event => window.location.href = ''} type="submit" class="invite-btn">Send</button>
								<button onClick={event => window.location.href = ''} type="submit" class="invite-btn2"><FontAwesomeIcon icon={faPaperPlane} /></button>
							</form>
						</div>
						<div className='referral-form'>
							<h3>Share the referral link</h3>
							<p>You can also share your referral link by copying and sending it or sharing it on your social media.</p>
							<div className='referral-share-form'>
								<form class="inviteForm">
									<div className='inviteInput'>
										<label class="visually-hidden" for="inlineFormInputGroupUsername">wisetalkies.com/referral=882346895</label>
										<div class="input-group">
											<input type="text" value={data}
												onChange={handleData}
												class="form-control" placeholder="wisetalkies.com/referral=882346895" />
										</div>
									</div>
									<CopyToClipboard text={data} onCopy={() => setCopied(true)}>
										<button type="submit" class="share-btn">Copy Link</button>
									</CopyToClipboard>
									<CopyToClipboard text={data} onCopy={() => setCopied(true)}>
										<button type="submit" class="invite-btn2"><FontAwesomeIcon icon={faCopy} /></button>
									</CopyToClipboard>
								</form>
								<div>
									<ul className="referral-share-links">
										<li><a href="#"><FontAwesomeIcon icon={faFacebookSquare} /> </a></li>
										<li><a href="#"><FontAwesomeIcon icon={faTwitter} /> </a></li>
										<li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
export default ReferralPage;