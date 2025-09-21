import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  AsciiRenderer,
  Center,
  OrbitControls,
  Text3D,
} from "@react-three/drei";
import fontUrl from "../../../assets/IBM Plex Mono_Regular.json?url";
// import fontUrl from "../../../assets/IBM Plex Mono_Bold.json?url";
import { useRef } from "react";

type SceneProps = {};

const Scene = ({}: SceneProps) => {
  const ref = useRef<any>(null);
  const direction = useRef(1);
  const { viewport } = useThree();
  useFrame((_state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += (direction.current * delta) / 10;

    if (ref.current.rotation.y >= 0.4) {
      direction.current = -1;
    } else if (ref.current.rotation.y <= 0) {
      direction.current = 1;
    }
  });

  return (
    <Center rotation={[0, 0, 0]} ref={ref}>
      <Text3D
        font={fontUrl}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.8}
        lineHeight={0.7}
        letterSpacing={0.2}
        size={1}
        scale={viewport.width / 10}
      >
        {`MARCO\nBUONTEMPO`}
        <meshStandardMaterial color="white" />
      </Text3D>
    </Center>
  );
};

type AsciiText3dProps = {};

const AsciiText3d = ({}: AsciiText3dProps) => {
  return (
    <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
      <color attach="background" args={["black"]} />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} />

      <Scene />

      <AsciiRenderer fgColor="green" bgColor="transparent" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={2}
      />
    </Canvas>
  );
};

export default AsciiText3d;
