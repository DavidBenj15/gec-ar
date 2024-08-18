import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ModelViewer from './components/ModelViewer';
import BottomTab from './components/BottomTab';
import PoweredByEch from './components/PoweredByEch';

function App() {
  const [model, setModel] = useState('chair1.glb');

  return (
    <>
      <div className='inline-flex flex-col align-middle justify-center w-full'>
        <NavBar />
        <PoweredByEch />
      </div>
      <div className="flex justify-center bg-slate-800 h-screen">
        <ModelViewer modelSource={`models/${model}`} />
        <BottomTab updateModel={setModel} />
      </div>
    </>
  );
}

export default App;
