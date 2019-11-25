import React from 'react';
import './App.css';

const styles = {
  bgColor: {
    backgroundColor: "#f1f1f1"
  },
  bottomMargin: {
    marginBottom: "15px"
  },
  blue: {
    color: "dodgerblue"
  }
}

class App extends React.Component {
  state = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  passwordRepeat: "",
  show: false,
  show1: false
  }
  showModal = () => {
    this.setState({ show: true });
  };
  showModal1 = () => {
    this.setState({ show1: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  hideModal1 = () => {
    this.setState({ show1: false });
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  render(){
  return (
    <div>
      {/* onclick should be its own function outside of the return function */}
      <button onClick={this.showModal} id="btn1">Login</button>

      <div id="id01" className={this.state.show ? "modal display-block" : "modal display-none"}>
        <span onClick={this.hideModal}
          className="close" title="Close Modal">&times;</span>

        {/* all form inouts shoulf have handle input change code */}
        <form className="modal-content animate">
          <div className="imgcontainer">
            <img src="../src/images/logo_mini.png" alt="logo" className="avatar" />
          </div>

          <div className="container">
            <label for="uname"><b>Username</b></label>

            <input type="input" value={this.state.username} onChange={this.handleInputChange} placeholder="Enter Username" name="username" required />

            <label for="password"><b>Password</b></label>
            
            <input type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Enter Password" name="password" required />

            {/* onclick fucntion for submit */}
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" /> Remember me
      </label>
          </div>

          <div className="container" style={styles.bgColor}>
            <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </div>



      <button onClick={this.showModal1} id="btn2">Register</button>

      <div id="id02" className={this.state.show ? "modal display-block" : "modal display-none"}>
        <span onClick={this.hideModal} className="close" title="Close Modal">x</span>
        <form className="modal-content" >
          <div className="imgcontainer">
            <img src="../src/images/logo_mini.png" alt="logo" className="avatar" />
          </div>
          <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label for="frstname"><b>First Name</b></label>
            <input type="text" value={this.state.firstname} onChange={this.handleInputChange} placeholder="First Name" name="firstname" required />

            <label for="lstname"><b>Last Name</b></label>
            <input type="text" value={this.state.lastname} onChange={this.handleInputChange} placeholder="Last Name" name="lastname" required />

            <label for="username"><b>Username</b></label>
            <input type="text" value={this.state.username} onChange={this.handleInputChange} placeholder="Desired Username" name="username" required />

            <label for="email"><b>Email</b></label>
            <input type="text" value={this.state.email} onChange={this.handleInputChange} placeholder="Enter Email" name="email" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Enter Password" name="password" required />

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" value={this.state.passwordRepeat} onChange={this.handleInputChange} placeholder="Repeat Password" name="passwordRepeat" required />

            <label>
              <input type="checkbox" checked="checked" name="remember" style={styles.bottomMargin} /> Remember me
      </label>

            <p>By creating an account you agree to our <a href="#" style={styles.blue}>Terms & Privacy</a>.</p>

            <div className="clearfix">
              <button type="button" onclick="document.getElementById('id02').style.display='none'" className="cancelbtn">Cancel</button>
              <button type="submit" className="signup">Sign Up</button>
            </div>
          </div>
        </form>
      </div>


      <div className="centerpage">


      </div>



      <section className="container-about">

        <div id="text">
          <h1>Welcome To Your Safe Space</h1>

          <h2><strong>who we are</strong></h2>
          <h3>Clique is an online community made for women BY WOMEN, to meet and connect with other women who have a similar story to share.</h3>
          <br />
          <h3>Our vision for Clique is to have women of all different shades, ages and walks of life to feel safe enough to give and receive support from one another — because we know as women we are much stronger when we join forces.</h3>
          <br />
        </div>

      </section>



        <section className="container-community">

          <div id="text">
            <h1>Find Your Community</h1>

            <h2><strong>women and stories you can relate to</strong></h2>
            <h3>Join a community where you can freely share your story without fear of judgement.</h3>
            <br />
              <h3>Our online communities are designed for women to find strength in their struggles by letting their voice be heard and having a support group to lean on.</h3>
          </div>
    </section>



          <section className="container-connect">

            <div id="text">
              <h1 id="ready-title">Are You Ready</h1>
            </div>

            <h2 id="join-title">Join Us Now </h2>
            <h3 id="signup-title">Sign up and lets get talking </h3>
            <button id="btn3">Find Your Clique</button>

          </section>


          <section>
            <footer>
              <ul>
                <a href="cliqueinfo.html"><li>About Us</li></a>
                <a href=""><li>Contact</li></a>
                <a href="cliqueFAQ.html"><li>FAQ</li></a>
                <a href="cliqueguidelines.html"><li>Community Guidelines</li></a>
                <a href=""><li>Legal</li></a>
              </ul>
              <p>Copyright &copy; Clique</p>
            </footer>
          </section>

</div>

  )
}
}
        
        export default App;
