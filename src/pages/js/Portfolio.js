import React from "react";

function Portfolio() {
    return(
        <div className="container" style={{margin: "5%"}}>
    <div className="row">
      <div className="col-7">
        <div className="row">
          <h1>Portfolio</h1>
          <h2>Bronwen Nicholson</h2>
          <p1>Email: bnicholson091@gmail.com</p1>
          <p2>Phone: 416-209-9639</p2>
          <p3>GitHub: <a href="https://github.com/bnicholson87">https://github.com/bnicholson87</a></p3>
          <p4>LinkedIn: <a
              href="https://www.linkedin.com/in/bronwen-nicholson-a9888824/">https://www.linkedin.com/in/bronwen-nicholson-a9888824/</a>
          </p4>
          <p5>And you can check out the latest version of my resume <a
              href="Assets/Bronwen's Résumé (Version 3).pdf">here</a></p5>
        </div>
        <br />
        <br />
        <h2 id="featuredWork">Featured Work</h2>
        <br />
        <div className="row">
          <div className="col-md-6 column1">
            <div className="card" style={{width: "18rem"}}>
              <img src="Assets/CodingQuizScreenshot.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text" id="cardText"><a href="https://bnicholson87.github.io/CodingQuiz/">Coding Quiz</a>
                </p>
                <p>Deployed app <a href="https://github.com/bnicholson87/CodingQuiz.git">here</a></p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="col-md-6 column2">
          <div className="card" style={{width: "18rem"}}>
            <img src="Assets/DayPlannerScreenshot.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text" id="cardText"><a href="https://bnicholson87.github.io/DayPlanner/">Day Planner</a>
              </p>
              <p>Deployed app <a href="https://github.com/bnicholson87/DayPlanner.git">here</a></p>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6 column3">
            <div className="card" style={{width: "18rem"}}>
              <img src="Assets/WeatherDashboard.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text" id="cardText"><a href="https://bnicholson87.github.io/WeatherDashboard/">Weather
                    Dashboard</a></p>
                <p>Deployed app <a href="https://github.com/bnicholson87/WeatherDashboard.git">here</a></p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6 column3">
            <div className="card" style={{width: "18rem"}}>
              <img src="Assets/BurgerScreenshot.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text" id="cardText"><a href="https://bnicholson87.github.io/Burger/">Burger</a></p>
                <p>Deployed app <a href="https://github.com/bnicholson87/burger.git">here</a></p>
                <p>Heroku link <a href="https://buger-bn.herokuapp.com/">here</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Portfolio;