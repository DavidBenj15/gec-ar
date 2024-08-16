import '@google/model-viewer';

const ModelViewer = ({ modelSource }) => {
  return (
    <model-viewer
      src={modelSource}  // Path to your 3D model
      ar
      ar-modes="webxr"  // Specify WebXR mode for AR
      camera-controls
      auto-rotate
      ar-scale="auto"  // Adjusts scale automatically in AR mode
      xr-environment  // Enables the use of an external environment for AR
      alt="A 3D model for AR"
      style={{ width: '50%', height: '100px' }}  // Adjust the size of the viewer
    >
  </model-viewer> 
  )
}

export default ModelViewer;
