import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quod
            ducimus, a unde consequuntur nihil eveniet facere temporibus
            voluptatem cum, amet assumenda soluta. Assumenda natus voluptas
            eveniet earum ratione blanditiis ipsa consectetur eum voluptatibus
            tempora maxime praesentium velit rerum nam possimus quos dolorem
            tempore, voluptates cupiditate ut aperiam at odio!
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
