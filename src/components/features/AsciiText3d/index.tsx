import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  AsciiRenderer,
  Center,
  OrbitControls,
  Text3D,
} from "@react-three/drei";
import fontUrl from "../../../assets/IBM Plex Mono_Regular.json?url";
import { useEffect, useRef } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./styles.module.css";
import { Md360 } from "react-icons/md";

const FallbackDisplay = () => {
  return (
    <div className={styles.fallback}>
      <h1>MARCO BUONTEMPO</h1>
    </div>
  );
};

const Scene = () => {
  const ref = useRef<any>(null);
  const direction = useRef(1);
  const { viewport } = useThree();
  useFrame((_state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += (direction.current * delta) / 10;

    if (ref.current.rotation.y >= 0.3) {
      direction.current = -1;
    } else if (ref.current.rotation.y <= -0.25) {
      direction.current = 1;
    }
  });

  return (
    <Center rotation={[0, -0.25, 0]} ref={ref}>
      <Text3D
        font={fontUrl}
        curveSegments={20}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.8}
        lineHeight={0.7}
        letterSpacing={0.2}
        size={1}
        scale={Math.max(1, viewport.width / 14)}
      >
        {`MARCO\nBUONTEMPO`}
        <meshStandardMaterial color="white" />
      </Text3D>
    </Center>
  );
};

const AsciiText3d = () => {
  useEffect(() => {
    // r3f bug workaround: reflow/resize on mount to force trigger canvas sizing
    requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
  }, []);

  return (
    <div className={styles.container}>
      {/* Catch if WebGL fails */}
      <ErrorBoundary FallbackComponent={FallbackDisplay}>
        <div className={styles.container}>
          <Canvas
            orthographic
            camera={{ position: [0, 0, 100], zoom: 100 }}
            fallback={<FallbackDisplay />}
            className={styles.canvas}
          >
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
          <Md360 className={styles.rotate} />
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default AsciiText3d;
