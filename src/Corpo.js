import Stories from "./Stories";
import Posts from "./CaixaDePosts";
import Sidebar from "./Sidebar"

export default function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>
      <Sidebar />

      
    </div>
  );
}
