const informacoes = [
    "9gag",
    "meowed", 
    "nathanwpylestrangeplanet",
    "barked",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet"
]

export default function Stories() {
  return (
    <div class="stories">
      {informacoes.map(usuario => {
          return <Story imagem = {`assets/img/${usuario}.svg`} usuario = {`${usuario}`}/>
        })
      }

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagem} />
      </div>
      <div class="usuario">{props.usuario}</div>
    </div>
  );
}
