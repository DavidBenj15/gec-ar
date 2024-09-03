import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ModelViewer from './components/ModelViewer';
import BottomTab from './components/BottomTab';
import PoweredByEch from './components/PoweredByEch';

function App() {
  const [product, setProduct] = useState({
    "name": "Red",
    "modelSource": "gamingChair2.glb",
    "scale": "0.04 0.04 0.04"
  });

  useEffect(() => {
    console.log(product)
  }, [product])

  return (
    <>
      <div className='inline-flex flex-col align-middle justify-center w-full'>
        <NavBar />
        <PoweredByEch />
      </div>
      <div className="flex justify-center bg-slate-800 h-screen">
        <ModelViewer modelSource={`models/${product.modelSource}`} scale={product.scale} />
        <BottomTab updateProduct={setProduct} currentProduct={product}/>
      </div>
    </>
  );
}

export default App;
