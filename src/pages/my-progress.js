import React, { useEffect} from 'react';
const WebsiteLayout = React.lazy(()=> import('../components/website-layout'));
const MyBookmark = React.lazy(()=> import('../components/my-process/my-bookmark'));
const ProgressCourses = React.lazy(()=> import('../components/my-process/progress-courses'));
const MyNotes = React.lazy(()=> import('../components/my-process/my-notes'));

const MyProgress = () =>{
    useEffect(() => {
        document.title = "My Progress - Wise Talkies";
      }, []);

    return(
        <div>
            <ProgressCourses />
            <MyNotes />
            <MyBookmark />
            <div className="non-bottom"></div>
        </div>
        )
}

export default MyProgress;