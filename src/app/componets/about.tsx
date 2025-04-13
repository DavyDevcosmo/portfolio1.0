"use client";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";

const About = () => {
    return (
        <section className="w-full lg:min-h-screen relative bg-[#000000] px-4 md:px-6 lg:px-8">
            <div className="w-full">
                <h1 className="text-3xl pt-10 md:text-5xl font-bold font-montserrat text-[var(--color-primary)] md:pb-16 md:pt-24 w-full text-center">
                    <SplitText
                        text="A cada tela, uma nova oportunidade de encantar o usuário."
                        delay={30}
                        className="inline-block"
                    />
                </h1>
            </div>

            <div className="flex lg:flex-row items-center justify-center mt-4 space-x-8 w-full max-w-6xl px-4">
                <div className="flex flex-col lg:flex-row text-white text-center">
                    <div className="w-full lg:w-1/2 mb-10 md:mb-20">
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
                                className="object-cover size-64 md:size-96 lg:size-auto mx-auto " 
                            />
                        </AnimatedContent>
                    </div>

                    <div className="w-full lg:w-1/2 lg:pl-8 lg:items-start ">
                        <h3 className="font-montserrat text-lg md:text-3xl font-normal text-[#F3F4F6]  mt-5 mb-10 md:mb-20 lg:mt-60">
                            <SplitText
                                text="Olá, sou Davy Cosmo, desenvolvedor front-end freelancer, cursando Ciência da Computação, focado em React e com uma forte paixão por UX."
                                delay={30}
                            />
                        </h3>

                        <div className="flex items-center justify-center mt-14 mb-10 lg:justify-start">
                            <GradientText
                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                animationSpeed={3}
                                showBorder={true}
                            >
                                <a
                                    className="h-12 w-24 items-center flex justify-center rounded-2xl font-poppins font-bold  transition  md:duration-150 ease-in-out"
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