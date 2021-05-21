import "./styles.css";
import { useState } from "react";

export default function App() {
  const [fname, setFname] = useState("");
  const [god, setGod] = useState("");
  const [isLoved, setIsLoved] = useState(false);

  return (
    <div className="App">
      <h1>My name is: {fname || "..."}</h1>
      <h1>My God is: {god || "...."}</h1>
      <h1>And do I love him?: {isLoved || "Yes"}</h1>

      <form>
        <label htmlFor="nameInput">Name</label>
        <input
          maxLength="20"
          id="nameInput"
          name="name"
          type="text"
          onChange={(event) => {
            setFname(event.target.value);
          }}
        />
        <br />

        <label htmlFor="God">God</label>
        <select
          id="God"
          onChange={(event) => {
            const new_value = event.target.value;
            const possible = ["Jesus", "Father", "Holy Spirit"];
            setGod(possible[new_value - 1]);
          }}
        >
          <option value="1">Jesus</option>
          <option value="2">Father</option>
          <option value="3">Holy Spirit</option>
        </select>
        <br />

        <label htmlFor="answer">Do you love him ?</label>
        <input
          type="checkbox"
          id="answer"
          name="Do you love him?"
          onChange={(event) => {
            setIsLoved(event.target.checked);
          }}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}
