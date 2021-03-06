import React from "react";
import "./style.css";


function Footer() {
  return (
    <footer class="bg-dark mt-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a href="https://github.com/bg9892" target="_blank" class="text-light nav-link">
                  <span class="fa fa-github fa-2x"></span>
                </a>
              </li>
              <li class="nav-item">
                <a href="https://www.linkedin.com/in/bradley-goff-021554197" target="_blank" class="text-light nav-link"> 
                  <span class="fa fa-linkedin fa-2x"></span>
                </a>
              </li>
              <li class="nav-item">
                <a href="mailto:bg9892@gmail.com" class="text-light nav-link">
                  <span class="fa fa-envelope-o fa-2x"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center text-light">
            <p>Copyright Bradley Goff © 2020. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
