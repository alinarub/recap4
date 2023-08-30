import "./App.css";
import { Form } from "./components/Form/index";
import { uid } from "uid";
import { List } from "./components/List/index";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([{ ...newActivity, id: uid() }, ...activities]);
    console.log("newActivity:", newActivity);
  }
  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </>
  );
}

export default App;
