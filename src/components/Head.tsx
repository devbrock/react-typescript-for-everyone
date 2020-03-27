import React from 'react';

type Props = {
	title: string; // required prop
	isActive?: boolean; // optional prop
};

export const Head = ({ title = 'default', isActive = true }: Props) => (
	<div>
		<h1>{title}</h1>
		{isActive && <h3>Active</h3>}
	</div>
);
