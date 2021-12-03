import ReactDOM from "react-dom";
import Topo from "./Topo";
import Corpo from "./Corpo";


function App (){
    return (
    <div>
        <Topo></Topo>
        <Corpo></Corpo>
    </div>
    )
}

const root = document.querySelector(".root")

ReactDOM.render(<App/>, root)