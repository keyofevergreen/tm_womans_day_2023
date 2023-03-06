import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page" onClick={() => navigate("/teams")}>
      <h1>
        International <strong>True</strong>Women's Day 2023
      </h1>
    </div>
  );
};

export default HomePage;
