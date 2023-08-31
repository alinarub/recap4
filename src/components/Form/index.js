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
      <h2 className="form__header">Add Activity:</h2>
      <div className="form__row">
        <label className="form__label" htmlFor="name">
          Name of Activity:{" "}
        </label>
        <input
          className="form__input-text"
          name="name"
          id="name"
          type="text"
        ></input>
      </div>
      <div className="form__row">
        <label className="form__label" htmlFor="isForGoodWeather">
          Good weather activity:{" "}
        </label>
        <input
          className="form__input-checkbox"
          id="isForGoodWeather"
          name="isForGoodWeather"
          type="checkbox"
        ></input>
      </div>
      <div className="form__row--button">
        <button className="form__button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
