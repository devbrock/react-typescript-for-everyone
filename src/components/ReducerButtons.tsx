import React, { useReducer, useRef, useContext } from 'react';
import { useClickOutside } from './useClickOutside';
import { GlobalContext } from './GlobalState';

export const ReducerButtons = () => {
	const ref = useRef<HTMLDivElement>(null!);

	const { rValue, turnOn, turnOff } = useContext(GlobalContext);

	useClickOutside(ref, () => {
		console.log('clicked outside');
	});
	return (
		<div ref={ref}>
			{rValue && <h1>Visible</h1>}
			<button onClick={turnOn}>Action 1</button>
			<button onClick={turnOff}>Action 2</button>
		</div>
	);
};
