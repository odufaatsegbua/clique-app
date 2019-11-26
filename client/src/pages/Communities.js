import React from "react";
export default class Communities extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div className="header-container">
            <ul className="nav justifyContentCenter" id="navList">
              <li className="navItem">
                <a className="navLink" href="dashboard.html">
                  Dashboard
                </a>
              </li>
              <li className="navItem">
                <a className="navLink" href="community.html">
                  Communities
                </a>
              </li>
              <li className="navItem">
                <a className="navLink" href="">
                  Get Connected
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <section>
          <h1>Discover a community for you</h1>

          <form action="/action_page.php">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                name="search"
              />
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </form>
        </section>

        <div className="row">
          <div className="column">
            <div className="content">
              <a href="messages.html">
                <img
                  src="../src/images/motherhood.jpg"
                  alt="momtherhood"
                  style={{width:"100%"}}
                />
              </a>
              <h4>Motherhood</h4>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <a href="careermessages.html">
                <img
                  src="../src/images/career.jpg"
                  alt="career"
                  style={{width:"100%"}}
                />
              </a>
              <h4>Career</h4>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <a href="relationships.html">
                <img
                  src="../src/images/relationships.jpg"
                  alt="relationships"
                  style={{width:"100%"}}
                />
              </a>
              <h4>Relationships</h4>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <a href="selflove.html">
                <img
                  src="../src/images/selflove.jpg"
                  alt="selflove"
                  style={{width:"100%"}}
                />
              </a>
              <h4>Self Love</h4>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <a href="nutritionfitness.html">
                <img
                  src="../src/images/food.jpg"
                  alt="nutritionfitness"
                  style={{width:"100%"}}
                />
              </a>
              <h4>Nutrition & Fitness</h4>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <a href="mentalhealth.html">
                <img
                  src="../src/images/mentalhealth.jpg"
                  alt="mentalhealth"
                  style={{width:"100%"}}
                />
              </a>
              <h4>Mental Health</h4>
            </div>
          </div>
        </div>

        <section>
          <footer>
            <ul>
              <a href="cliqueinfo.html">
                <li>About Us</li>
              </a>
              <a href="">
                <li>Contact</li>
              </a>
              <a href="cliqueFAQ.html">
                <li>FAQ</li>
              </a>
              <a href="cliqueguidelines.html">
                <li>Community Guidelines</li>
              </a>
              <a href="">
                <li>Legal</li>
              </a>
            </ul>
            <p>Copyright &copy; Clique</p>
          </footer>
        </section>
      </div>
    );
  }
}

