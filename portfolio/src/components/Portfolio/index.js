import React from "react";
import "../Portfolio/style.css";

// function Portfolio() {
//   return (
//     <div id="main-container" class="container">
//       <div class="row">
//         <div class="col-md-12 bg-light py-3  mb-5 px-5 rounded">
//           <h1>Portfolio</h1>
//           <hr class="my-4" />
//           <div class="row">
//             <a class="col-md-4" href="https://bg9892.github.io/bootcamp-h3/"><img class="imgProj img-thumbnail float-left mr-4 mb-2" src="Assets/Images/ScreenShot.png" alt="profile picture" /></a>
//             <a class="col-md-4" href="https://sheltered-oasis-27359.herokuapp.com/"><img class="imgProj img-thumbnail float-left mr-4 mb-2" src="Assets/Images/burger.png" alt="burger" /></a>
//             {/* <a class="col-md-4" href="#"><img class="img img-thumbnail float-left mr-4 mb-2" src="https://via.placeholder.com/200x200" alt="profile picture" /></a>
//             <a class="col-md-4" href="#"><img class="img img-thumbnail float-left mr-4 mb-2" src="https://via.placeholder.com/200x200" alt="profile picture" /></a>
//             <a class="col-md-4" href="#"><img class="img img-thumbnail float-left mr-4 mb-2" src="https://via.placeholder.com/200x200" alt="profile picture" /></a> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


function Portfolio() {
  return (
    <div id="main-container" class="container">
      <div class="row">


        <div class="col-md-3 mx-2 mb-2">
          <div class="card">
            <img class="card-img-top" src="Assets/Images/ScreenShot.png" alt="Password Generator" />
            <div class="card-body">
              <h5 class="card-title">Password Generator</h5>
              <p class="card-text">Written in javascript, this app generates a random password based off the criteria selected.</p>
              <a href="https://github.com/bg9892/bootcamp-h3" target="#" class="btn btn-primary">Github Repository</a>
              <a href="https://bg9892.github.io/bootcamp-h3/" target="#" class="btn btn-primary ml-3" id="live">Live</a>
            </div>
          </div>
        </div>


        <div class="col-md-3 mx-2 mb-2">
          <div class="card">
            <img class="card-img-top" id="burger" src="Assets/Images/burger.png" alt="Eat-Da-Burger" />
            <div class="card-body">
              <h5 class="card-title">Eat-Da-Burger</h5>
              <p class="card-text">Written in javascript, this app generates a random password based off the criteria selected.</p>
              <a href="https://github.com/bg9892/bootcamp-h10" target="#" class="btn btn-primary">Github Repository</a>
              <a href="https://sheltered-oasis-27359.herokuapp.com/" target="#" class="btn btn-primary ml-3" id="live">Live</a>
            </div>
          </div>
        </div>


        <div class="col-md-3 mx-2 mb-2">
          <div class="card">
            <img class="card-img-top" id="novel" src="Assets/Images/Novel-19.png" alt="Novel-19" />
            <div class="card-body">
              <h5 class="card-title">Password Generator</h5>
              <p class="card-text">Written in javascript, this app generates a random password based off the criteria selected.</p>
              <a href="https://github.com/garrettmroberts/novel-19" target="#" class="btn btn-primary">Github Repository</a>
              <a href="https://novel-19.herokuapp.com/home" target="#" class="btn btn-primary ml-3" id="live">Live</a>
            </div>
          </div>
        </div>


        <div class="col-md-3 mx-2">
          <div class="card">
            <img class="card-img-top" id="novel" src="Assets/Images/Novel-19.png" alt="Novel-19" />
            <div class="card-body">
              <h5 class="card-title">Password Generator</h5>
              <p class="card-text">Written in javascript, this app generates a random password based off the criteria selected.</p>
              <a href="https://github.com/bg9892/bootcamp-h12" target="#" class="btn btn-primary">Github Repository</a>
              <a href="https://glacial-brook-48506.herokuapp.com/" target="#" class="btn btn-primary ml-3" id="live">Live</a>
            </div>
          </div>
        </div>


        <div class="col-md-3 mx-2">
          <div class="card">
            <img class="card-img-top" id="novel" src="Assets/Images/Novel-19.png" alt="Novel-19" />
            <div class="card-body">
              <h5 class="card-title">Password Generator</h5>
              <p class="card-text">Written in javascript, this app generates a random password based off the criteria selected.</p>
              <a href="https://github.com/bg9892/bootcamp-h12" target="#" class="btn btn-primary">Github Repository</a>
              <a href="https://glacial-brook-48506.herokuapp.com/" target="#" class="btn btn-primary ml-3" id="live">Live</a>
            </div>
          </div>
        </div>


        <div class="col-md-3 mx-2">
          <div class="card">
            <img class="card-img-top" id="novel" src="Assets/Images/Novel-19.png" alt="Novel-19" />
            <div class="card-body">
              <h5 class="card-title">Password Generator</h5>
              <p class="card-text">Written in javascript, this app generates a random password based off the criteria selected.</p>
              <a href="https://github.com/bg9892/bootcamp-h12" target="#" class="btn btn-primary">Github Repository</a>
              <a href="https://glacial-brook-48506.herokuapp.com/" target="#" class="btn btn-primary ml-3" id="live">Live</a>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Portfolio;
