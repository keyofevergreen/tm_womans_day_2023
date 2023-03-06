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
  const [remainingGirls, setRemainingGirls] = useState(allGirls);
  const [teams, setTeams] = useState(null);
  const [armenianSelected, setArmenianSelected] = useState(false);

  function generateTeam() {
    if (!armenianSelected) {
      setTeams([[...armenianGirls]]);
      setRemainingGirls((prevState) =>
        prevState.filter((item) => !armenianGirls.includes(item))
      );
      setArmenianSelected(true);
    } else {
      const newTeam = [];
      const remainingGirlsCache = [...remainingGirls];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(
          Math.random() * remainingGirlsCache.length
        );
        const randomGirl = remainingGirlsCache[randomIndex];
        remainingGirlsCache.splice(randomIndex, 1);
        newTeam.push(randomGirl);
      }
      setTeams((prevState) => [...prevState, newTeam]);
      setRemainingGirls([...remainingGirlsCache]);
    }
  }

  return (
    <div className="teams-page">
      <div className="teams-page__remaining">
        <div className="teams-page__title">Девушки</div>
        {remainingGirls.map((girl) => (
          <div className="teams-page__remaining-item" key={girl}>
            {girl}
          </div>
        ))}
      </div>

      <div className="teams-page__teams">
        <div>
          <div className="teams-page__title">Группы</div>
          {teams?.map((team, idx) => (
            <div className="teams-page__teams-list-item" key={idx}>
              <span>Группа {idx + 1}</span>
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
        <div className="teams-page__teams-buttons">
          <button
            className="teams-page__teams-button"
            onClick={generateTeam}
            disabled={!remainingGirls.length}
          >
            Собрать
          </button>
          {!remainingGirls.length && (
            <Link to="/rebus">
              <button className="teams-page__teams-button">Далее</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;
