import React, { Component } from 'react';

export class Country extends Component {
	render() {
		return <div>{this.props.country.name}</div>;
	}
}

export default Country;
