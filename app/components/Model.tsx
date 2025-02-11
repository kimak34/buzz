import { useRef, useState } from "react"
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { Suspense } from "react";
import Lights from "./Lights";
import BuzzBand from "./BuzzBand";

const Model = () => {

    // Camera control
    const cameraControl = useRef();

    // model
    const model = useRef(new THREE.Group());

    // rotation
    const [_, setRotation] = useState(0);

    return (
        <div className="flex flex-col items-center mt-5">
            <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                {/*<ModelView index={1} groupRef={model} gsapType="view1" controlRef={cameraControl} setRotationSize={setRotation}/>*/}
                <View index={0} id={"view1"} className="w-full h-full">
            {/* Ambient light */}
            <ambientLight intensity={0.3}/>
            <Lights/>
            <OrbitControls makeDefault ref={cameraControl} enableZoom={true} enablePan={false} rotateSpeed={0.4} target={new THREE.Vector3(0,0,0)} onEnd={() => setRotation(cameraControl.current.getAzimuthalAngle())}/>
            <group ref={model} name="model" position={[0,0,0]}>
            <Suspense fallback={<div>Loading</div>}>
                <BuzzBand scale={[15,15,15]}/>
            </Suspense>
            </group>
            
        </View>
                <Canvas className="w-full h-full" style={{position: "fixed", top:0, bottom:0, left:0, right:0, overflow:"hidden"}}>
                    <View.Port/>
                </Canvas>
            </div>
        </div>
    )
}

export default Model