import { uid } from "uid";

export function List({ activities }) {
  return (
    <ul>
      {activities.map((activity) => {
        return <li key={uid()}>{activity.name}</li>;
      })}
    </ul>
  );
}
