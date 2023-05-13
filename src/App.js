import React, {useState} from 'react';
import deleteImage from './images/delete.png';
import starImage from './images/star.png';
import './App.css';


function App() {
  //create the movie list array 
  const[movies, setMovies] = useState([]);

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

  //adds the movie to the movieList
  function addToMovieToMoveList(){
    var movieTitle = document.getElementById("inputTitle").value;
    var movieScore = document.getElementById("betyg-menu").value;

    //write down movieScore score (number like 1) and then make it an image which repeats that number
    var movieScoreImg = Array.from({ length: movieScore }, (_, index) => (
      <img key = {index} src={starImage} alt="Movie Score Star" />
    ));

    const movie = {
      id: Math.floor(Math.random() * 1000000000),
      title: movieTitle,
      scoreNum: movieScore,
      scoreImg: movieScoreImg,
    }

    setMovies(movies => [...movies,movie]);

    //console.log("prints out whats in the movies array");
    //console.log(movies);
  }

  //adds an item
  function addItem(){
    var areInputsValid = check_if_input_is_correct();

    if(areInputsValid){
      addToMovieToMoveList();

      //reset the form
      document.getElementById("inputTitle").value = "";
      document.getElementById("betyg-menu").selectedIndex = 0;
    }
    else if(!areInputsValid){
      alert("The inputs are not correct!");
    }
    else{
      console.log("How did we end up here?")
    }
  }

  function deleteMovie(movieId){
    //checks the list
    const newMovieArray = movies.filter(movie => movie.id !== movieId);
    //console.log(newMovieArray);
    setMovies(newMovieArray);
  }

  function sortAlphabetically(){
    //sorts by the titles alphabetically A-Z 

    //console.log("SORTING ALPHABETICALLY!")
    //console.log(movies)

    const sortedMovies = [...movies].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  setMovies(sortedMovies);
  }

  function sortByRanking(){
    //sorts by the movie score

    const sortedMovies = [...movies].sort((a, b) =>
    a.scoreNum.localeCompare(b.scoreNum)
  );
  setMovies(sortedMovies);
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
        <option value="1">1 stjärna</option>
        <option value="2">2 stjärna</option>
        <option value="3">3 stjärna</option>
        <option value="4">4 stjärna</option>
        <option value="5">5 stjärna</option>
      </select>

      <br></br>
      <button onClick={doThisStuff => addItem()}>Adda din film!</button>

      <ul>
        {movies.map(movie => {
          return(
            <li key ={movie.id}>{movie.title}  {movie.scoreImg} <img src = {deleteImage} alt = "delete img" onClick={doThisStuffAswell => deleteMovie(movie.id)}></img></li>
            )
        })}
      </ul>

      <button onClick={doThisStuffAswell2 => sortAlphabetically()}>Alfabetiskt Ordning</button>
      <button onClick={doThisStuffAswell => sortByRanking()}>Betygs Ordning</button>

    </div>
  );
}

export default App;
