import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

function Recipe() {
	const [recipeDetail, setRecipeDetail] = useState({});
	const [activeTab, setActiveTab] = useState("instructions");
	let params = useParams();

	const featchDetails = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${params.name}/information/?apiKey=${process.env.REACT_APP_API_KEY}`
		);

		const detailsData = await data.json();
		setRecipeDetail(detailsData);
		// console.log(detailsData);
	};

	useEffect(() => {
		featchDetails();
	}, [params.name]);
	return (
		<DetailWrapper>
			<div>
				<h2>{recipeDetail.title}</h2>
				<img src={recipeDetail.image} alt={recipeDetail.title} />
			</div>

			<Info>
				<Button
					className={activeTab === "instructions" ? "active" : ""}
					onClick={() => setActiveTab("instructions")}
				>
					Instructions
				</Button>
				<Button
					className={activeTab === "ingredients" ? "active" : ""}
					onClick={() => setActiveTab("ingredients")}
				>
					Ingredients
				</Button>

				{activeTab === "instructions" && (
					<article>
						<div
							dangerouslySetInnerHTML={{
								__html: recipeDetail.summary,
							}}
						></div>

						<div
							dangerouslySetInnerHTML={{
								__html: recipeDetail.instructions,
							}}
						></div>
					</article>
				)}

				{activeTab === "ingredients" && (
					<ul>
						{recipeDetail.extendedIngredients.map((ingredient) => (
							<li key={ingredient.id}>{ingredient.original}</li>
						))}
					</ul>
				)}
			</Info>
		</DetailWrapper>
	);
}

const DetailWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 5rem;
	display: flex;
	font-size: 1rem;
	line-height: 1.6;

	.active {
		background: linear-gradient(35deg, #494949, #313131);
		color: #ffffff;
	}
	h2 {
		margin-bottom: 2rem;
	}

	li {
		font-size: 1rem;
		line-height: 1.6;
	}

	ol,
	ul {
		margin-top: 2rem;
		padding-left: 1.2rem;
	}
`;

const Button = styled.button`
	padding: 1rem 2rem;
	color: #313131;
	background: #ffffff;
	border: 2px solid #000000;
	margin-right: 2rem;
	font-weight: 600;
	cursor: pointer;
`;

const Info = styled.div`
	margin-left: 5rem;

	article {
		margin-top: 2rem;

		div {
			margin-bottom: 2rem;
		}
	}
`;

export default Recipe;
