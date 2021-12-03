export default function Post(props) {
  return (
    <div class="post">
      <InformacoesUsuario
        nomeUsuario={props.informacoes.usuario}
        fotoDePerfil={props.informacoes.fotoDePerfil}
      />

      <Conteudo imagem={props.informacoes.conteudoImagem} />

      <Interacoes
        imagem={props.informacoes.interacao.fotoDePerfil}
        user={props.informacoes.interacao.usuario}
        nCurtidas={props.informacoes.interacao.numCurtidas}
      />
    </div>
  );
}

function Conteudo(props) {
  return (
    <div class="conteudo">
      <img src={props.imagem} />
    </div>
  );
}

function Interacoes(props) {
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
        <img src={props.imagem} />
        <div class="texto">
          Curtido por <strong>{props.user}</strong> e{" "}
          <strong>outras {props.nCurtidas} pessoas</strong>
        </div>
      </div>
    </div>
  );
}

function InformacoesUsuario(props) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={props.fotoDePerfil} />
        {props.nomeUsuario}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
