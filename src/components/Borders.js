import React, { Component } from 'react';
import Border from './Border';

export class Borders extends Component {
	render() {
		return (
			<div>
				{this.props.borders.length !== 0 ? <h2>Borders</h2> : null}
				{this.props.borders.map((border) => (
					<Border key={border.alpha3Code} border={border} />
				))}
			</div>
		);
	}
}

export default Borders;
