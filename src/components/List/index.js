export function List({ activities, onDeleteActivity }) {
  return (
    <ul>
      {activities.map(({ id, name }) => (
        <li key={id}>
          {name}
          <button onClick={() => onDeleteActivity(id)}>&#x2717;</button>
        </li>
      ))}
    </ul>
  );
}
