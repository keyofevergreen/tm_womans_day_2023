import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page" onClick={() => navigate("/teams")}>
      <span className="home-page__title">
        International <strong>True</strong>Women's Day 2023
      </span>
    </div>
  );
};

export default HomePage;
