import "./App.css";

function App() {
 const projetos = [
  {
    nome: "Lista de Repositórios (GitHub)",
    descricao: "Página do meu GitHub com todos os meus repositórios publicados.",
    link: "https://github.com/dianasouzabsb-source"
  },
  {
    nome: "Portfólio Publicado",
    descricao: "Versão online do meu portfólio publicada com GitHub Pages.",
    link: "https://dianasouzabsb-source.github.io/portf-lio/"
  },
  {
    nome: "Portfólio React",
    descricao: "Nova versão do meu portfólio desenvolvida com React e publicada na Vercel.",
    link: "https://portfolio-react-c83vhy1du-diana-milanes-souzas-projects.vercel.app/"
  }
];

  return (
    <div className="container">
      <header>
        <nav>
          <h1>Meu Portfólio</h1>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#sobre-mim">Sobre Mim</a></li>
            <li><a href="#projetos">Projetos</a></li>
          </ul>
        </nav>
      </header>

      <section id="sobre">
        <img src="/foto.jpg.jpeg" className="foto" alt="Minha foto" />

        <div className="conteudo-sobre">
          <h2>
            Olá, eu sou
            <br />
            <span>Diana Milanês Souza</span>
          </h2>

          <p>
            Sou estudante de Tecnologia em Sistemas para Internet na UESPI.
          </p>

          <div className="botoes">
            <a href="#projetos" className="btn">Ver Meus Projetos</a>
            <a href="mailto:seuemail@email.com" className="btn">Entrar em Contato</a>
          </div>
        </div>
      </section>

      <section id="sobre-mim">
        <div className="sobre-box">
          <h2>Sobre Mim</h2>
          <p>
            Sou Diana Milanês, estudante de Tecnologia em Sistemas para Internet na UESPI.
            Tenho muita curiosidade por desenvolvimento web e estou sempre buscando aprender novas tecnologias.
          </p>
          <p>
            Este portfólio é minha migração com React, desenvolvido como projeto final
            da disciplina de Programação Web.
          </p>
        </div>
      </section>

      <section id="projetos">
        <h2>Meus Projetos</h2>
        <div id="lista-projetos">
          {projetos.map((projeto, index) => (
            <div className="projeto" key={index}>
              <h3>{projeto.nome}</h3>
              <p>{projeto.descricao}</p>
              <a href={projeto.link} target="_blank" rel="noreferrer">
                Ver projeto →
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 - Meu Portfólio</p>
      </footer>
    </div>
  );
}

export default App;