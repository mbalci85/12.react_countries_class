import React, { Component } from 'react';
import Country from './Country';

export class Countries extends Component {
	render() {
		return (
			<div style={{ margin: 20 }}>
				{this.props.countries.map((country) => (
					<Country
						borders={this.props.borders}
						key={country.alpha3Code}
						country={country}
						selectCountry={this.props.selectCountry}
					/>
				))}
			</div>
		);
	}
}

export default Countries;
