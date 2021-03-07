import React, { Component } from 'react';
import Border from './Border';

export class Borders extends Component {
	render() {
		return (
			<div style={{ display: 'inline-block' }}>
				{this.props.borders.length !== 0 ? <h2>BORDERS</h2> : null}
				<br />
				{this.props.borders.map((border) => (
					<Border
						key={border.alpha3Code}
						border={border}
						selectBorder={this.props.selectBorder}
					/>
				))}
			</div>
		);
	}
}

export default Borders;
