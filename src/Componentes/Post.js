export default function Post({ informacoes }) {
  const { usuario, fotoDePerfil, conteudoImagem, interacao } = informacoes;
  const { fotoDePerfil: url, usuario: nome, numCurtidas } = interacao;

  return (
    <div class="post">
      <InformacoesUsuario nomeUsuario={usuario} fotoDePerfil={fotoDePerfil} />

      <Conteudo imagem={conteudoImagem} />

      <Interacoes imagem={url} user={nome} nCurtidas={numCurtidas} />
    </div>
  );
}

function Conteudo({ imagem }) {
  return (
    <div class="conteudo">
      <img src={imagem} />
    </div>
  );
}

function Interacoes({ imagem, user, nCurtidas }) {
  return (
    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={imagem} />
        <div class="texto">
          Curtido por <strong>{user}</strong> e{" "}
          <strong>outras {nCurtidas} pessoas</strong>
        </div>
      </div>
    </div>
  );
}

function InformacoesUsuario({ fotoDePerfil, nomeUsuario }) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={fotoDePerfil} />
        {nomeUsuario}
      </div>

      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
