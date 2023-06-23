import React from "react";
import { Link } from 'react-router-dom';

const CategoryClassCard = (props) => {
  return (
    <div className="category-class-card">
      <img 
        src={require(`../assets/images/${props.imageURL}`)} 
        alt="class name"
        className="card-image"  
      />
      <div className="card-overlay"></div>
      <div className="card-details">
        <h3>{props.title}</h3>
        <hr/>
        <p>{props.description}</p>
        <Link to={props.ctaURL} className="btn btn-branded">&#9432; View Class Info</Link>
      </div>
    </div>
  )
}

export default CategoryClassCard