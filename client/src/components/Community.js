import React from "react";

export default class Community extends React.Component {
render() {
return (
<div>
<section>

<h1>Welcome to the Career Community</h1>
<h3>This is a safe space where you can share your personal story,connect with other women, receive and give support</h3>


</section>
<hr />


<div className="container">

    <div className="row">

      
      <div className="col-md-8">

        <h1 className="my-4">
          <small>Conversations</small>
        </h1>

        
        <div className="card mb-4">
         
          <div className="card-body">
            <h2 className="card-title">Post Title</h2>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <a href="viewpost.html" className="btn btn-primary">Read More &rarr;</a>
          </div>
          <div className="card-footer text-muted">
            Posted on January 1, 2017 by
            <a href="#">UserName</a>
          </div>
        </div>

       
        <div className="card mb-4">
         
          <div className="card-body">
            <h2 className="card-title">Post Title</h2>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <a href="viewpost.html" className="btn btn-primary">Read More &rarr;</a>
          </div>
          <div className="card-footer text-muted">
            Posted on January 1, 2017 by
            <a href="#">UserName</a>
          </div>
        </div>

        
         <div className="card mb-4">
         
                <div className="card-body">
                  <h2 className="card-title">Post Title</h2>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                  <a href="viewpost.html" className="btn btn-primary">Read More &rarr;</a>
                </div>
                <div className="card-footer text-muted">
                  Posted on January 1, 2017 by
                  <a href="#">UserName</a>
                </div>
              </div>

        
         <div className="card mb-4">
         
                <div className="card-body">
                  <h2 className="card-title">Post Title</h2>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                  <a href="viewpost.html" className="btn btn-primary">Read More &rarr;</a>
                </div>
                <div className="card-footer text-muted">
                  Posted on January 1, 2017 by
                  <a href="#">UserName</a>
                </div>
              </div>

       
        <div className="card mb-4">
         
          <div className="card-body">
            <h2 className="card-title">Post Title</h2>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
            <a href="viewpost.html" className="btn btn-primary">Read More &rarr;</a>
          </div>
          <div className="card-footer text-muted">
            Posted on January 1, 2017 by
            <a href="#">UserName</a>
          </div>
        </div>

       
        <ul className="pagination justify-content-center mb-4">
          <li className="page-item">
            <a className="page-link" href="#">&larr; Older</a>
          </li>
          <li className="page-item disabled">
            <a className="page-link" href="#">Newer &rarr;</a>
          </li>
        </ul>

      </div>

      
      <div className="col-md-4">

       
        <div className="card my-4">
          <h5 className="card-header">Search</h5>
          <div className="card-body">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>

        
        <div className="card my-4">
          <h5 className="card-header">Categories</h5>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">#Salary</a>
                  </li>
                  <li>
                    <a href="#">#Workplace</a>
                  </li>
                  <li>
                    <a href="#">#HowToInterview</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#">#CareerChange</a>
                  </li>
                  <li>
                    <a href="#">#BackToSchool</a>
                  </li>
                  <li>
                    <a href="#">#BossWoman</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
        <div className="card my-4">
          <h5 className="card-header">Side Widget</h5>
          <div className="card-body">
            You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
          </div>
        </div>

      
<button type="button" className="btn btn-primary" data-toggle="modal"
data-target="#myModal">
Join community
</button>


<div className="modal fade" id="myModal">
<div className="modal-dialog">
<div className="modal-content">

  
  <div className="modal-header">
    <h4 className="modal-title">Congratulations!</h4>
      <button type="button" className="close" data-dismiss="modal">&times;</button>
    </div>

    
    <div className="modal-body">
      You joined a new community. Get started by writing a post
      and start receiving support from other strong women!
    </div>

   
    <div className="modal-footer">
      <button type="button" className="btn btn-danger"
        data-dismiss="modal">Close</button>
    </div>

  </div>
</div>
</div>

        <br />
        <button>Write A Post</button>

      </div>
    </div>
</div>
</div>
)
}
}