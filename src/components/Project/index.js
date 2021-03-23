import React from "react";

function Project(props) {


    console.log(props);
    return(
        <div className="row">
          <div className="col-md-6 column1">
            <div className="card" style={{width: "18rem"}}>
              <img src={props.props[1]} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text" id="cardText"><a href={props.props[2]}>{props.props[0]}</a>
                </p>
                <p>Deployed app <a href={props.props[3]}>here</a></p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Project;