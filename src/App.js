import React, { Component } from 'react';
import Borders from './components/Borders';
import Countries from './components/Countries';
import CountryFilter from './components/CountryFilter';
import allCountries from './countriesAll.json';

export class App extends Component {
	state = {
		countries: allCountries,
		borders: [],
	};

	handleSelect = (e) => {
		this.setState({
			countries:
				e.target.value === 'selectRegion'
					? allCountries
					: allCountries.filter(
							(country) => country.region === e.target.value,
					  ),
			borders: [],
		});
	};

	handleInput = (e) => {
		this.setState({
			countries: allCountries.filter((country) =>
				country.name.toLowerCase().includes(e.target.value.toLowerCase()),
			),
			borders: [],
		});
	};

	selectCountry = (alpha3Code) => {
		this.setState({
			countries: allCountries.filter(
				(country) => country.alpha3Code === alpha3Code,
			),
			borders: allCountries.filter((country) =>
				this.state.countries[0].borders.includes(country.alpha3Code),
			),
		});
		console.log(this.state.borders);
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
				<Countries
					countries={this.state.countries}
					selectCountry={this.selectCountry}
				/>
				<Borders borders={this.state.borders} />
			</div>
		);
	}
}

export default App;
