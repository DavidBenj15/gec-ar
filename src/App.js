import logo from './logo.svg';
import './App.css';
import ModelViewer from './components/ModelViewer';
import BottomTab from './components/BottomTab';

function App() {
  return (
    <div className="flex justify-center bg-slate-800 h-screen">
      <ModelViewer modelSource={'models/chair2.glb'}/>
      <BottomTab />
    </div>
  );
}

export default App;
