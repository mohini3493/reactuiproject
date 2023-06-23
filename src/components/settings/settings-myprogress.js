import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import p1 from "../../assets/images/progress1.png"
import p2 from "../../assets/images/progress2.png"
import p3 from "../../assets/images/progress3.png"
import p4 from "../../assets/images/progress4.png"
import p5 from "../../assets/images/progress5.png"
import ProgressBar from 'react-bootstrap/ProgressBar'

const Myprogress = () => {
  const cards1 = [
    {
      id: 1,
      title: "Suresh Pillai",
      description: "Teaches Authenctic Kerela food",
      image: p1,
      process: 40
    },
    {
      id: 2,
      title: "AShely Brown",
      description: "Teaches International food",
      image: p2,
      process: 70
    },
    {
      id: 2,
      title: "AShely Brown",
      description: "Teaches International food",
      image: p2,
      process: 40
    }
  ]

  const cards2 = [
    {
      id: 1,
      title: "Jade Brown",
      description: "Teaches Shoedesign",
      image: p3,
      process: 40
    },
    {
      id: 2,
      title: "AShely Brown",
      description: "Teaches Shoedesign",
      image: p4,
      process: 70
    },
    {
      id: 2,
      title: "AShely Brown",
      description: "Teaches Shoedesign",
      image: p5,
      process: 40
    }
  ]

  const foodcards = cards1.map(f => {
    const now = f.process;
    return (
      <div className="myprogress-card">
        <div className='card-icons'><FontAwesomeIcon icon={faPlay} /></div>
        <img src={f.image} alt="Food" />
        <div className='myprogress-card-info'>
          <div className='myprogress-title-info'>
            <h4>{f.title}</h4>
            <div className="trending-hr"></div>
            <p>{f.description}</p>
          </div>
          <div className='myprogress-bar'>
            <div className='myprogress-bar-info'>
              <span>{now}% Completed</span>
              <span>In Progress</span>
            </div>
            <ProgressBar now={now} />
          </div>
        </div>
      </div>
    )
  })

  const fashioncards = cards2.map(f => {
    const now = f.process;
    return (
      <div className="myprogress-card">
        <div className='card-icons'><FontAwesomeIcon icon={faPlay} /></div>
        <img src={f.image} alt="Food" />
        <div className='myprogress-card-info'>
          <div className='myprogress-title-info'>
            <h4>{f.title}</h4>
            <div className="trending-hr"></div>
            <p>{f.description}</p>
          </div>
          <div className='myprogress-bar'>
            <div className='myprogress-bar-info'>
              <span>{now}% Completed</span>
              <span>In Progress</span>
            </div>
            <ProgressBar now={now} />
          </div>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div>
        <h3>My progress</h3>
        <p>Check your progress here</p>
      </div>
      <div className='myprogress-infos'>
        <h2>Courses</h2>
        <hr></hr>
        <div className='myprogress-info'>
          <section>
            <h3>Food</h3>
            <div className='food-cards'>
              {foodcards}
            </div>
          </section>
          <section>
            <h3>Fashion</h3>
            <div className='fashion-cards'>
              {fashioncards}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
};

export default Myprogress;