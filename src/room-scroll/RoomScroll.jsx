import { Environment, Sky, useHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, N8AO, ToneMapping } from "@react-three/postprocessing";
import { easing } from "maath";
import { Suspense, useRef } from "react";
import { DirectionalLightHelper } from "three";
import './roomscroll.css';
import { RoomScrollModel } from "./RoomScrollModel";
import RoomScrollOverlay from "./RoomScrollOverlay";

function Effect(){
    return(
        <EffectComposer>
            <N8AO halfRes aoSamples={5} aoRadius={0.4} distanceFalloff={0.75} intensity={1} />
            <ToneMapping />
        </EffectComposer>
    )
}

function Light() {
    const ref = useRef()
    useFrame((state, delta) => {
        easing.dampE(ref.current.rotation, [(state.pointer.y * Math.PI) / 50, (state.pointer.x * Math.PI) / 20, 0], 0.2, delta)
    })
    const lightRef = useRef();

    if (import.meta.env.DEV) {
        useHelper(lightRef, DirectionalLightHelper, 1, "red");
    }
    return (
      <group ref={ref}>
        <directionalLight 
            ref={lightRef} 
            color="#ffae42"
            position={[0, 1.25, 7]} 
            castShadow 
            intensity={8} 
            shadow-mapSize={1024} 
            shadow-bias={-0.001} 
            scale={0.5}
        >
            <orthographicCamera attach="shadow-camera" args={[-8.5, 8.5, 8.5, -8.5, 0.1, 20]} />
        </directionalLight>
      </group>
    )
  }

export default function RoomScroll(){
    const overlay = useRef()
    const caption = useRef()
    const scroll = useRef(0)
    // const [bad, set] = useState(false)
    // const { impl, debug, enabled, samples, ...config } = useControls({
    //     debug: false,
    //     enabled: false,
    //     size: { value: 35, min: 0, max: 100, step: 0.1 },
    //     focus: { value: 0.5, min: 0, max: 2, step: 0.1 },
    //     samples: { value: 16, min: 1, max: 40, step: 1 }
    //   })
    return (
        <>
            <Canvas shadows eventSource={document.getElementById("root")} eventPrefix="client">
                {/* {debug && <Perf position="top-left" />} */}
                    {/* <PerformanceMonitor onDecline={() => set(true)} /> */}
                {/* {enabled && <SoftShadows {...config} samples={bad ? Math.min(6, samples) : samples} />} */}
                <ambientLight intensity={0.75} />
                <Sky scale={20}/>
                <Light/>
                <Suspense fallback={null}>
                    <RoomScrollModel scroll={scroll}/>
                    <Environment preset="forest" />
                </Suspense>
                <Effect/>
            </Canvas>
            <RoomScrollOverlay ref={overlay} caption={caption} scroll={scroll}/>
        </>
    )
}