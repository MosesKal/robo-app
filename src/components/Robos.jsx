import { useState, useEffect, useCallback } from "react";
import Card from "./Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const TAB = [1,2,3,4,5,6,7,8,9,10];

function Robos() {
  const [data, setDate] = useState(null);
  const [champ, setChamp] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setDate(data);
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
        {data
          ? filteredData &&
            filteredData.map(({ name, id, email }) => (
              <Card name={name} key={id} adresse={email} />
            ))
          : 
            TAB.map((element) => (
              <Card  key={element}/>
            ))}
      </div>
    </div>
  );
}

export default Robos;
