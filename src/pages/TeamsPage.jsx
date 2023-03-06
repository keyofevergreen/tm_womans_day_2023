import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import classNames from "classnames";

const armenianGirls = ["Александра Горбай", "Анна Фролова"];

const ulyanovskGirls = [
  "Альбина Мухаметова",
  "Ася Ершова",
  "Евгения Сваева",
  "Екатерина Горлова",
  "Екатерина Калмыкова",
  "Ирина Аввакумова",
  "Ирина Давыдова",
  "Марина Лаврова",
  "Марьям Гаинеева",
];

const allGirls = [...armenianGirls, ...ulyanovskGirls].sort();

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);
  const [buttonCounter, setButtonCounter] = useState(0)

  function generateTeams() {
    const result = [[...armenianGirls]];
    const remainingGirls = [...ulyanovskGirls];
    while (remainingGirls.length) {
      result.push(generateTeam(remainingGirls));
    }
    setTeams(result);
  }

  function generateTeam(remainingGirls) {
    const newTeam = [];
    for (let i = 0; i < 3; i++) {
      const girlIndex = Math.floor(Math.random() * remainingGirls.length);
      const randomGirl = remainingGirls[girlIndex];
      remainingGirls.splice(girlIndex, 1);
      newTeam.push(randomGirl);
    }
    return newTeam;
  }

  const onClick = () => {
    if(buttonCounter === 8) {
      generateTeams()
    } else {
      setButtonCounter(buttonCounter + 1);
    }
  }

  const buttonText = () => {
    switch(buttonCounter) {
      case 0: {
        return 'Нажмите сюда';
      }
      case 1: {
        return 'Готовы?'
      }
      case 2: {
        return 'Точно?'
      }
      case 3: {
        return 'Собрать команды!'
      }
      case 4: {
        return "Это была джокушка ловушкера"
      }
      case 5: {
        return 'Девочки, я вчера на стриме Максима в дисе увидела кое-что'
      }
      case 6: {
        return 'А я у Влада увидела!'
      }
      case 7: {
        return 'Здесь могла быть ваша реклама'
      }
      default: {
        return 'Собрать команды!'
      }
    }
  }

  return (
    <div className="teams-page true-background--2">
      {!teams.length ? (
        <div className="teams-page__remaining">
          <div className='girls-list'>
            <h2>Девушки</h2>
            {allGirls.map((girl) => (
              <div className="teams-page__remaining-item" key={girl}>
                {girl}
              </div>
            ))}
          </div>
            <div className="teams-page__button-container">
              <div>
                <button
                  className={classNames('teams-page__button', {
                    'teams-page__button--fuck-position--1': buttonCounter === 5,
                    'teams-page__button--fuck-position--2': buttonCounter === 6,
                    'teams-page__button--fuck-position--3': buttonCounter === 7,
                  })}
                  onClick={onClick}
                >
                  {buttonText()}
                </button>
              </div>
            </div>
        </div>
      ) : (
        <div className="teams-page__teams">
            <h2>Группы</h2>
            {teams?.map((team, idx) => (
              <div className="teams-page__teams-list-item" key={idx}>
                <h3>Группа {idx + 1}</h3>
                <div>
                  {team.map((girl, idx) => (
                    <span key={idx + girl}>
                      {girl}
                      {idx < team.length - 1 && ", "}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          <div className="teams-page__button-container">
            <Link to="/rebus">
              <button className="teams-page__button">Далее</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamsPage;
