import React, { useEffect} from 'react';
const WebsiteLayout = React.lazy(()=> import('../components/website-layout'));
const NewSessions = React.lazy(()=> import('../components/course-landing/session-section'));
const SessionMeta = React.lazy(()=> import('../components/course-landing/session-meta'));
const SessionOther = React.lazy(()=> import('../components/course-landing/session-other'));
const FullCurriculum = React.lazy(()=> import('../components/course-landing/full-curriculum'));
const FaqBox = React.lazy(()=> import('../components/home/faq'));

const CourseLanding = () =>{
    useEffect(() => {
        document.title = "Course Landing - Wise Talkies";
      }, []);

    return(
        <div>
            <NewSessions />
            <SessionMeta />
            <FullCurriculum />
            <SessionOther />
            <FaqBox />
        </div>
    )
}

export default CourseLanding;
