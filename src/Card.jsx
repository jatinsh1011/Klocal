import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Card() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 details">
          <div className="card" style={{ width:  "18rem"}}>
            <img className="card-img-top img1" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Success story of KLocal
</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-4 details"><div className="card" style={{ width:  "18rem"}}>
            <img className="card-img-top img2" src="lib.jpg" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">New findings of Science</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div></div>
        <div className="col-4 details"><div className="card" style={{ width:  "18rem"}}>
            <img className="card-img-top img3" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Mushroom health benefits</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div></div>
      </div>
    </div>
  );
}

export default Card;
