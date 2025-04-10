const Footer = () => {
    return (
      <section className="bg-black h-36 flex items-center justify-center relative overflow-hidden">
        <div className="flex flex-row items-center gap-8"> {/* Alterado para flex-row e ajustado gap */}
          {/* Primeiro texto - agora sem absolute */}
          <h3 className="text-white font-poppins font-normal">
            Todos os direitos reservados Davy Cosmo © 2025
          </h3>
  
          {/* Separador visual opcional */}
          <div className="h-6 w-px bg-gray-500"></div>
  
          {/* Segundo texto - agora sem absolute */}
          <h3 className="text-white font-poppins font-normal">
            Desenvolvido por <span className="text-[var(--color-primary)] font-bold">Davy Cosmo</span> 
          </h3>
        </div>
      </section>
    );
  };
  
  export default Footer;