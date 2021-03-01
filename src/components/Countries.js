import React, { Component } from 'react';
import Country from './Country';

export class Countries extends Component {
	render() {
		return (
			<div style={{ margin: 20 }}>
				{this.props.countries.map((country) => (
					<Country key={country.alpha3Code} country={country} />
				))}
			</div>
		);
	}
}

export default Countries;
