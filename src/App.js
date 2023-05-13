import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Erics ToDo List</h1>
      <h2>Lägg till en film</h2>
      <hr></hr>

      <p>Titel:</p>
      <input type ="text" placeholder = "Lägg till titel"></input>

      <p>Betyg:</p>
      <select id="betyg-menu">
        <option value="option0">Välj ett betyg</option>
        <option value="option1">1 stjärna</option>
        <option value="option2">2 stjärna</option>
        <option value="option3">3 stjärna</option>
        <option value="option4">4 stjärna</option>
        <option value="option5">5 stjärna</option>
      </select>

      <br></br>
      <button>Adda din film!</button>

    </div>
  );
}

export default App;
