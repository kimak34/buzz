/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

function BuzzBand(props) {
  const { nodes, materials } = useGLTF('/model.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-7.015, 36.069, 6.884]} rotation={[-1.308, -0.011, -1.611]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Projector_1.geometry}
          material={materials.Proj_Outside}
        /> 
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Projector_2.geometry}
          material={materials.Proj_Inside}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Projector_3.geometry}
          material={materials.Proj_Glass}
        />
      </group>
      <group position={[-0.234, 9.739, -0.89]} rotation={[0, 1.55, -1.634]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bracelet_007_1.geometry}
          material={materials.Inside}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bracelet_007_2.geometry}
          material={materials.Outside}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bracelet_007_3.geometry}
          material={materials.Screen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bracelet_007_4.geometry}
          material={materials['03 - Default']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Clasp_Pin.geometry}
        material={materials['03 - Default']}
        position={[-0.411, -17.595, 3.628]}
        rotation={[0, 1.55, -0.063]}
        scale={[0.747, 0.747, 0.943]}
      />
    </group>
  )
}

export default BuzzBand

useGLTF.preload('/model.glb')