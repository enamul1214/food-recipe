import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Vegggie() {
	const [veggie, setVeggie] = useState([]);
	useEffect(() => {
		getVeggie();
	}, []);

	const getVeggie = async () => {
		// To store data in localstorage
		const check = localStorage.getItem("veggie");
		if (check) {
			setVeggie(JSON.parse(check));
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
			);
			const data = await api.json();
			localStorage.setItem("veggie", JSON.stringify(data.recipes));
			setVeggie(data.recipes);
		}
	};

	return (
		<>
			<Wrapper>
				<h3>Our Vegetarian picks</h3>
				<Splide
					options={{
						perPage: 4,
						arrows: false,
						pagination: false,
						gap: "3rem",
					}}
				>
					{veggie.map((recipe, key) => {
						return (
							<SplideSlide key={key}>
								<Card>
									<Link to={"/recipe/" + recipe.id}>
										<p>{recipe.title}</p>
										<img
											src={recipe.image}
											alt={recipe.title}
										/>
									</Link>
								</Card>
							</SplideSlide>
						);
					})}
				</Splide>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	margin: 4rem 0;
`;

const Card = styled.div`
	min-height: 15rem;
	border-radius: 2rem;
	overflow: hidden;
	position: relative;

	img {
		border-radius: 2rem;
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	p {
		position: absolute;
		z-index: 2;
		left: 50%;
		bottom: 0;
		transform: translate(-50%, 0);
		color: #fff;
		width: 100%;
		text-align: center;
		font-weight: 600;
		height: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&:before {
		position: absolute;
		z-index: 1;
		height: 100%;
		width: 100%;
		content: "";
		background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
	}

	a {
		display: block;
	}
`;

export default Vegggie;
