import React, { Fragment } from 'react';
import Navbar from "../components/Navbar";
import Axios from 'axios';

export default class Dashboard extends React.Component {
    state = {
        occupation: "",
        location: "",
        birthdate: "",
        interests: "",
        user: []
    };


    // // Add the following code if you want the name of the file appear on select
    // $(".custom-file-input").on("change", function() {
    //     var fileName = $(this).val().split("\\").pop();
    //     $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    //   });
    componentDidMount(){
        const userId = localStorage.getItem("userID");
        Axios.get("/api/users/" + userId)
        .then((response) => {
            console.log(response)
            this.setState({
                user: response.data[0]
            })
            console.log("state " + (this.state.user))
        })
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
      handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.occupation);
        Axios.put(
          "/api/users/" + localStorage.getItem("userID"), {
            occupation: this.state.occupation,
            location: this.state.location,
            birthdate: this.state.birthdate,
            interests: this.state.interests
          }
        ).then(function(response){
          console.log(response);
        })
      }
    render() {
        return (
            <Fragment>
                <Navbar />
                <hr />
            <div className="container">
                <section>
                    <h1>Welcome {this.state.user.firstname} {this.state.user.lastname}</h1>
                </section>
                <hr />
                <div className="container" style={{ marginTop: "30px" }} >
                    <div className="row mb-3">
                        <div className="col-sm-4">
                            <h2>About Me</h2>
        <p>Birthdate: {this.state.user.birthdate}</p>
                            <p>Location: {this.state.user.location}</p>
        <p>Interests: {this.state.user.interests}</p>
        <p>Occupation: {this.state.user.occupation}</p>
                            <h5>Upload a photo</h5>
                            <div className="img">

                            </div>
                            <form>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="customFile" />
                                    <label className="custom-file-label" for="customFile">Choose file</label>
                                </div>
                            </form>
                            <hr />
                            <div id="userinfo" >

                                <form id="userinfo">
                                    <label for="user-input">Occupation</label>
                                    <input onChange={this.handleInputChange} value={this.state.occupation} name="occupation" type="text" id="nameInput" /><br />

                                    <label for="user-input">Location</label>
                                    <input onChange={this.handleInputChange} value={this.state.location} name="location" type="text" id="emailInput" /><br />

                                    <label for="number-input">Interests</label>
                                    <input onChange={this.handleInputChange} value={this.state.interests} name="interests" type="text" id="numberInput" /><br />

                                    <label for="location-input">Birthdate</label>
                                    <input onChange={this.handleInputChange} value={this.state.birthdate} name="birthdate" type="text" id="locationInput" /><br />

                                    <button type="submit" className="btn" onClick={this.handleFormSubmit}>Submit</button>
                                </form>

                            </div>

                            <hr className="d-sm-none" />
                        </div>
                        <div className="col-sm-8">
                            <h2>Your Daily Message</h2>
                            <h5>Dec 5, 2019</h5>
                            <p>"Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth."</p>
                            <br />
                            <hr />
                            <h2>Your Communities</h2>
                            <h5>Communities you have joined</h5>
                            <div className="fakeimg">
                                
                            </div>
                            
                        </div>
                    </div>
                </div>

    </div>
  







        
      
        </Fragment>

    )
    }
}