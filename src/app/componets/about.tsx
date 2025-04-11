"use client";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";

const About = () => {
	return (
		<section className="w-full h-[70vh] md:h-screen relative overflow-hidden bg-[#111827] px-4 md:px-6 lg:px-8">
			<div className=" w-full h-screen flex items-center justify-center">
				<div className="flex-col lg:flex-row flex items-center justify-center space-x-8 w-full max-w-6xl px-4">

				
					<div className="text-white flex flex-col items-center text-center"> 
						<h1 className="text-2xl md:text-5xl font-bold font-montserrat text-[var(--color-primary)] md:pb-10 pt-9">

							<SplitText
								text="A cada tela, uma nova oportunidade de encantar o usuário."
								delay={30}
								className="inline-block"
							/>
						</h1>

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
								className="object-cover w-52 h-52 md:w-96 md-h-96  "

							/>
						</AnimatedContent>
					</div>

						<h3 className="font-montserrat text-base md:text-2xl font-normal text-[#F3F4F6] mt-5 w-full md:pt-12 lg:max-w-3xl text-center"> {/* Adicionei mx-auto e text-center */}
							<SplitText
								text="Olá, sou Davy Cosmo, desenvolvedor front-end freelancer, cursando Ciência da Computação, focado em React e com uma forte paixão por UX."
								delay={30}
							/>
						</h3>

						<div className="flex items-center justify-center mt-14 ">
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