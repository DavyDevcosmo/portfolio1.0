import About from "./componets/about";
import CardsTechnology from "./componets/cardsTechnology";
import Footer from "./componets/footer";
import Navbar from "./componets/Navbar";
import Presentation from "./componets/presentation";
import Projects from "./componets/projects";

export default function Home() {
	return (
		<>
			<Navbar />
			<header>
				<Presentation />
			</header>
			<main>
				<About />
				<Projects />
				<CardsTechnology />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}
