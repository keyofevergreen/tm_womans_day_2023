import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../emojiRain.css'
import '../index.css';
import TrueLogo from '../assets/TrueLogoColored.svg';
import runEmojiRain from "../helpers/runEmojiRain";
import classNames from "classnames";

const emojiRows = [
  ["😎", "👌", "👍", "👉", "🙏"],
  ["👀", "👶", "👩‍🦰", "🙆‍♀️", "👨‍👩‍👦"],
  ["🦝", "🐀", "🐍", "🐝", "🍓"],
  ["🍰", "🌏", "🏚️", "🚢", "🚀"],
  ["🕐", "🌑", "☀️", "⭐️", "😳"],
];

const correctRebus = ["👉", "👩‍🦰", "👍", "⭐️"];
const correctAnswer = "такие девушки как звезды";

const RebusPage = () => {
  const [rebus, setRebus] = useState([]);
  const [rebusError, setRebusError] = useState(false);
  const [rebusFound, setRebusFound] = useState(false);
  const [answer, setAnswer] = useState("");
  const [answerFound, setAnswerFound] = useState(false);
  const navigate = useNavigate();

  function onEmojiClick(value) {
    setRebus((prevState) => [...prevState, value]);
  }

  function onAnswerInput(event) {
    const value = event.target.value;
    setAnswer(value);
    if (value.trim().toLowerCase() === correctAnswer) {
      setAnswerFound(true);
      setTimeout(() => {
        navigate("/gift");
      }, 7000);
    }
  }

  function validateRebus(rebus) {
    return (
      rebus[0] === correctRebus[0] &&
      rebus[1] === correctRebus[1] &&
      rebus[2] === correctRebus[2] &&
      rebus[3] === correctRebus[3]
    );
  }

  useEffect(() => {
    if (rebus.length === 4) {
      if (validateRebus(rebus)) setRebusFound(true);
      else {
        setRebusError(true);
        setTimeout(() => {
          setRebus([]);
          setRebusError(false);
        }, 2000);
      }
    }
  }, [rebus]);

  useEffect(() => {
    if(answerFound) {
      runEmojiRain();
    }
  }, [answerFound]);


  return (
    <>
      <div id="all">
        <div id="container">
          <div id="animate">
          </div>
        </div>
      </div>
      <div id="text">
        <div className={classNames('rebus-page true-background--3', {
          'rebus-page--active': !answerFound,
        })}>
          <img src={TrueLogo} alt="TrueLogo" className="rebus-page__logo"/>
          <div className="rebus-wrapper">
            <div className="rebus-page__rebus">
              <div className="rebus-page__rebus-text">{rebus.concat("")}</div>
              {rebusError && (
                <div className="rebus-page__rebus-error">
                  Неправильная последовательность
                </div>
              )}
            </div>
            <table>
              <tbody>
              {emojiRows.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {row.map((emoji) => (
                    <td key={emoji}>
                      <button
                        className="emoji_button"
                        onClick={() => onEmojiClick(emoji)}
                        disabled={rebus.length === 4 || rebusFound}
                      >
                        {emoji}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
              </tbody>
            </table>
            <div>
              <input
                value={answer}
                onChange={onAnswerInput}
                disabled={!rebusFound || answerFound}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RebusPage;
