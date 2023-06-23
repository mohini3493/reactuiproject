import React, { useEffect} from 'react';
const WebsiteLayout = React.lazy(()=> import('../components/website-layout'));
const TrendingDashboard = React.lazy(()=> import('../components/non-member/dashboard-trending'));
const NonVideo = React.lazy(()=> import('../components/non-member/non-video'));
const CourseDashboard = React.lazy(()=> import('../components/non-member/dashboard-course'));
const NonHeroSection = React.lazy(()=> import('../components/non-member/non-hero-section'));

const NonMember = () =>{
    useEffect(() => {
        document.title = "Non Member - Wise Talkies";
      }, []);

    return(
        <div>
            <NonHeroSection />
            <TrendingDashboard />
            <NonVideo />
            <CourseDashboard />
            <div className="non-bottom"></div>
        </div>
        )
}

export default NonMember;
