import "./Form.css";
import { uid } from "uid";

export function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formElement = form.elements;

    const data = {
      name: formElement.name.value,
      isForGoodWeather: formElement.isForGoodWeather.checked,
      id: uid(),
    };
    onAddActivity(data);

    form.reset();
    formElement.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form--headline">Add Activity:</h1>
      <div>
        <label className="form--label" htmlFor="name">
          Name of Activity:{" "}
        </label>
        <input
          className="form--input"
          name="name"
          id="name"
          type="text"
        ></input>
      </div>
      <div>
        <label className="form--label" htmlFor="isForGoodWeather">
          Good weather activity:{" "}
        </label>
        <input
          className="form--input"
          id="isForGoodWeather"
          name="isForGoodWeather"
          type="checkbox"
        ></input>
      </div>
      <button className="form--button" type="submit">
        Submit
      </button>
    </form>
  );
}
