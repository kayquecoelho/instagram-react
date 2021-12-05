const perfilSugestao = [
  {
    nome: "bad.vibes.memes",
    fotoDePerfil: "assets/img/bad.vibes.memes.svg",
    razao: "Segue você",
  },
  {
    nome: "chibirdart",
    fotoDePerfil: "assets/img/chibirdart.svg",
    razao: "Segue você",
  },
  {
    nome: "razoesparaacreditar",
    fotoDePerfil: "assets/img/razoesparaacreditar.svg",
    razao: "Novo no Instagram",
  },
  {
    nome: "adorable_animals",
    fotoDePerfil: "assets/img/adorable_animals.svg",
    razao: "Segue você",
  },
  {
    nome: "smallcutecats",
    fotoDePerfil: "assets/img/smallcutecats.svg",
    razao: "Segue você",
  },
];

export default function Sidebar() {
  return (
    <div class="sidebar">
      <Usuario
        nome="Catana"
        user="catanacomics"
        fotoDePerfil="assets/img/catanacomics.svg"
      />

      <Sugestoes />

      <Footer />
    </div>
  );
}

function Usuario({ fotoDePerfil, user, nome }) {
  return (
    <div class="usuario">
      <img src={fotoDePerfil} />
      <div class="texto">
        <strong>{user}</strong>
        {nome}
      </div>
    </div>
  );
}
function Sugestoes() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {perfilSugestao.map((item) => {
        return <Sugestao info={item} />;
      })}
    </div>
  );
}

function Sugestao({ info }) {
  const { fotoDePerfil, nome, razao } = info;

  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={fotoDePerfil} />
        <div class="texto">
          <div class="nome">{nome}</div>
          <div class="razao">{razao}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </footer>
  );
}
