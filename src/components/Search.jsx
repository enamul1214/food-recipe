import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function Search() {
	const [input, setInput] = useState("");
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate('/searched/'+input)
	};
	return (
		<FormStyle onSubmit={submitHandler}>
			<div>
				<input
					onChange={(e) => setInput(e.target.value)}
					type="text"
					value={input}
				/>
				<FaSearch />
			</div>
		</FormStyle>
	);
}

const FormStyle = styled.form`
	max-width: 80%;
	margin: 0 auto;
	position: relative;
	width: 100%;

	input {
		background: linear-gradient(35deg, #494949, #313131);
		font-size: 1.5rem;
		color: #ffffff;
		padding: 1rem 3rem;
		border: none;
		border-radius: 1rem;
		outline: none;
		width: 100%;
	}

	svg {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(100%, -50%);
		color: #ffffff;
	}
`;

export default Search;
