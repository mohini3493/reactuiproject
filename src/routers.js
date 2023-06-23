import React, {Suspense, useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const lazyDelayed = (importPromise) => {
  return React.lazy(() => Promise.all([
    importPromise,
    new Promise((resolve) => setTimeout(resolve, 300)) // ensures minimal delay
  ]).then(([module]) => module));
}

const Loader = () => {
  return (<div className="loading-box container">Loading ...</div>);
}


const Home = lazyDelayed( import('./pages/index'));
const NotFound = lazyDelayed( import('./pages/notfound'));
const Faq = lazyDelayed( import('./pages/faqpage'));
const ContactUs = lazyDelayed( import('./pages/contactus'));
const LoginPg = lazyDelayed(import('./pages/loginpage'));
const MemberShip = lazyDelayed(import('./pages/membership'));
const Category = lazyDelayed( import('./pages/category'));
const PagesList = lazyDelayed( import('./pages/pages-list'));
const ReferralPage = lazyDelayed( import('./pages/referral-page'));
const GiftCard = lazyDelayed( import('./pages/gift-cards-page'));
const Quiz1 = lazyDelayed( import('./pages/quiz1'));
const Quiz2 = lazyDelayed( import('./pages/quiz2'));
const Quiz3 = lazyDelayed( import('./pages/quiz3'));
const Quiz4 = lazyDelayed( import('./pages/quiz4'));
const Bookmarks = lazyDelayed( import('./pages/bookmarks'));
const Playlist = lazyDelayed( import('./pages/playlist-page'));
const Trailers = lazyDelayed( import('./pages/browse-trailers-page'));
const ArticelsDetails = lazyDelayed( import('./pages/articles-details'));
const Articels = lazyDelayed( import('./pages/articles-page'));
const Discussion = lazyDelayed( import('./pages/discussion-page'));
const DiscussionDetails = lazyDelayed( import('./pages/discussion-details'));
const Communities = lazyDelayed( import('./pages/communities-page'));
const Settings = lazyDelayed( import('./pages/settings'));
const CousreCompletion = lazyDelayed( import('./pages/course-completion'));
const CaseStudy = lazyDelayed( import('./pages/case-study'));
const Instructor = lazyDelayed( import('./pages/instructor-page'));
const CourseDetails = lazyDelayed( import('./pages/course-details'));
const TopicQuiz = lazyDelayed( import('./pages/topic-quiz'));
const TopicQuizCompletion = lazyDelayed( import('./pages/topic-quiz-completion'));
const MemberCheckout = lazyDelayed( import('./pages/membercheckout'));
const MemberCheckout2 = lazyDelayed( import('./pages/membercheckout2'));
const NonMember = lazyDelayed( import('./pages/nonmember'));
const MemberBox = lazyDelayed( import('./pages/member'));
const CourseDetail = lazyDelayed( import('./pages/course-detail'));
const MyProgress = lazyDelayed( import('./pages/my-progress'));
const CourseLanding = lazyDelayed( import('./pages/course-landing'));
const AboutUs = lazyDelayed( import('./pages/about'));
const WebsiteLayout = React.lazy(() => import('./components/website-layout'));

// Pages in which <WebsiteLayout> needs to have a prop admin={true}
const adminPaths = [
  '/bookmarks',
  '/referrals',
  '/play-list',
  '/bookmarks',
  '/browse-trailers',
  '/gift-card',
  '/playlist',
  '/articles-details',
  '/articles',
  '/discussion',
  '/discussion-details',
  '/communities',
  '/settings',
  '/course-completion',
  '/case-study',
  '/instructor',
  '/topic-quiz',
  '/topic-quiz-completion',
  '/course-details',
  '/nonmember',
  '/member',
  '/course-detail',
  '/my-progress'
]

const Routers = () => {

    const useEffect = () => {
    console.log("Using effect");
      return <Loader/>;
    }

    console.log("Location ", window.location);
    const isAdmin = adminPaths.includes(window.location.pathname);
    

    return (
      
        <Router>
          <WebsiteLayout admin={isAdmin}>
            <Suspense fallback={<Loader/>}>
              <Routes>
                
                <Route exact path='/' element={<Home />} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/category' element={<Category /> ? <Category /> : <Loader />} />
                  <Route element={<NotFound />} />
                  <Route path='/faq' element={<Faq />} />
                  <Route path='/contact-us' element={<ContactUs />} />
                  <Route path='/login' element={<LoginPg/> ? <LoginPg /> : <Loader/>} />
                  <Route path='/membership' element={<MemberShip /> ? <MemberShip /> : <Loader />} />
                  <Route path='/pages-list' element={<PagesList />} />
                  <Route path='/referral' element={<ReferralPage />} />
                  <Route path='/gift-card' element={<GiftCard />} />
                  <Route path='/quiz1' element={<Quiz1 />} />
                  <Route path='/quiz2' element={<Quiz2 />} />
                  <Route path='/quiz3' element={<Quiz3 />} />
                  <Route path='/quiz4' element={<Quiz4 />} />
                  <Route path='/bookmarks' element={<Bookmarks />} />
                  <Route path='/play-list' element={<Playlist />} />
                  <Route path='/browse-trailers' element={<Trailers />} />
                  <Route path='/articles-details' element={<ArticelsDetails />} />
                  <Route path='/articles' element={<Articels />} />
                  <Route path='/discussion' element={<Discussion />} />
                  <Route path='/discussion-details' element={<DiscussionDetails />} />
                  <Route path='/communities' element={<Communities />} />
                  <Route path='/settings' element={<Settings />} />
                  <Route path='/course-completion' element={<CousreCompletion />} />
                  <Route path='/case-study' element={<CaseStudy />} />
                  <Route path='/instructor' element={<Instructor />} />
                  <Route path='/topic-quiz' element={<TopicQuiz />} />
                  <Route path='/topic-quiz-completion' element={<TopicQuizCompletion />} />
                  <Route path='/course-details' element={<CourseDetails />} />
                  <Route path='/about' element={<AboutUs />} />
                  <Route path='/membercheckout' element={<MemberCheckout />} />
                  <Route path='/membercheckout2' element={<MemberCheckout2 />} />
                  <Route path='/nonmember' element={<NonMember />} />
                  <Route path='/member' element={<MemberBox />} />
                  <Route path='/course-detail' element={<CourseDetail />} />
                  <Route path='/my-progress' element={<MyProgress />} />
                  <Route path='/course-landing' element={<CourseLanding />} />
              </Routes>
        </Suspense>
      </WebsiteLayout>
    </Router>
    
    )
}

export default Routers;
