import React from "react";
import CVpicture from '../assets/CVpicture.jpg';

const Home = () => {
  return (
    <div className="home" id="home">
      <img src={CVpicture} alt="Elizabeth Skinner" className="profile-pic" />
      <h2>Welcome to Elizabeth Skinner's CV Website</h2>
      <p>Explore my professional journey and technical expertise.</p>
    </div>
  );
};

export default Home;
