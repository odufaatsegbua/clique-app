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
      
    <input className="inputField" value={this.state.firstname} onChange={this.handleInputChange} type="text" placeholder="Firstname" name="firstname" />
      </div>
      <div className="inputContainer">
      <div className="inputContainer">
       
        <input className="inputField" value={this.state.lastname} onChange={this.handleInputChange} type="text" placeholder="Lastname" name="lastname" />
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
        <input className="textArea" value={this.state.description} onChange={this.handleInputChange} type="text" placeholder="e.g Currenly in an abusive relationship" id="description" name="description" />
      </div>
    
      <button type="submit" onClick={this.handleFormSubmit} className="btn">Register</button>
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

export default Signup;