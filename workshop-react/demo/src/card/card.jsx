import React from 'react';
import pokhara from '../assets/pokhara.jpg';
import './card.css';

const Card = ({item}) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={pokhara} alt="" />
      </div>

      <div className="card-body">
        <h4 className="card-title">{item}</h4>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nihil.
          Sint delectus cumque blanditiis eligendi repudiandae optio! Molestias,
          dolor voluptatibus facilis iste, dicta neque minus tenetur, quo totam
          quis officia?
        </p>
        <button className="btn">Read More...</button>
      </div>
    </div>
  );
};

export default Card;
