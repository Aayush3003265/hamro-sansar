import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";
import { useEffect, useState } from "react";
import ButtonBack from "./ButtonBack";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams(); // get the id from the url
  const [currentCity, setCurrentCity] = useState({});
  const [searchParams, setsearchParams] = useSearchParams();
  let lat = searchParams.get("lat");
  let lng = searchParams.get("lan");
  let name = searchParams.get("name");

  useEffect(() => {
    async function getCityInfo(id) {
      try {
        const response = await fetch(`http://localhost:8080/cities/${id}`);
        const data = await response.json();
        // console.log(data, "responce from is");
        setCurrentCity(data);
      } catch (error) {
        console.error(error);
      }
    }
    getCityInfo(id);
  }, []);
  // TEMP DATA
  // const currentCity = {
  //   cityName: "Lisbon",
  //   emoji: "🇵🇹",
  //   date: "2027-10-31T15:59:59.138Z",
  //   notes: "My favorite city so far!",
  // };

  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer">
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <ButtonBack />
      </div>
    </div>
  );
}

export default City;
