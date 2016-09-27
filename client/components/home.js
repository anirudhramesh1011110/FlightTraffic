import React from "react";
import Router from "react-router";
import {Link} from "react-router";


class Home extends React.Component{

  constructor() {
		super();
      this.state = {
        flightCode: null,
        flightDate: null,
        leaveBy: null,
        travelTime: null
      }
	};

  _onChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  };

  _getFlightInfo(e) {
    e.preventDefault();
    $.ajax({
      url: '/getFlightInfo',
      dataType: 'json',
      type: 'POST',
      data: this.state,
      success: function(data) {
        console.log("Success", data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('error', err, status, xhr);
      }.bind(this)
    });
  };




  render() {

    return(

      <div className="container" >
            <div className="card card-container" >
                <div id="imageHeder">
                  <img id="deltaImg" src="https://pbs.twimg.com/profile_images/860130770/Supergraphic.jpg" />
                  <img id="googleImg" src="http://static.agencyentourage.com/wp-content/uploads/2014/08/google-maps-logo-1.jpeg" />
                </div>
                <h3 id="cardHeader">Flight Schedule</h3>
                <br />
                <form className="form-signin" method="POST" href="/getFlightInfo" >
                  <input type="email" id="flightCode" className="form-control" name="flightCode" placeholder="Please Enter Flight Code" onChange={this._onChange.bind(this)} required />
                  <input type="email" id="flightDate" className="form-control" name="flightDate" placeholder="YYYY-MM-DD" onChange={this._onChange.bind(this)} required />

                </form>
                <br />
                <p>Leave Residence By:  </p>
                <br />
                <p>Estimated Travel Time: </p>
                <br />
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick={this._getFlightInfo.bind(this)}>Find my Flight!</button>
             </div>
         </div>



    );

  }

};

export default Home;
