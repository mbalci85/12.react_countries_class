import React, { Component } from 'react';

export class Border extends Component {
	render() {
		return (
			<div
				style={{
					width: 130,
					height: 200,
					margin: 10,
					border: 'solid 3px black',
					padding: 0,
					backgroundColor: 'white',
				}}
				onClick={this.props.selectBorder.bind(
					this,
					this.props.border.alpha3Code,
				)}
			>
				<img
					src={this.props.border.flag}
					alt="country flag"
					style={{
						width: 124,
						height: 85,
						paddingTop: 0,
						border: 'solid 1px lightgrey',
					}}
				/>
				<br />
				<h5>{this.props.border.name}</h5>
			</div>
		);
	}
}

export default Border;
