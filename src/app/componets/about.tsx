"use client";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";

const About = () => {
	return (
		<section className="w-full h-screen relative overflow-hidden bg-[#111827]">
			<div className="w-full h-full flex items-center justify-center">
				<div className="flex items-center justify-center space-x-8 w-full max-w-6xl px-4">

					<div className="w-1/2">
						<AnimatedContent
							distance={150}
							direction="horizontal"
							reverse={false}
							config={{ tension: 80, friction: 20 }}
							initialOpacity={0.2}
							animateOpacity
							scale={1.1}
							threshold={0.2}
						>

							<img
								src="/img/minhafoto.png"
								alt="Minha Foto"
								className="object-cover w-96 h-96"

							/>
						</AnimatedContent>
					</div>

					{/* Texto */}
					<div className="text-white flex flex-col items-center text-center"> {/* Adicionei items-center e text-center aqui */}
						<h1 className="text-5xl font-medium font-montserrat text-[var(--color-primary)]">
							<SplitText
								text="A cada tela, uma nova oportunidade de encantar o usuário."
								delay={30}
								className="inline-block"
							/>
						</h1>

						<h3 className="font-montserrat text-xl font-normal text-[var(--color-secondary)] mt-5 w-full max-w-96 mx-auto text-center"> {/* Adicionei mx-auto e text-center */}
							<SplitText
								text="Olá, sou Davy Cosmo, desenvolvedor front-end freelancer, cursando Ciência da Computação, focado em React e com uma forte paixão por UX."
								delay={30}
							/>
						</h3>

						<div className="flex items-center justify-center mt-14">
							<GradientText
								colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
								animationSpeed={3}
								showBorder={true}>
								<a
									className=" h-12 w-24 items-center flex justify-center rounded-2xl font-poppins font-bold  transition-colors "
									href="re"
								>
									CV
								</a>
							</GradientText>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;