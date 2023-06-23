import React from 'react';
import AD1 from '../assets/images/ad1.png'
import AD2 from '../assets/images/ad2.png'

const Articels = () => {
  const cards = [
    {
      tag1: "Lost",
      tag2: "Toronto",
      tag3: "Green",
      title: "Casablanca",
      description: "When you enter into any new areaof science, you almost always find.",
      image: AD2
    },
    {
      tag1: "Text",
      tag2: "Toronto",
      tag3: "Green",
      title: "Louisville",
      description: "When you enter into any new areaof science, you almost always find.",
      image: AD1
    },
    {
      tag1: "Lost",
      tag2: "Toronto",
      tag3: "Green",
      title: "Casablanca",
      description: "When you enter into any new areaof science, you almost always find.",
      image: AD2
    },
    {
      tag1: "Text",
      tag2: "Toronto",
      tag3: "Green",
      title: "Louisville",
      description: "When you enter into any new areaof science, you almost always find.",
      image: AD1
    }
  ]

  const manageCards = cards.map(c => {
    return (
      <div className="latest-articles-card">
        <img src={c.image} alt="Latest Articles" />
        <div className='tags'>
          <span>{c.tag1}</span>
          <span>{c.tag2}</span>
          <span>{c.tag3}</span>
        </div>
        <div className='latest-articles-Info'>
          <h3><a href='articles-details'>{c.title}</a></h3>
          <p>{c.description}</p>
        </div>
      </div>
    )
  })

  return (
    <div className='latest-articles'>
      <div>
        <div className='cardsInfo'>
          <h3>Latest Articles</h3>
          <span>See all</span>
        </div>
      </div>
      <div className='latest-article-grid'>{manageCards}</div>
    </div>
  )
}
export default Articels