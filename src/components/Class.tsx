import React, { Component } from 'react';

type Props = {
	title: string;
};

type State = {
	status: string;
};

export default class Class extends Component<Props> {
	render() {
		return (
			<div>
				<h1>This is a class component</h1>
			</div>
		);
	}
}
