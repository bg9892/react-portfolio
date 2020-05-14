import React from "react";
import "./style.css";

function Section() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-8 bg-light py-3  mb-5 px-5 rounded">
          <h1>About Me</h1>
          <hr class="my-4" />
          <img class="img img-thumbnail float-left mr-4 mb-2" src={process.env.PUBLIC_URL + "/Assets/Images/IMG_PROFILE.jpeg"}
            alt="profile" width="200" height="200" />
          <p class="text-left">
            I’m from Nashville Tennessee, I went to Tennessee College of Applied Technology in 2013 majoring in
            mechatronics and industrial automation. I started learning .net and made a few small apps
            in C# and Visual Basic. I decided I wanted a career in the web development field. I am a graduate from Vanderbilt University's full stack web development bootcamp and proficient in HTML5, CSS3,
            Javascript, jQuery, Bootstrap, API's, Node.js, MongoDB, mySQL, AJAX, Express, React.js, GIT, GitHub, and Heroku.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section;
