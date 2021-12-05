import ReactDOM from "react-dom";
import Topo from "./Componentes/Topo";
import Corpo from "./Componentes/Corpo";

function App() {
  return (
    <div>
      <Topo />

      <Corpo />

      <BarraNav />
    </div>
  );
}

function BarraNav() {
  return (
    <div class="fundo-mobile">
      <ion-icon name="home"></ion-icon>
      <ion-icon name="search-outline"></ion-icon>
      <ion-icon name="add-circle-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="person-outline"></ion-icon>
    </div>
  );
}
const root = document.querySelector(".root");

ReactDOM.render(<App />, root);
