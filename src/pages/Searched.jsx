import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";

function Searched() {
	const [searchedRecipes, setSearchedRecipes] = useState([]);
	let params = useParams();

	const getSearched = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
		);
		const searchData = await data.json();
		setSearchedRecipes(searchData.results);
	};

	useEffect(() => {
		getSearched(params.search);
		// console.log(params.search);
	}, [params.search]);

	return (
		<Grid>
			{searchedRecipes.map((item, key) => {
				return (
					<Card key={key}>
						<Link to={"/recipe/" + item.id}>
							<img src={item.image} alt={item.title} />
							<h4>{item.title}</h4>
						</Link>
					</Card>
				);
			})}
		</Grid>
	);
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`;

const Card = styled.div`
	img {
		width: 100%;
		border-radius: 2rem;
	}

	a {
		text-decoration: none;
		color: #000000;
	}

	h4 {
		text-align: center;
		padding: 1rem;
		color: #000000;
	}
`;

export default Searched;
