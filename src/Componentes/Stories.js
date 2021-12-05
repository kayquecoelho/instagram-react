const informacoes = [
  "9gag",
  "meowed",
  "nathanwpylestrangeplanet",
  "barked",
  "wawawicomics",
  "respondeai",
  "filomoderna",
  "memeriagourmet",
];

export default function Stories() {
  return (
    <div class="stories">
      {informacoes.map((item) => {
        return <Story imagem={`assets/img/${item}.svg`} usuario={item} />;
      })}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Story({ imagem, usuario }) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={imagem} />
      </div>
      <div class="usuario">{usuario}</div>
    </div>
  );
}
