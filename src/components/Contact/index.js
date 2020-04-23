import React from "react";

function Contact() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-8 bg-light py-3  mb-5 px-5">
          <h1>Contact</h1>
          <hr class="my-4" />
          <form>
            <div class="form-group">
              <label for="formGroupName">Name</label>
              <input type="text" class="form-control" id="formGroupName" placeholder="Type your name here" />
            </div>
            <div class="form-group">
              <label for="formGroupEmail">Email</label>
              <input type="text" class="form-control" id="formGroupEmail" placeholder="Type your email here" />
            </div>
            <div class="form-group">
              <label for="formGroupMessage">Message</label>
              <textarea class="form-control" id="formGroupMessage" placeholder="Type your message here" rows="6"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
