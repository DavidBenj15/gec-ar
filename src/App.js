import React, { useState } from 'react';
import './App.css';
import ModelViewer from './components/ModelViewer';
import BottomTab from './components/BottomTab';

function App() {
  const [model, setModel] = useState('chair1.glb');

  return (
    <div className="flex justify-center bg-slate-800 h-screen">
      <ModelViewer modelSource={`models/${model}`} />
      <BottomTab updateModel={setModel} />
    </div>
  );
}

export default App;
