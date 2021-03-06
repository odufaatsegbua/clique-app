import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
state ={
firstname: "",
lastname: "",
username: "",
email: "",
password: "",
description: ""

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
    "/api/users", {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      description: this.state.description
    }
  ).then(function(response){
    console.log(response);
    localStorage.setItem("userID", response.data.id);
    window.location.replace("/profile")
  })
}
// usersignup = () => {
// .post
// }



// $(document).ready(function(){
//   $("#submit").click(function(){
//     $.post("/api/users",
//     {
//       username: $("#username").val(),
//       password: $("#password").val()
//     },
//     function(data,status){
//       var user = data;
//       localStorage.setItem('userID', user.id);
//     });
//   });
// });

render() {
return (
<div>
<form action="/action_page.php">
      <h2>Register Form</h2>
      <div className="inputContainer">
      
    <input className="inputField" value={this.state.firstname} onChange={this.handleInputChange} type="text" placeholder="First name" name="firstname" />
      </div>
      <div className="inputContainer">
      <div className="inputContainer">
       
        <input className="inputField" value={this.state.lastname} onChange={this.handleInputChange} type="text" placeholder="Last name" name="lastname" />
      </div>
        
        <input className="inputField" value={this.state.username} onChange={this.handleInputChange} type="text" placeholder="Username" name="username" />
      </div>
    
      <div className="inputContainer">
        
        <input className="inputField" value={this.state.email} onChange={this.handleInputChange} type="text" placeholder="Email" name="email" />
      </div>
    
      <div className="inputContainer">
        
        <input className="inputField" value={this.state.password} onChange={this.handleInputChange} type="password" placeholder="Password" name="password" />
      </div>

      <div className="inputContainer">
      <label for="description">Tell us how we can support your current situation</label>
        <input className="textArea" value={this.state.description} onChange={this.handleInputChange} type="text" placeholder="e.g I'm currently in an abusive relationship and need help getting out safely" id="description" name="description" />
      </div>
    
      <button type="submit" onClick={this.handleFormSubmit} className="btn">Register</button>
    </form>

    
    </div>
)
}
}

export default Signup;
