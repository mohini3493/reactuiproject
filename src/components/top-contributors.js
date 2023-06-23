import React from 'react';
import t1 from '../assets/images/trailer.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";


const Contributors = () => {

  const data = [
    {
      id: 1,
      image: t1,
      name: "Ryan Lubin",
      seen: 80,
      comment: 8
    },
    {
      id: 2,
      image: t1,
      name: "Kaylynn Donin",
      seen: 80,
      comment: 8
    },
    {
      id: 3,
      image: t1,
      name: "James Botosh",
      seen: 80,
      comment: 8
    },
    {
      id: 4,
      image: t1,
      name: "Corey Westervelt",
      seen: 80,
      comment: 8
    },
    {
      id: 5,
      image: t1,
      name: "Carter Ekstrom ",
      seen: 80,
      comment: 8
    },
    {
      id: 6,
      image: t1,
      name: "Marley Lipshutz",
      seen: 80,
      comment: 8
    },
    {
      id: 7,
      image: t1,
      name: "Gretchen Dias",
      seen: 80,
      comment: 8
    },
    {
      id: 8,
      image: t1,
      name: "Paityn Lubin",
      seen: 80,
      comment: 8
    },
  ]

  const people = data.map(p => {
    return (
      <div key={p.id}>
        <div className='contributors-info'>
          <img src={p.image} alt="Contributor" />
          <div>{p.name}</div>
          <div className='contributors-icons'>
            <div><FontAwesomeIcon icon={faEye} /> 60</div>
            <div><FontAwesomeIcon icon={faCommentDots} /> 8</div>
          </div>
        </div>
      </div>
    )
  })

  const data2 = [
    {
      id: 1,
      image: t1,
      title: "Gretchen Dias",
      info: "Posted",
      description: "Pneumatic is the application of pressurized gas to affect the mechanical motion.",
      comments: "0"
    },
    {
      id: 2,
      image: t1,
      title: "Gretchen Dias",
      info: "Posted",
      description: "Pneumatic is the application of pressurized gas to affect the mechanical motion.",
      comments: "0"
    },
  ]

  const talks = data2.map(t => {
    return (
      <div className='contributors-discussion'>
        <div className='contributors-info'>
          <img src={t.image} alt="Contributor" />
          <h5>{t.title}</h5>
          <span>{t.info}</span>
        </div>
        <p>{t.description}</p>
        <p><FontAwesomeIcon icon={faComment} /> {t.comments} comments</p>
      </div>
    )
  })
  return (
    <div className='contributors'>
      <div>
        <div className='contributors-head'>
          <h3>Top Contributors</h3>
          <p>People who started most discussion on wise talkies</p>
        </div>
        {people}
      </div>
      <div className='contributors-discussions'>
        <div className='contributors-head'>
          <h3>Unanswered talks</h3>
          <p>Discussions with no comments, Be a first to post a comment</p>
        </div>
        {talks}
      </div>
    </div>
  )
}
export default Contributors