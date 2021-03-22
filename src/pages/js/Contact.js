import React from "react";

function Contact() {
    return (
        <div className="container">
            <h1>Contact</h1>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Name</label>
    </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Email Address</label>
    </div>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Message</label>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit">
  </div>
                </div>
            </div>
    )
}

export default Contact