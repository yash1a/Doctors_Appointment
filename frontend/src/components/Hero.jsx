import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          CureConnect Medical Institute is a modern facility focused on offering extensive healthcare services with compassion and proficiency. Our team of experienced professionals is dedicated to providing individualized care tailored to each patient's unique requirements. At CureConnect, we prioritize your health, ensuring a seamless journey towards peak wellness and well-being.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;