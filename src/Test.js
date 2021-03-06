import React, { Component } from 'react';

export class Test extends Component {
	render() {
		return (
			<div>
				{this.props.borders.length === 0 ? (
					<div
						style={{
							display: 'inline-flex',
							width: 180,
							height: 455,
							margin: 10,
							border: 'solid 3px black',
							padding: 0,
							backgroundColor: 'white',
						}}
						onClick={this.props.selectCountry.bind(
							this,
							this.props.country.alpha3Code,
						)}
					>
						<div>
							<img
								src={this.props.country.flag}
								alt="country flag"
								style={{
									width: 174,
									height: 115,
									paddingTop: 0,
									border: 'solid 1px lightgrey',
								}}
							/>
							<br />
							<br />
							<h4>{this.props.country.name}</h4>
							<br />
							<h6>Population : </h6>
							{this.props.country.population}
							<br />
							<br />
							<h6>
								Region :{' '}
								<span style={{ fontWeight: 'normal' }}>
									{this.props.country.region}
								</span>
							</h6>
							<h6>
								Capital :{' '}
								<span style={{ fontWeight: 'normal' }}>
									{this.props.country.capital}
								</span>
							</h6>
						</div>
					</div>
				) : (
					<div
						style={{
							display: 'inline-flex',
							width: 300,
							height: 600,
							margin: 10,
							border: 'solid 3px black',
							padding: 0,
							backgroundColor: 'white',
						}}
					>
						<div>
							<img
								src={this.props.country.flag}
								alt="country flag"
								style={{
									width: 174,
									height: 115,
									paddingTop: 0,
									border: 'solid 1px lightgrey',
								}}
							/>
							<br />
							<br />
							<h4>{this.props.country.name}</h4>
							<br />
							<h6>Population : </h6>
							{this.props.country.population}
							<br />
							<br />
							<h6>
								Region :{' '}
								<span style={{ fontWeight: 'normal' }}>
									{this.props.country.region}
								</span>
							</h6>
							<h6>
								Capital :{' '}
								<span style={{ fontWeight: 'normal' }}>
									{this.props.country.capital}
								</span>
							</h6>
							<h6>
								Languages : <br />
								<span style={{ fontWeight: 'normal' }}>
									{this.props.country.languages.map(
										(language) => language.name + ' ',
									)}
								</span>
							</h6>
							<h6>
								Currencies : <br />
								<span style={{ fontWeight: 'normal' }}>
									{this.props.country.currencies.map(
										(currency) => currency.name,
									)}
								</span>
							</h6>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Test;
