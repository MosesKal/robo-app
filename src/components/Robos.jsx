import { useState, useEffect, useCallback } from "react";
import Card from "./Card";
import RobotModal from "./RobotModal";
import "bootstrap/dist/css/bootstrap.min.css";

function Robos() {
  const [data, setData] = useState(null);
  const [champ, setChamp] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = useCallback(
    (event) => {
      const value = event.target.value;
      setChamp(value);

      if (value.length >= 3) {
        setFilteredData(
          data.filter((robo) => robo.name.startsWith(value.substring(0, 3)))
        );
      } else {
        setFilteredData(data);
      }
    },
    [data]
  );

  const handleCardClick = useCallback((robo) => setSelectedRobot(robo), []);

  const handleCloseModal = useCallback(() => setSelectedRobot(null), []);

  return (
    <div className="robots-container">
      <div className="inputRecherche">
        <input
          type="text"
          placeholder="Recherche par nom"
          onChange={handleChange}
          value={champ}
        />
      </div>
      <div className="card-container">
        {data &&
          filteredData &&
          filteredData.map((robo) => (
            <div
              onClick={() => handleCardClick(robo)}
              key={robo.id}
              className="card-robo"
            >
              <Card name={robo.name} adresse={robo.email} robo={robo} />
            </div>
          ))}
      </div>
      {selectedRobot && (
        <RobotModal
          show={true}
          handleClose={handleCloseModal}
          robo={selectedRobot}
        />
      )}
    </div>
  );
}
export default Robos;
