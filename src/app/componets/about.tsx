const About = () => {
    return (
        <section className="w-full h-screen bg-black flex items-center justify-center">
            {/* Container para imagem e texto */}
            <div className="flex items-center  justify-center space-x-8">
                {/* Imagem */}
                <div className="w-1/3">
                    <img src="/img/minhafoto.jpeg" alt="Minha Foto" className="rounded-full object-cover" />
                </div>

                {/* Texto */}
                <div className="text-white flex flex-col ">
                    <h1 className="text-5xl font-medium font-montserrat text-[var(--color-primary)]">
                        A cada tela, uma nova <br /> oportunidade de encantar o <br /> usuário.
                    </h1>
                    <p className="font-montserrat text-xl font-normal text-[var(--color-secondary)] mt-5">
                        Olá, sou Davy Cosmo, desenvolvedor front-end freelancer,<br />
                        cursando Ciência da Computação,<br /> focado em React e com uma forte paixão por UX.
                    </p>
                    <div className="flex items-center justify-center mt-14 ">
                        <a className="bg-[#0AC4BF] h-12 w-24 items-center flex justify-center rounded-2xl hover:bg-[#089A95]" href="">CV</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;