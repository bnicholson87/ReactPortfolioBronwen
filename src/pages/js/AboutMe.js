import React from "react";

function AboutMe() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <h1>About Me</h1>
                    <img className="img-thumbnail float-start"
                        src="data:image/jpeg;base64,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" />
                    <p>
                        My name is Bronwen, and I am currently enrolled in U of T's School of Continuing Education Coding Bootcamp
                        program.
                        Much of my work has been in administration and customer service, but I decided to take this course so that I
                        could upgrade
                        my skills. I have a strong desire to help others, particularly those with disabilities like myself, and I hope
                        to find a job in
                        the future that will enable me to do so. When I am not at work or school, I enjoy singing in choir, pet-sitting,
                        and spending
                        time with family and friends.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;