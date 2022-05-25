import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

export default function Apps() {
  return (
    <div className="cardss">
      <div className="card">
        <img className="katieimage" src="katie-zaferes.jpg" />
        <div className="rating">
          <img className="ratingimg" src="rating.webp.crdownload" />
          <span className="ratingnumber">
            <b>5.0</b>
          </span>
          <span className="five">(6) .</span>
          <span className="five">USA</span>
        </div>
        <p className="lifelession">Life lessions with Katie</p>
        <p className="rate">
          <b> From $136/person</b>
        </p>
      </div>

      <div className="card">
        <img className="katieimage" src="weddingphotography.jpg" />
        <div className="rating">
          <img className="ratingimg" src="rating.webp.crdownload" />
          <span className="ratingnumber">
            <b>4.8</b>
          </span>
          <span className="five">(6) .</span>
          <span className="five">USA</span>
        </div>
        <p className="lifelession">Learn wedding photography</p>
        <p className="rate">
          <b> From $150/person</b>
        </p>
      </div>

      <div className="card">
        <img className="katieimage" src="biking.jpg" />
        <div className="rating">
          <img className="ratingimg" src="rating.webp.crdownload" />
          <span className="ratingnumber">
            <b>4.7</b>
          </span>
          <span className="five">(6) .</span>
          <span className="five">USA</span>
        </div>
        <p className="lifelession">Group mountain Cycling</p>
        <p className="rate">
          <b> From $50/person</b>
        </p>
      </div>
    </div>
  );
}
