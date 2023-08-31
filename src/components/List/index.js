import "./List.css";

export function List({ activities, onDeleteActivity }) {
  return (
    <ul className="list__item-ul">
      {activities.map(({ id, name }) => (
        <li className="list__item" key={id}>
          {name}
          <button
            className="delete-button"
            onClick={() => onDeleteActivity(id)}
          >
            &#x2717;
          </button>
        </li>
      ))}
    </ul>
  );
}
