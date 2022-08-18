import React from "react";
import "./testimony.css";

export function Testimony(props) {
  return (
    <div className="testimonial-container">
      <img
        className="testimonial-image"
        src={require(`../../images/testimonio-${props.image}.png`)}
        width="30%"
        alt="picture the emma"
      />
      <div className="testimonial-text-container">
        <p className="testimonial-name">
          <strong>{props.name}</strong> from {props.country}
        </p>
        <p className="testimonial-position">
          {props.position} in <strong>{props.business}</strong>
        </p>
        <p className="testimonial-text">{props.testimonial}</p>
      </div>
    </div>
  );
}
