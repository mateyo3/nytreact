import React from "react";

const Results = props =>
  <div className="container">
	<li>
		<h3>{props.title}</h3>
		<p>Published: {props.date}</p>
		<a href={props.url} target="_blank">
			<button className="btn">Read More</button>
		</a>
		<button className="btn" onClick={() => props.handleSaveButton(props._id)}>Save</button>
	</li>
  </div>;

export default Results;