import "./App.css";
import { Form } from "./components/Form/index";
import { List } from "./components/List/index";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState(null);
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather/europe"
        );
        if (response.ok) {
          const data = await response.json();

          setWeather(data);
        } else {
          console.error("Failed!!");
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchWeather();
    const timer = setInterval(fetchWeather, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  function handleAddActivity(newActivity) {
    setActivities((previousActivities) => [...previousActivities, newActivity]);
  }

  const isGoodWeather = weather?.isGoodWeather ?? false;

  const filterActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <>
      {/* <div>
        <h1>
          <span>{weather.condition}</span>
          <span>{weather.temperature}&nbsp;&#8451;</span>
        </h1>
      </div> */}
      <Form onAddActivity={handleAddActivity} />

      <h4>
        {isGoodWeather
          ? "The weather is awesome! Go outside and: "
          : "Bad weather outside! There is nothing fun to do. "}
      </h4>
      <List activities={filterActivities} />
    </>
  );
}

export default App;
