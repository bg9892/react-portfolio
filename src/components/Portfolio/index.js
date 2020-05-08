import React from "react";
import "../Portfolio/style.css";

function Portfolio() {
  return (
    <div id="main-container" class="container">
      <div class="row">


        <div class="col-md-3 mx-2 mb-2">
          <div class="card">
            <img class="card-img-top" src={process.env.PUBLIC_URL + "/Assets/Images/ScreenShot.png"} alt="Password Generator" />
            <div class="card-body">
              <h5 class="card-title">Password Generator</h5>
              <p class="card-text">Written in javascript, this app generates a random password based off the criteria selected.</p>
              <a href="https://github.com/bg9892/password-generator" target="#" class="btn btn-primary">Github Repository</a>
              <a href="https://bg9892.github.io/password-generator/" target="#" class="btn btn-primary ml-3" id="live">Live</a>
            </div>
          </div>
        </div>


        <div class="col-md-3 mx-2 mb-2">
          <div class="card">
            <img class="card-img-top" src={process.env.PUBLIC_URL + "/Assets/Images/burger.png"} alt="Eat-Da-Burger" />
            <div class="card-body">
              <h5 class="card-title">Eat-Da-Burger</h5>
              <p class="card-text">Add your favorite burgers to the to be eaten list for later. Then devour them!</p>
              <a href="https://github.com/bg9892/bootcamp-h10" target="#" class="btn btn-primary">Github Repository</a>
              <a href="https://sheltered-oasis-27359.herokuapp.com/" target="#" class="btn btn-primary ml-3" id="live">Live</a>
            </div>
          </div>
        </div>


        <div class="col-md-3 mx-2 mb-2">
          <div class="card">
            <img class="card-img-top" src={process.env.PUBLIC_URL + "/Assets/Images/Novel-19.png"} alt="Novel-19" />
            <div class="card-body">
              <h5 class="card-title">Novel-19</h5>
              <p class="card-text">Assist users in being aware of their surroundings and flattening the curve of the coronavirus.</p>
              <a href="https://github.com/garrettmroberts/novel-19" target="#" class="btn btn-primary">Github Repository</a>
              <a href="https://novel-19.herokuapp.com/home" target="#" class="btn btn-primary ml-3" id="live">Live</a>
            </div>
          </div>
        </div>


        <div class="col-md-3 mx-2">
          <div class="card">
            <img class="card-img-top" src={process.env.PUBLIC_URL + "/Assets/Images/Budget-Tracker.png"} alt="Budget" />
            <div class="card-body">
              <h5 class="card-title">Budget Tracker</h5>
              <p class="card-text">A budget tracking app where you can add or subtract an item, dollar amount, and track on a graph.</p>
              <a href="https://github.com/bg9892/bootcamp-h12" target="#" class="btn btn-primary">Github Repository</a>
              <a href="https://glacial-brook-48506.herokuapp.com/" target="#" class="btn btn-primary ml-3" id="live">Live</a>
            </div>
          </div>
        </div>


        <div class="col-md-3 mx-2">
          <div class="card">
            <img class="card-img-top" src={process.env.PUBLIC_URL + "/Assets/Images/chat.png"} alt="Fireside" />
            <div class="card-body">
              <h5 class="card-title">Fireside</h5>
              <p class="card-text">Fireside is a real time chat application for when you and those around you need to have a fireside chat.</p>
              <a href="https://github.com/bg9892/Fireside" target="#" class="btn btn-primary">Github Repository</a>
              <a href="https://powerful-crag-10383.herokuapp.com/" target="#" class="btn btn-primary ml-3" id="live">Live</a>
            </div>
          </div>
        </div>


        <div class="col-md-3 mx-2">
          <div class="card">
            <img class="card-img-top" id="novel" src="https://via.placeholder.com/200x200" alt="Novel-19" />
            <div class="card-body">
              <h5 class="card-title">Comming soon</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesquefelis arcu, maximus vel urna sed.</p>
              <a href="https://bg9892.github.io/" target="#" class="btn btn-primary">Github Repository</a>
              <a href="https://bg9892.github.io/" target="#" class="btn btn-primary ml-3" id="live">Live</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
