import React, { useEffect} from 'react';
const WebsiteLayout = React.lazy(()=> import('../components/website-layout'));
const HeroSection = React.lazy(()=> import('../components/home/hero-section'));
const DiscoverLife = React.lazy(()=> import('../components/home/discover'));
const CrossBox = React.lazy(()=> import('../components/home/cross-box'));
const TrendingBox = React.lazy(()=> import('../components/home/trending'));
const ComingSoon = React.lazy(()=> import('../components/home/coming'));
const RightBox = React.lazy(()=> import('../components/home/right-box'));
const TestimonialsBox = React.lazy(()=> import('../components/home/testimonials'));
const FaqBox = React.lazy(()=> import('../components/home/faq'));

const Home = () => {
    useEffect(() => {
        document.title = "Home - Wise Talkies";
      }, []);

    return(
        <div>
            <HeroSection />
            <DiscoverLife />
            <CrossBox />
            <TrendingBox />
            <ComingSoon />
            <RightBox />
            <TestimonialsBox />
            <FaqBox />
        </div>
    )
}

export default Home;