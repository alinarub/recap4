import "./App.css";
import { Form } from "./components/Form/index";
import { List } from "./components/List/index";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities((previousActivities) => [...previousActivities, newActivity]);
    // console.log(newActivity);
  }

  const isGoodWeather = true;

  const filterActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );
  console.log(filterActivities);

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <h3>
        {isGoodWeather
          ? "The weather is awesome! Go outside and: "
          : "Bad weather outside! There is nothing fun to do. "}
      </h3>
      <List activities={filterActivities} />
    </>
  );
}

export default App;
