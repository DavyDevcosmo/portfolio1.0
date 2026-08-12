import dynamic from "next/dynamic";
import Footer from "./componets/footer";
import Navbar from "./componets/Navbar";
import Presentation from "./componets/presentation";

const About = dynamic(() => import("./componets/about"), {
	loading: () => (
		<section id="about" className="min-h-screen bg-black scroll-mt-16" aria-hidden="true" />
	),
});

const Projects = dynamic(() => import("./componets/projects"), {
	loading: () => (
		<section id="projects" className="min-h-screen bg-[#0A0F1C] scroll-mt-16" aria-hidden="true" />
	),
});

const CardsTechnology = dynamic(() => import("./componets/cardsTechnology"), {
	loading: () => (
		<section
			id="technologies"
			className="min-h-screen bg-[#0A0F1C] scroll-mt-16"
			aria-hidden="true"
		/>
	),
});

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
