import React, { useEffect, useState } from "react";
import scss from './Input.module.scss'

const Input = () => {
	const [input, setInput] = useState("");
	useEffect(() => {
		console.log(input.length);
	}, [input]);
	const handleInputchange = (e) => {
		setInput(e.target.value);
	};
	return (
		<div className={scss.input}>
			<input
				type="text"
				placeholder="local"
				value={input}
				onChange={handleInputchange}
			/>
		</div>
	);
};

export default Input;
