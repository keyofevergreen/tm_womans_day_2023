import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [rebusFound, setRebusFound] = useState(true);
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
      }, 1000);
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

  return (
    <div>
      <h1>Rebus Page</h1>
      <div>{rebus.concat("")}</div>
      {rebusError && <div>Wrong emoji sequence</div>}
      <table>
        <tbody>
          {emojiRows.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((emoji) => (
                <td key={emoji}>
                  <button
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
  );
};

export default RebusPage;
