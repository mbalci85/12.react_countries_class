import React, { Component } from 'react';
import Borders from './components/Borders';
import Countries from './components/Countries';
import CountryFilter from './components/CountryFilter';
import allCountries from './countriesAll.json';

export class App extends Component {
	state = {
		countries: allCountries,
		borders: [],
		filtered: false,
	};

	handleSelect = (e) => {
		this.setState({
			countries:
				e.target.value === 'selectRegion'
					? this.state.countries
					: allCountries.filter(
							(country) => country.region === e.target.value,
					  ),
			borders: [],
			filtered: true,
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
		});
		setTimeout(() => {
			this.setState({
				borders: allCountries.filter((country) =>
					this.state.countries[0].borders.includes(country.alpha3Code),
				),
			});
		}, 10);
	};

	selectBorder = (alpha3Code) => {
		this.setState({
			countries: allCountries.filter(
				(country) => country.alpha3Code === alpha3Code,
			),
		});
		setTimeout(() => {
			this.setState({
				borders: allCountries.filter((country) =>
					this.state.countries[0].borders.includes(country.alpha3Code),
				),
			});
		}, 10);
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
				<h1 style={{ fontSize: 70, fontWeight: 'bolder' }}>COUNTRIES</h1>
				<CountryFilter
					handleSelect={this.handleSelect}
					handleInput={this.handleInput}
					state={this.state}
				/>
				<Countries
					countries={this.state.countries}
					selectCountry={this.selectCountry}
					borders={this.state.borders}
				/>
				<Borders
					borders={this.state.borders}
					selectBorder={this.selectBorder}
				/>
			</div>
		);
	}
}

export default App;
