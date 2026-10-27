import BackToTop from "./componets/backToTop";
import About from "./componets/about";
import Contact from "./componets/contact";
import Footer from "./componets/footer";
import Navbar from "./componets/Navbar";
import OpenSource from "./componets/openSource";
import Presentation from "./componets/presentation";
import Projects from "./componets/projects";
import Tools from "./componets/tools";

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Presentation />
				<Tools />
				<About />
				<Projects />
				<OpenSource />
				<Contact />
			</main>
			<BackToTop />
			<footer>
				<Footer />
			</footer>
		</>
	);
}
