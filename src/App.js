import logo from './logo.svg';
import './App.css';
import '@google/model-viewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <model-viewer
        src="models/chair.gltf"  // Path to your 3D model
        ar
        ar-modes="webxr"  // Specify WebXR mode for AR
        camera-controls
        auto-rotate
        ar-scale="auto"  // Adjusts scale automatically in AR mode
        xr-environment  // Enables the use of an external environment for AR
        alt="A 3D model for AR"
        style={{ width: '100%', height: '500px' }}  // Adjust the size of the viewer
      >
      </model-viewer>
      </header>
    </div>
  );
}

export default App;
