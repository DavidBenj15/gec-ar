import '@google/model-viewer';
import React, { useEffect } from 'react';

const ModelViewer = ({ modelSource, scale }) => {
  useEffect(() => {
    console.log(scale);
  }, [scale]);
  
  return (
    <div className='w-2/3 h-lvh -mt-36 flex justify-center items-center'>
      <model-viewer
          src={modelSource}  // Path to your 3D model
          ar
          ar-modes="scene-viewer quick-look webxr"  // Specify WebXR mode for AR
          camera-controls
          auto-rotate
          ar-scale="auto"  // Adjusts scale automatically in AR mode
          xr-environment  // Enables the use of an external environment for AR
          alt="A 3D model for AR"
          scale={scale}
          style={{ width: '100%', height: '500px' }}
        >
      </model-viewer> 
    </div>

  )
}

export default ModelViewer;
