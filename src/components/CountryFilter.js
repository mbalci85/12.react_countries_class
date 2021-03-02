import React, { Component } from 'react';

export class CountryFilter extends Component {
	render() {
		return (
			<div>
				<form>
					<input
						style={{ width: 300, margin: 8, height: 30 }}
						placeholder="Type to Filter..."
					/>
					<select
						style={{ width: 300, height: 30 }}
						onChange={this.props.handleSelect}
					>
						<option value="selectRegion">Select Your Region</option>
						<option value="Africa">Africa</option>
						<option value="Americas">Americas</option>
						<option value="Asia">Asia</option>
						<option value="Europe">Europe</option>
						<option value="Oceania">Oceania</option>
						<option value="Polar">Polar</option>
					</select>
				</form>
			</div>
		);
	}
}

export default CountryFilter;
