import React from "react";

const Home = () =>
  <div className="panel-body">
	<form>
	  <label>
	    Topic:
	    <input type="text" id="topic" />
	  </label>
	  <label>
	    Start Year:
	    <input type="text" id="start-year" />
	  </label>
	  <label>
	    End Year:
	  <input type="text" id="end-year" />
	  </label>
	  <input type="submit" value="Submit" />
	</form>
  </div>;

export default Home;