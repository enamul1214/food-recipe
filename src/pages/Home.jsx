import { motion } from "framer-motion";
import Popular from "../components/Popular";
import Vegggie from "../components/Vegggie";

function Home() {
	return (
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<Popular />
			<Vegggie />
		</motion.div>
	);
}

export default Home;
