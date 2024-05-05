import React from "react";
import star from "../../public/assets/Star 1.png";
import "./card.css";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <img src={props.coverImg} className="photo" alt="main card image" />

      <div className="card-stats">
        {badgeText && <div className="sold-out">{badgeText}</div>}
        <img src={star} alt="star" className="card-star" />

        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount})</span>
        <span className="gray"> &#183; {props.location}</span>
      </div>
      <h2 className="card-title">{props.title}</h2>
      <p className="price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
