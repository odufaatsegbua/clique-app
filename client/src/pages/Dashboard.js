import React from 'react';
export default class Dashboard extends React.Component{
state = {

}
render() {
    return(
        <div>
        <section>

<h1>Welcome to your profile</h1>


</section>
<hr>

<div className="container" style="margin-top:30px">
    <div className="row">
      <div className="col-sm-4">
        <h2>About Me</h2>
        <h5>Upload a photo</h5>
        <div className="img">

        </div>
        <form>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="customFile">
                  <label className="custom-file-label" for="customFile">Choose file</label>
                </div>
              </form>
        <hr>
        <div id="userinfo">

          <form id="userinfo">
              <label for="user-input">Name</label>
              <input type="text" id="name-input"><br>
        
            

              <label for="user-input">Email</label>
              <input type="text" id="email-input"><br>
        
           

              <label for="number-input">Phone Number</label>
              <input type="text" id="number-input"><br>
        
           
          </form>
       
        </div>
        
        <hr className="d-sm-none">
      </div>
      <div className="col-sm-8">
        <h2>Your Daily Message</h2>
        <h5>Dec 5, 2019</h5>
        <p>"Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth."</p>
        <br>
        <hr>
        <h2>Your Communities</h2>
        <h5>Communities you have joined</h5>
        <div className="fakeimg">Fake Image</div>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </div>
    </div>
  </div>
  


  <script>
        // Add the following code if you want the name of the file appear on select
        $(".custom-file-input").on("change", function() {
          var fileName = $(this).val().split("\\").pop();
          $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
        });
</script>




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



</section>  
        </div>
    )
}
}