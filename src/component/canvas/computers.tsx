import { Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Stage } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";

const ComputerModel = () => {
  const computer = useGLTF("./computers/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.5}
        position={[0, -3.25, -1.5]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0.2, 0.1, 0.3], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
       <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        dampingFactor={0.3}
      />
     
      <Stage  contactShadow={{ resolution: 1024, scale: 1000 }}>
       <ComputerModel/>
      </Stage>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;