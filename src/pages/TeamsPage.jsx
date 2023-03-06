import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Teams Page</h1>
      <h2>Remaining</h2>
      {remainingGirls.map((girl) => (
        <div key={girl}>{girl}</div>
      ))}
      <h2>Teams</h2>
      {teams?.map((team, idx) => (
        <div key={idx}>
          <h3>Team {idx + 1}</h3>
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
      <br></br>
      <button onClick={generateTeam} disabled={!remainingGirls.length}>
        Generate team
      </button>
      <br></br>
      {!remainingGirls.length && (
        <Link to="/rebus">
          <button>Next</button>
        </Link>
      )}
    </div>
  );
};

export default TeamsPage;
