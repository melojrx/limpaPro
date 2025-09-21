const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              alt="Equipe LimpaPro"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Quem Somos</h2>
            <p className="mt-4 text-lg text-gray-500">
              A LimpaPro nasceu da paixão por criar ambientes mais limpos, saudáveis e agradáveis. Somos uma equipe dedicada a oferecer serviços de limpeza de alta qualidade, com foco total na satisfação de nossos clientes.
            </p>
            <p className="mt-4 text-gray-500">
              Nossa missão é simples: proporcionar tranquilidade através de um serviço confiável e eficiente. Nossos valores são a base de tudo o que fazemos: profissionalismo, integridade e um compromisso inabalável com a excelência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;