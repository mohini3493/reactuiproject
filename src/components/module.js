import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown, faAngleRight, faCheckCircle, faRightLong, faListCheck, fa1, fa2, fa3, fa4, fa5, faMedal } from "@fortawesome/free-solid-svg-icons";
import T1 from '../assets/images/discussion.png'
import { faReply } from "@fortawesome/free-solid-svg-icons";

const Module = () => {
  const [expanded1, setExpanded1] = useState(false)
  const [expanded2, setExpanded2] = useState(false)
  const [expanded3, setExpanded3] = useState(false)
  const [expanded4, setExpanded4] = useState(false)
  const [expanded5, setExpanded5] = useState(false)

  return (
    <div className='module-container'>
      <section>
        <div className='module-question'>
          {/* Question1 */}
          <div className='module-info'>
            <h4 onClick={() => setExpanded1(!expanded1)} className='question-title'>
              Module 1: Fundamentals of cooking
            </h4>
            <button className='module-faq-btn' onClick={() => setExpanded1(!expanded1)}>
              {expanded1 ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </button>
          </div>
          {expanded1 &&
            <div className='module-content'>
              <div className='module-data'><span>2/5 Completed</span><FontAwesomeIcon icon={faMedal} /></div>
              <span className='complete-borders-data'>
                <div className='complete-border'></div>
                <div className='complete-border'></div>
                <div></div>
                <div></div>
                <div></div>
              </span>
              <div>
                <p className='module-complete'>
                  <FontAwesomeIcon icon={faCheckCircle} className='module-complete-icon' />
                  What is cooking?
                  <FontAwesomeIcon icon={faListCheck} className='module-complete-icon2' />
                </p>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
              <div>
                <p className='module-complete'>
                  <FontAwesomeIcon icon={faCheckCircle} className='module-complete-icon' />
                  Steps in cooking
                  <FontAwesomeIcon icon={faListCheck} className='module-complete-icon2' />
                </p>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
              <div><p className='module-active'><FontAwesomeIcon icon={fa3} className='module-number-icon' />Fundamentals in cooking</p><FontAwesomeIcon icon={faAngleRight} /></div>
              <div><p className='module-incomplete'><FontAwesomeIcon icon={fa4} className='module-number-icon' />Improving  cooking skills</p><FontAwesomeIcon icon={faAngleRight} /></div>
              <div><p className='module-incomplete'><FontAwesomeIcon icon={fa5} className='module-number-icon' />Fundamentals of Cooking Quiz</p><FontAwesomeIcon icon={faAngleRight} /></div>
            </div>
          }
        </div>
        {/* Question2 */}
        <div className='module-question'>
          <div className='module-info'>
            <h4 onClick={() => setExpanded2(!expanded2)} className='question-title'>
              Module 2: Get started with cooking
            </h4>
            <button className='module-faq-btn' onClick={() => setExpanded2(!expanded2)}>
              {expanded2 ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </button>
          </div>
          {expanded2 &&
            <div className='module-content'>
              <div className='module-data'><span>0/5 Completed</span><FontAwesomeIcon icon={faMedal} /></div>
              <div><p className='module-incomplete'><FontAwesomeIcon icon={fa1} className='module-number-icon' />Fundamentals in cooking</p><FontAwesomeIcon icon={faAngleRight} /></div>
              <div><p className='module-incomplete'><FontAwesomeIcon icon={fa2} className='module-number-icon' />Improving  cooking skills</p><FontAwesomeIcon icon={faAngleRight} /></div>
              <div><p className='module-incomplete'><FontAwesomeIcon icon={fa3} className='module-number-icon' />Fundamentals of Cooking Quiz</p><FontAwesomeIcon icon={faAngleRight} /></div>
            </div>
          }
        </div>
        {/* Question3 */}
        <div className='module-question'>
          <div className='module-info'>
            <h4 onClick={() => setExpanded3(!expanded3)} className='question-title'>
              Module 3: Equipments with cooking
            </h4>
            <button className='module-faq-btn' onClick={() => setExpanded3(!expanded3)}>
              {expanded3 ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </button>
          </div>
          {expanded3 &&
            <div className='module-content'>
              <div className='module-data'><span>0/5 Completed</span><FontAwesomeIcon icon={faMedal} /></div>
              <div><p className='module-incomplete'><FontAwesomeIcon icon={fa1} className='module-number-icon' />Fundamentals in cooking</p><FontAwesomeIcon icon={faAngleRight} /></div>
              <div><p className='module-incomplete'><FontAwesomeIcon icon={fa2} className='module-number-icon' />Improving  cooking skills</p><FontAwesomeIcon icon={faAngleRight} /></div>
              <div><p className='module-incomplete'><FontAwesomeIcon icon={fa3} className='module-number-icon' />Fundamentals of Cooking Quiz</p><FontAwesomeIcon icon={faAngleRight} /></div>
            </div>
          }
        </div>
        {/* Question4 */}
        <div className='module-question'>
          <div className='module-info'>
            <h4 onClick={() => setExpanded4(!expanded4)} className='question-title'>
              Case Study:  Explore Cooking
            </h4>
            <button className='module-faq-btn' onClick={() => setExpanded4(!expanded4)}>
              {expanded4 ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </button>
          </div>
          {expanded4 &&
            <div className='module-content'>
              <div className='module-data'><span>0/5 Completed</span><FontAwesomeIcon icon={faMedal} /></div>
              <div><p className='module-incomplete'><FontAwesomeIcon icon={fa1} className='module-number-icon' />Fundamentals in cooking</p><FontAwesomeIcon icon={faAngleRight} /></div>
              <div><p className='module-incomplete'><FontAwesomeIcon icon={fa2} className='module-number-icon' />Improving  cooking skills</p><FontAwesomeIcon icon={faAngleRight} /></div>
              <div><p className='module-incomplete'><FontAwesomeIcon icon={fa3} className='module-number-icon' />Fundamentals of Cooking Quiz</p><FontAwesomeIcon icon={faAngleRight} /></div>
            </div>
          }
        </div>
        {/* Question5 */}
        <div className='module-question'>
          <div className='module-info'>
            <h4 onClick={() => setExpanded5(!expanded5)} className='question-title'>
              Completion:  Happy Cooking !!!
            </h4>
            <button className='module-faq-btn' onClick={() => setExpanded5(!expanded5)}>
              {expanded5 ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </button>
          </div>
          {expanded5 &&
            <div className='module-content'>
              <div className='module-data'><span>0/5 Completed</span><FontAwesomeIcon icon={faMedal} /></div>
              <div><p className='module-incomplete'><FontAwesomeIcon icon={fa1} className='module-number-icon' />Fundamentals in cooking</p><FontAwesomeIcon icon={faAngleRight} /></div>
              <div><p className='module-incomplete'><FontAwesomeIcon icon={fa2} className='module-number-icon' />Improving  cooking skills</p><FontAwesomeIcon icon={faAngleRight} /></div>
              <div><p className='module-incomplete'><FontAwesomeIcon icon={fa3} className='module-number-icon' />Fundamentals of Cooking Quiz</p><FontAwesomeIcon icon={faAngleRight} /></div>
            </div>
          }
        </div>
      </section>
      <section>
        <div className='module-infocard'>
          <div className='infocard-dots'></div>
          <p>Kerela food</p>
          <h2>Suresh Pillai</h2>
          <span>Date: 16th June 2022</span>
          <span>Time:  4:00 IST</span>
          <div className='module-infocard-links'>
            <a href='discussion'>Live Workshop</a>
            <a href='discussion'><FontAwesomeIcon icon={faRightLong} /></a>
          </div>
        </div>
      </section>
      <section className='module-discussion'>
        <div className='module-discussion-info'>
          <h3>Discussion</h3>
          <a href='#'>View More</a>
        </div>
        <div>
          <div className="module-discussion-card-info">
            <img src={T1} alt="module-image" />
            <h5>Ritika Sharma</h5>
          </div>
          <div className="module-discussion-card-info2">
            <p>Cool Stuff tutor! I’m wondering where I can find the list of
              recommended resources...</p>
            <div>
              <a href='#'> <FontAwesomeIcon icon={faReply} />Reply</a>
              <a href='#'> &bull; shows 8 repiles</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Module;