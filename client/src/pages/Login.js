import React from 'react';

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    return (
    <div>
      <form action="action_page.php" method="post">
        <div className="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" value={this.state.username} onChange={this.handleInputChange} placeholder="Enter Username" name="username" required />

          <label for="psw"><b>Password</b></label>
          <input type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Enter Password" name="password" required />

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me</label>
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>



      <section>
        <footer>
          <ul>
            <a href="cliqueinfo.html"><li>About Us</li></a>
            <a href="contact.html"><li>Contact</li></a>
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

export default Login;