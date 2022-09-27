import React from 'react';

function Heading (){

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#"><img src="./local.jpeg" className='logo'/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">About KLocal<span className="sr-only"></span></a>
        </li>
        <li className="nav-item margin">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Popular Places</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link " href="#"><span className='text-color' >Explore</span></a>
        </li>
        
        
      </ul>
      <form className="form-inline">
      
      <button type="button" className="btn btn-primary btn-sm ">Add Listing</button>
    </form>
      
    </div>
  </nav>;
}

export default Heading;
 