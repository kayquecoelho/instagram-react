import Post from "./Post";

const feedInfos = [
  {
    usuario: "meowed",
    fotoDePerfil: "assets/img/meowed.svg",
    conteudoImagem: "assets/img/gato-telefone.svg",
    interacao: {
      usuario: "respondeai",
      fotoDePerfil: "assets/img/respondeai.svg",
      numCurtidas: "101.523",
    },
  },
  {
    usuario: "barked",
    fotoDePerfil: "assets/img/barked.svg",
    conteudoImagem: "assets/img/dog.svg",
    interacao: {
      usuario: "adorable_animals",
      fotoDePerfil: "assets/img/adorable_animals.svg",
      numCurtidas: "99.159",
    },
  },
];

export default function Posts() {
  return (
    <div class="posts">
      {feedInfos.map((item) => {
        return <Post informacoes={item} />;
      })}
    </div>
  );
}
