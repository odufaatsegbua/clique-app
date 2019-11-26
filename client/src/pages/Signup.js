import React from 'react';

class Signup extends React.Component {
state ={
firstname: "",
lastname: "",
username: "",
email: "",
password: "",

};

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
    
      <button type="submit" className="btn">Register</button>
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