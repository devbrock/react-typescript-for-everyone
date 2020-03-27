import React, { useState, useRef } from 'react';

type Props = {};

export const Input: React.FC<Props> = () => {
	const [name, setName] = useState('');
	// !null is Read Only
	const ref = useRef<HTMLInputElement>(null!);
	if (ref && ref.current) {
		console.log(ref.current.value);
	}

	return (
		<input ref={ref} value={name} onChange={e => setName(e.target.value)} />
	);
};
