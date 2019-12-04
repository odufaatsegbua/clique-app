import React from "react";

function NoMatch() {
  return (
    <div className="conainer">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron">
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
            <h2>Sorry Darling! The page you're looking for is under construction!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;