import React, { Component } from 'react';

export class Border extends Component {
	render() {
		return <div>{this.props.border.name}</div>;
	}
}

export default Border;
