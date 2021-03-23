import React, { Component } from "react";
import CodingQuizScreenshot from "../Assets/CodingQuizScreenshot.png";
import DayPlannerScreenshot from "../Assets/DayPlannerScreenshot.png";
import WeatherDashboardScreenshot from "../Assets/WeatherDashboard.png";
import BurgerScreenshot from "../Assets/BurgerScreenshot.png";
import NoteTakerScreenshot from "../Assets/NoteTakerScreenshot.png";
import ProgressiveBudgetScreenshot from "../Assets/ProgressiveBudgetScreenshot.png";
import BronwensResume from "../Assets/Bronwen's Résumé (Version 3).pdf";
import Project from '../../components/Project/index';

class Portfolio extends Component {

  state = {
    quiz: ["Coding Quiz", CodingQuizScreenshot, "https://bnicholson87.github.io/CodingQuiz", "https://github.com/bnicholson87/CodingQuiz.git"],
    planner: ["Day Planner", DayPlannerScreenshot, "https://bnicholson87.github.io/DayPlanner/", "https://github.com/bnicholson87/DayPlanner.git"],
    weather: ["Weather Dashboard", WeatherDashboardScreenshot, "https://github.com/bnicholson87/WeatherDashboard.git", "https://github.com/bnicholson87/WeatherDashboard.git"],
    burger: ["Burger", BurgerScreenshot, "https://buger-bn.herokuapp.com/", "https://github.com/bnicholson87/burger.git"],
    notetaker: ["Note Taker", NoteTakerScreenshot, "https://notetakerbronwen.herokuapp.com/", "https://github.com/bnicholson87/NoteTaker.git"],
    progressivebudget: ["Progressive Budget", ProgressiveBudgetScreenshot, "https://progressivebudget-bn.herokuapp.com/", "https://github.com/bnicholson87/ProgressiveBudget.git"]
  }


  render() {
    return (
      <div className="container" style={{ margin: "5%" }}>
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
                href={BronwensResume}>here</a></p5>
            </div>
            <br />
            <br />
            <h2 id="featuredWork">Featured Work</h2>
            <br />
            <Project props={this.state.quiz} />
            <br />
            <Project props={this.state.planner} />
            <br />
            <Project props={this.state.weather} />
            <br />
            <Project props={this.state.burger} />
            <br />
            <Project props={this.state.notetaker} />
            <br />
            <Project props={this.state.progressivebudget} />
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;