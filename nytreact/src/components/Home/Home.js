import React from "react";

const Home = () =>
  <div className="panel-body">
	<form>
	  
	  <div className="topic-search">
		  <label>
		    <p className="form-text">Topic:</p>
		    <input type="text" id="topic" />
		  </label>
	  </div>
	  
	  <div className="start-date">
		  <label>
		    <p className="form-text">Start Year:</p>
		    <input type="text" id="start-year" />
		  </label>
	  </div>
	  
	  <div className="end-date">
		  <label>
		    <p className="form-text">End Year:</p>
		  <input type="text" id="end-year" />
		  </label>
	  </div>
	  
	  <div className="button">
	  	<input className="btn primary-btn" type="submit" value="Submit" />
	  </div>

	</form>
  </div>;

export default Home;