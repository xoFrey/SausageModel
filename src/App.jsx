import { Canvas } from "@react-three/fiber";
import Stars from "./components/Stars";
import Gallery from "./pages/Gallery";
import Showcase from "./pages/Showcase";
import "./App.css";

function App() {
  return (
    <main>
      <div className='stars'>
        <Canvas camera={{ position: [0, 0, 1], fov: 60 }}>
          <Stars />
        </Canvas>
      </div>
      <Gallery />
      <Showcase />
    </main>
  );
}

export default App;
