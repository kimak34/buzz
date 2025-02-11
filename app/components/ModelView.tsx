import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import { AmbientLight } from "three"
import Lights from "./Lights"
import { Suspense } from "react"
import BuzzBand from "./BuzzBand"
import * as THREE from "three"

const ModelView = (index, groupRef, gsapType, controlRef, setRotationSize) => {

    return (
        
        <View index={index} id={gsapType} className="w-full h-full">
            {/* Ambient light */}
            <ambientLight intensity={0.3}/>
            <PerspectiveCamera makeDefault position={[0,0,4]}/>
            <Lights/>
            <OrbitControls makeDefault ref={controlRef} enableZoom={false} enablePan={false} rotateSpeed={0.4} target={new THREE.Vector3(0,0,0)} onEnd={() => setRotationSize(controlRef.current.getAzimuthalAngle())}/>
            <group ref={groupRef} name="model" position={[0,0,0]}>
            <Suspense fallback={<div>Loading</div>}>
                <BuzzBand scale={[15,15,15]}/>
            </Suspense>
            </group>
            
        </View>
        
    )
}

export default ModelView