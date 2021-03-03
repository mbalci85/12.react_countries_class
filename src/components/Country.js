import React, { Component } from 'react';

export class Country extends Component {
	render() {
		return (
			<div
				style={{
					display: 'inline-flex',
					width: 180,
					height: 435,
					margin: 10,
					border: 'solid 3px black',
					padding: 0,
					backgroundColor: 'white',
				}}
				onClick={this.props.selectCountry}
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
		);
	}
}

export default Country;
