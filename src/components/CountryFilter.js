import React, { Component } from 'react';

export class CountryFilter extends Component {
	render() {
		return (
			<div>
				<form>
					<input
						style={{ width: 400, margin: 8, height: 40, borderRadius: 5 }}
						placeholder="Type to Filter..."
						onChange={
							this.props.state.borders.length === 0 ||
							this.props.state.countries.length !== 1
								? this.props.handleInput
								: null
						}
					/>

					{this.props.state.borders.length !== 0 ||
					this.props.state.countries.length === 1 ? (
						<button
							style={{
								marginRight: 10,
								height: 40,
								borderRadius: 5,
								width: 200,
							}}
						>
							Go to Home Page
						</button>
					) : null}

					{this.props.state.countries[0].alpha3Code === 'ATA' ? null : this
							.props.state.filtered ? (
						<button
							style={{
								marginRight: 10,
								height: 40,
								borderRadius: 5,
								width: 200,
							}}
						>
							Go to Home Page
						</button>
					) : null}
					<select
						style={{ width: 400, height: 40, borderRadius: 5 }}
						onChange={
							this.props.state.borders.length === 0 ||
							this.props.state.countries.length !== 1
								? this.props.handleSelect
								: null
						}
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
