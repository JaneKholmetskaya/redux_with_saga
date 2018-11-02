import React from "react"

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name  } = this.props;
		console.log("this.props", this.props);
		return(
			<div>{ name } </div>
		)

	}
}

export default About
