import React, { Component } from 'react';
import Countries from './components/Countries';
import CountryFilter from './components/CountryFilter';
import allCountries from './countriesAll.json';

export class App extends Component {
	state = {
		countries: allCountries,
	};

	handleSelect = (e) => {
		this.setState({
			countries:
				e.target.value === 'selectRegion'
					? allCountries
					: allCountries.filter(
							(country) => country.region === e.target.value,
					  ),
		});
	};

	handleInput = (e) => {
		this.setState({
			countries: allCountries.filter((country) =>
				country.name.toLowerCase().includes(e.target.value.toLowerCase()),
			),
		});
	};

	render() {
		return (
			<div
				style={{
					textAlign: 'center',
					backgroundColor: 'lightsalmon',
					padding: 15,
				}}
			>
				<h1>COUNTRIES</h1>
				<CountryFilter
					handleSelect={this.handleSelect}
					handleInput={this.handleInput}
				/>
				<Countries countries={this.state.countries} />
			</div>
		);
	}
}

export default App;
