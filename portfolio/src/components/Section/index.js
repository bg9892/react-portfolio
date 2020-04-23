import React from "react";
import "./style.css";

function Section() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-8 bg-light py-3  mb-5 px-5 rounded">
          <h1>About Me</h1>
          <hr class="my-4" />
          <img class="img img-thumbnail float-left mr-4 mb-2" src="Assets/Images/IMG_PROFILE.jpeg"
            alt="profile picture" width="200" height="200" />
          <p class="text-left">
            I’m from Nashville Tennessee, I went to Tennessee College of Applied Technology in 2013 majoring in
            mechatronics and industrial automation. I started playing around with .net and made a few small apps
            in C# and Visual Basic. I decided I wanted a career in the web development field. I am currently enrolled
            in a full stack web development program at Vanderbilt Coding Bootcamp where we are learning HTML, CSS,
            Javascript, jQuery, API's, Node.js, MongoDB, Express, and React.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section;
