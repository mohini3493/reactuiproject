import React, { useEffect} from 'react';
const WebsiteLayout = React.lazy(()=> import('../components/website-layout'));
const WelcomeMember = React.lazy(()=> import('../components/member/welcome-member'));
const MyCourses = React.lazy(()=> import('../components/member/my-courses'));
const MyCertificates = React.lazy(()=> import('../components/member/my-certificates'));
const CourseDashboard = React.lazy(()=> import('../components/non-member/dashboard-course'));

const MemberBox = () =>{
    useEffect(() => {
        document.title = "Member Box - Wise Talkies";
      }, []);

    return(
        <div>
            <WelcomeMember />
            <MyCourses />
            <MyCertificates />
            <CourseDashboard />
            <div className="non-bottom"></div>
        </div>
        )
}

export default MemberBox;
