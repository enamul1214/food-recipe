import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

function Category() {
	return (
		<List>
			<SLink to={"/cuisine/Italian"}>
				<FaPizzaSlice />
				<h4>Italian</h4>
			</SLink>
			<SLink to={"/cuisine/American"}>
				<FaHamburger />
				<h4>Amarican</h4>
			</SLink>
			<SLink to={"/cuisine/Thai"}>
				<GiNoodles />
				<h4>Thai</h4>
			</SLink>
			<SLink to={"/cuisine/Japanese"}>
				<GiChopsticks />
				<h4>Japanese</h4>
			</SLink>
		</List>
	);
}

const List = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem 0;
`;

const SLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	margin-right: 2rem;
	text-decoration: none;
	background: linear-gradient(35deg, #494949, #313131);
	height: 6rem;
	width: 6rem;
	cursor: pointer;
	transform: scale(0.8);

	&:last-of-type {
		margin-right: 0;
	}

	h4 {
		color: #ffffff;
		font-size: 0.8rem;
	}

	svg {
		color: #ffffff;
		font-size: 1.5rem;
	}

	&.active {
		background: linear-gradient(to right, #f27121, #e94057);

		h4,
		svg {
			color: #ffffff;
		}
	}
`;

export default Category;
