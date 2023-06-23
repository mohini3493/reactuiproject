import React, { useEffect} from 'react';
const WebsiteLayout = React.lazy(()=> import('../components/website-layout'));
const AboutHero = React.lazy(()=> import('../components/about/about-hero'));
const WeAre = React.lazy(()=> import('../components/about/we-are'));
const WeLiveBy = React.lazy(()=> import('../components/about/we-live'));
const MeetOurTeam = React.lazy(()=> import('../components/about/meet-our-team'));

const AboutUs = () => {
    useEffect(() => {
        document.title = "About Us - Wise Talkies";
      }, []);
      
    return(
        <div>
            <AboutHero />
            <WeAre />
            <WeLiveBy />
            <MeetOurTeam />
        </div>
    )
}

export default AboutUs;