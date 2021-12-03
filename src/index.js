import ReactDOM from "react-dom";
import Topo from "./Topo";
import Corpo from "./Corpo";

function App() {
  return (
    <div>
      <Topo></Topo>
      <Corpo></Corpo>
      <div class="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
  );
}

const root = document.querySelector(".root");

ReactDOM.render(<App />, root);
