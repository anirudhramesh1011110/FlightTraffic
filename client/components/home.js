import React from "react";
import Router from "react-router";
import {Link} from "react-router";


class Home extends React.Component{


  render() {

    return(
      <div>
      <div className="container" >
            <div className="card card-container" >
                 <h3>Your Flight Schedule</h3>
                  <p>Leave Residence By:  </p>
                  <p>Estimated Travel Time: </p>
                  
                 <br />
             </div>
         </div>
      </div>


    );

  }

};

export default Home;
