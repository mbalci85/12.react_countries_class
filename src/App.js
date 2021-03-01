import React, { Component } from 'react';
import Countries from './components/Countries';
import allCountries from './countriesAll.json';

export class App extends Component {
	state = {
		countries: allCountries,
	};
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>COUNTRIES</h1>
				<Countries countries={this.state.countries} />
			</div>
		);
	}
}

export default App;
