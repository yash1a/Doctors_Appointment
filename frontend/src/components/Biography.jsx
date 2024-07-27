import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Welcome to CureConnect, where we bridge the gap between patients and quality healthcare with seamless appointment scheduling and expert medical care. Our mission is to enhance patient experiences by providing easy access to a network of skilled healthcare professionals. At CureConnect, we are dedicated to offering personalized care tailored to each individual's needs, ensuring a smooth and stress-free journey towards health and wellness. With our state-of-the-art platform, we aim to make healthcare more accessible, efficient, and compassionate. Join us on a path to better health with CureConnect.
          </p>
          <p>We are all in 2024!</p>
          <p>The Objective of CureConnect</p>
          <p>
          The objective of CureConnect is to revolutionize the healthcare experience by simplifying the appointment scheduling process and connecting patients with top-notch medical professionals. We aim to enhance accessibility, efficiency, and convenience in healthcare services, ensuring that patients receive timely and personalized care. By leveraging cutting-edge technology, CureConnect strives to create a seamless and user-friendly platform that prioritizes the well-being of every individual, making quality healthcare easily attainable for all.
          </p>
          <p>Your health, our priority at CureConnect.</p>
          <p>Care with ease!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;