import React, { useEffect, useState } from "react";

const Lokal = () => {
	const [input, setInput] = useState(localStorage.getItem("input") || "");
	useEffect(() => {
		localStorage.setItem("input", input);
	}, [input]);
	const handleInputChange = (e) => {
		setInput(e.target.value);
	};
	return (
		<div>
			<input
				type="text"
				placeholder="local"
				value={input}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default Lokal;
