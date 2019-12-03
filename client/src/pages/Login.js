import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();

    axios.post(
      "/api/users/login", {
        username: this.state.username,
        password: this.state.password
      }
    ).then(function(response){
      console.log(response);
      localStorage.setItem("userID", response.data[0].id);
      window.location.replace("/profile")
    })
  }
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

          <button type="submit" onClick={this.handleFormSubmit}>Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me</label>
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" className="cancelbtn">Cancel</button>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>



      
    </div>
    )
  }
}

export default Login;