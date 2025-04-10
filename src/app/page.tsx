import About from "./componets/about";
import CardsTechnology from "./componets/cardsTechnology";
import Footer from "./componets/footer";
import Presentation from "./componets/presentation";
import Projects from "./componets/projects;";

export default function Home() {
	return (
		<main>
			<Presentation />
			<About />
			<Projects />
			<CardsTechnology />
			<Footer/>

		</main>
	);
}
