import React from "react";

export default function Contact(props) {
  console.log(props);
  return (
    <div className="contact-card">
      <img className="dog" src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="./telephone.jpg" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="./emailll.png" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
