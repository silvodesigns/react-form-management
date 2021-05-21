import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form>
        <label htmlFor="nameInput">Name</label>
        <input maxLength="20" id="nameInput" name="name" type="text" />
        <br />

        <label htmlFor="God">God</label>
        <select id="God">
          <option value="1">Jesus</option>
          <option value="2">Father</option>
          <option value="3">Holy Spirit</option>
        </select>
        <br />

        <label htmlFor="answer">Do you love him ?</label>
        <input type="checkbox" id="answer" name="Do you love him?" />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}
