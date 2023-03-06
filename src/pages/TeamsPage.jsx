import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

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

  return (
    <div className="teams-page">
      {!teams.length ? (
        <div className="teams-page__remaining">
          <div>
            <h2>Девушки</h2>
            {allGirls.map((girl) => (
              <div className="teams-page__remaining-item" key={girl}>
                {girl}
              </div>
            ))}
          </div>
          <div className="teams-page__button-container">
            <button className="teams-page__button" onClick={generateTeams}>
              Собрать
            </button>
          </div>
        </div>
      ) : (
        <div className="teams-page__teams">
          <div>
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
          </div>
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
