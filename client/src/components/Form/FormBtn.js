import React from "react";

export const FormBtn = props => {

	let buttonStyles = {
		float: "right", 
		color: "white", 
		backgroundColor: "#083b66"
	}

	return (
		<button {...props} style={buttonStyles} className="btn btn-success">
			{props.children}
		</button>
	);
}
  