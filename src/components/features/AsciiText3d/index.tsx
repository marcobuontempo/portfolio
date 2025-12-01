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

/** ELEMENT TO SHOW IF THREE.JS FAILS TO RENDER */
const FallbackDisplay = () => {
  return (
    <div className={styles.fallback}>
      <h1>MARCO BUONTEMPO</h1>
    </div>
  );
};

/** DYNAMICALLY ADJUSTS THE CAMERA SIZE (MOBILE-RESPONSIVE) */
const AdaptiveCamera = () => {
  const { size, camera } = useThree();

  useEffect(() => {
    const minZoom = 30; // how far out to allow
    const maxZoom = 120; // how close to allow

    // scale zoom smoothly with screen width
    const zoom = Math.min(maxZoom, Math.max(minZoom, size.width * 0.08));

    camera.zoom = zoom;

    camera.updateProjectionMatrix();

    window.dispatchEvent(new Event("resize"));
  }, [size.width, size.height]);

  return null;
};

/** DYNAMICALLY ADJUST THE ASCII RENDERER RESOLUTION (READABLE ON SMALL SCREENS) */
const AdaptiveAscii = ({
  fgColor,
  bgColor,
}: {
  fgColor: string;
  bgColor: string;
}) => {
  const { size } = useThree();

  // Pixel-based scaling (for responsive UI)
  const minRes = 0.2;
  const maxRes = 0.4;

  const minWidth = 320; // smallest mobile
  const maxWidth = 1200; // large desktop

  // interpolate and clamp
  const pixelScale = Math.min(
    maxRes,
    Math.max(
      minRes,
      maxRes -
        ((size.width - minWidth) / (maxWidth - minWidth)) * (maxRes - minRes)
    )
  );

  return (
    <AsciiRenderer
      fgColor={fgColor}
      bgColor={bgColor}
      resolution={pixelScale}
    />
  );
};

/** CREATE THE SCENE (TEXT AND POSITION) */
const Scene = () => {
  const ref = useRef<any>(null);
  const direction = useRef(1);
  const { viewport } = useThree();

  useFrame((_state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += (direction.current * delta) / 15;

    if (ref.current.rotation.y >= 0.4) {
      direction.current = -1;
    } else if (ref.current.rotation.y <= 0.05) {
      direction.current = 1;
    }
  });

  return (
    <Center ref={ref} rotation={[0.2, 0.4, 0]}>
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

/** THE FINAL COMPONENT TO RENDER */
const AsciiText3d = ({ color = "white" }: { color?: string }) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    // r3f bug workaround: reflow/resize on mount to force trigger canvas sizing
    requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(() => {
      // instead of dispatchEvent, handle your camera / ASCII updates directly
      window.dispatchEvent(new Event("resize")); // optional one-off
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container} ref={ref}>
      {/* Catch if WebGL fails */}
      <ErrorBoundary FallbackComponent={FallbackDisplay}>
        <div className={styles.ascii}>
          <Canvas
            orthographic
            camera={{ position: [0, 0, 100], zoom: 100 }}
            fallback={<FallbackDisplay />}
            className={styles.canvas}
          >
            <AdaptiveCamera />
            <color attach="background" args={["black"]} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} />

            <Scene />

            <AdaptiveAscii fgColor={color} bgColor="transparent" />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={0}
              maxPolarAngle={2}
            />
          </Canvas>
        </div>
        <Md360 className={styles.rotate} />
      </ErrorBoundary>
    </div>
  );
};

export default AsciiText3d;
