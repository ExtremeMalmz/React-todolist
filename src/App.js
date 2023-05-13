//import React, {useState} from 'react';
import './App.css';

function App() {
  //this is where the REAL JS code is
  
  //checks if input is correct
  function check_if_input_is_correct(){
    //movie title from the input
    var movieTitle = document.getElementById("inputTitle").value;
    //movie score from the drop down list
    var movieScore = document.getElementById("betyg-menu").value;
    
    //if you want to print the inputs
    //console.log(movieTitle);
    //console.log(movieScore);

    //if title is empty or moviescore is option0 then inputs are wrong
    if(movieTitle === "" || movieScore === "option0"){
      return false;
    }
    //if all is right then we do this
    else if (movieTitle !== "" && movieScore !== "option0"){
      return true;
    }
    //double checking with an else
    else{
      return false;
    }
  }

  //adds an item
  function addItem(){
    var areInputsValid = check_if_input_is_correct();

    if(areInputsValid){
      console.log("we gon add em");
    }
    else if(!areInputsValid){
      console.log("yell at the user");
    }
    else{
      console.log("How did we end up here?")
    }
  }

  //this the HTML 
  return (
    <div className="App">
      <h1>Erics ToDo List</h1>
      <h2>Lägg till en film</h2>
      <hr></hr>

      <p>Titel:</p>
      <input type ="text" placeholder = "Lägg till titel" id = "inputTitle"></input>

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
      <button onClick={doThisStuff => addItem()}>Adda din film!</button>

      <ul></ul>
    </div>
  );
}

export default App;
