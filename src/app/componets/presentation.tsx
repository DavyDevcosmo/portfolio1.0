
import ScrollingText from "./ScrollingText";


const Presentation = () => {
    return (
        <header className="w-full h-screen bg-black">
            <section>
                <h1 className=" pl-10 pt-24 pb-10 font-Poppins font-bold text-7xl text-white">Olá! sou Davy cosmo,<br /> Desenvolvedor Front-end <br /> Freelancer</h1>

                <div>
                    <div className="pl-10 pt-8 flex gap-10">
                        <a
                            href="https://www.linkedin.com/in/seu-perfil"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="h-14 w-14" src="/img/icons8-github-64 1.svg" alt="logo-github" />
                        </a>


                        <a
                            href="https://github.com/seu-usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="h-12 w-12" src="/img/icons8-whatsapp.svg" alt="logo-whatsapp" />
                        </a>


                        <a
                            href="https://twitter.com/seu-usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="h-12 w-12" src="/img/icons8-linkedin (1).svg" alt="logo-linkedin" />
                        </a>


                        <a
                            href="https://instagram.com/seu-usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="h-12 w-12" src="/img/icons8-instagram (1).svg" alt="logo-instagram" />
                        </a>
                    </div>


                    <div
                        className="bg-green-500 h-14 w-full flex items-center mt-24 "
                    >
                        <ScrollingText />
                    </div>


                </div>
            </section>
        </header>

    )
}; export default Presentation;