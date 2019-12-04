import React, { Fragment } from 'react';
import Navbar from "../components/Navbar";
import Axios from 'axios';

export default class Dashboard extends React.Component {
    state = {
        name: "",
        email: "",
        phone: "",
        user: []
    };


    // // Add the following code if you want the name of the file appear on select
    // $(".custom-file-input").on("change", function() {
    //     var fileName = $(this).val().split("\\").pop();
    //     $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    //   });
    componentDidMount(){
        let userId = localStorage.getItem("userID");
        Axios.get("/api/users/" + userId)
        .then((response) => {
            console.log(response)
            this.setState({
                user: response.data[0]
            })
            console.log("state " + (this.state.user))
        })
    }
//     <script>
//     $(".custom-file-input").on("change", function() {
//       var fileName = $(this).val().split("\\").pop();
//       $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
//     });
// </script>
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
                                    <label for="user-input">Name</label>
                                    <input type="text" id="nameInput" /><br />



                                    <label for="user-input">Email</label>
                                    <input type="text" id="emailInput" /><br />



                                    <label for="number-input">Phone Number</label>
                                    <input type="text" id="numberInput" /><br />

                                    <label for="location-input">Location</label>
                                    <input type="text" id="locationInput" /><br />


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