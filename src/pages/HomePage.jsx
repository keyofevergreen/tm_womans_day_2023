import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import TrueLogo from '../assets/TrueLogo.svg';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page true-background--1">
      <div>
        <div className="heart-line">
          <div className="heart" onClick={() => navigate("/teams")}>
            <img src={TrueLogo} alt="logo" className="heart__logo"/>
          </div>
        </div>
        <h1>
          International <strong>True</strong><span className="pink">Women's Day</span> 2023
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
