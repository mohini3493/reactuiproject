import React, { useEffect} from 'react';
import { Container } from 'react-bootstrap';
import AD1 from '../assets/images/ad1.png'
import AD2 from '../assets/images/ad2.png'
import AD3 from '../assets/images/ad3.png'
import AD4 from '../assets/images/ad4.png'
const LatestArticles = React.lazy(() => import('../components/latest-articles'));
const WebsiteLayout = React.lazy(() => import('../components/website-layout'));

const ArticelsDetailsPage = () => {
  useEffect(() => {
    document.title = "Articles - Wise Talkies";
  }, []);

  return (
    <div>
      <Container>
        <div className='articles-head'>
          <h3>Articles</h3>
          <ul className="articles-tabs">
            <li>Design & Style <div className="arrow-up"></div></li>
            <li>Arts & Entertainment</li>
            <li>Food</li>
            <li>Business</li>
            <li>Science & Tech</li>
          </ul>
        </div>
        <section className='articles'>
          <div>
            <div className="articles-card">
              <div className='articles-tags'>
                <span>Harare</span>
                <span>Alexandria</span>
                <span>Hubble</span>
              </div>
              <div className='articles-info'>
                <h3><a href="articles-details">Brisbane</a></h3>
                <p>When you enter into any new area
                  of science, you almost always find.</p>
                <a href='articles-details'>Details</a>
              </div>
            </div>
            <div className="latest-articles-card">
              <img src={AD2} alt="Latest Articles" />
              <div className='tags'>
                <span>Lost</span>
                <span>Toronto</span>
                <span>Green</span>
              </div>
              <div className='latest-articles-Info'>
                <h3><a href="articles-details">Casablanca</a></h3>
                <p>When you enter into any new area
                  of science, you almost always find.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="articles-card">
              <div className='articles-tags'>
                <span>Dogs</span>
                <span>Behance</span>
              </div>
              <img src={AD3} alt="CardImage" />
              <div className='articles-info'>
                <h3><a href="articles-details">Kathmandu</a></h3>
                <p>When you enter into any new area </p>
                <a href='articles-details'>Details</a>
              </div>
            </div>
            <div className="latest-articles-card">
              <img src={AD1} alt="Latest Articles" />
              <div className='tags'>
                <span>Text</span>
                <span>Khartoum</span>
                <span>Detroit</span>
              </div>
              <div className='latest-articles-Info'>
                <h3><a href="articles-details">Louisville</a></h3>
                <p>When you enter into any new area
                  of science, you almost always find.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="latest-articles-card articles-card-img">
              <img src={AD4} alt="Latest Articles" />
              <div className='tags'>
                <span>Lost</span>
                <span>Designer</span>
              </div>
              <div className='latest-articles-Info'>
                <h3><a href="articles-details">Indianapolis</a></h3>
                <p>When you enter into any new area
                  of science, you almost always find.</p>
              </div>
            </div>
            <div className="articles-card">
              <div className='articles-tags'>
                <span>Harare</span>
                <span>Alexandria</span>
                <span>Hubble</span>
              </div>
              <div className='articles-info'>
                <h3><a href="articles-details">Brisbane</a></h3>
                <p>When you enter into any new area
                  of science, you almost always find.</p>
                <a href='articles-details'>Details</a>
              </div>
            </div>
          </div>

          <div>
            <div className="articles-card">
              <div className='articles-tags'>
                <span>Harare</span>
                <span>Alexandria</span>
                <span>Hubble</span>
              </div>
              <div className='articles-info'>
                <h3><a href="articles-details">Brisbane</a></h3>
                <p>When you enter into any new area
                  of science, you almost always find.</p>
                <a href='articles-details'>Details</a>
              </div>
            </div>
            <div className="latest-articles-card">
              <img src={AD2} alt="Latest Articles" />
              <div className='tags'>
                <span>Text</span>
                <span>Khartoum</span>
                <span>Detroit</span>
              </div>
              <div className='latest-articles-Info'>
                <h3><a href="articles-details">Louisville</a></h3>
                <p>When you enter into any new area
                  of science, you almost always find.</p>
              </div>
            </div>
          </div>
        </section>
        <LatestArticles />
      </Container>
    </div>
  )
}
export default ArticelsDetailsPage