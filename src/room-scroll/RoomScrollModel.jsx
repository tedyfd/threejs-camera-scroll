/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\public\room2.glb 
*/

import { PerspectiveCamera, useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from "three"

export function RoomScrollModel({ 
  scroll, 
  ...props 
}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/room.glb')
  const { actions } = useAnimations(animations, group)
  const [hovered, set] = useState()
  const extras = { receiveShadow: true, castShadow: true, "material-envMapIntensity": 0.2 }

  useEffect(() => void (actions["cam_action"].play().paused = true), [])

  useEffect(() => {
    if (hovered) group.current.getObjectByName(hovered).material.color.set("white")
    document.body.style.cursor = hovered ? "pointer" : "auto"
  }, [hovered])

  useFrame((state) => {
    actions["cam_action"].time = THREE.MathUtils.lerp(actions["cam_action"].time, actions["cam_action"].getClip().duration * scroll.current, 0.05)
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="cam_point" position={[-4.711, 0.119, 3.058]} rotation={[Math.PI, -1.568, Math.PI]} scale={0.1}>
          <PerspectiveCamera name="Camera_1" makeDefault far={100} near={0.1} fov={45.747} scale={10} />
        </group>
        <mesh castShadow receiveShadow name="wall1" geometry={nodes.wall1.geometry} material={materials.Walls} />
        <mesh castShadow receiveShadow name="floor2" geometry={nodes.floor2.geometry} material={materials.Planks} />
        <group name="tv" position={[3.117, -0.179, -0.262]} rotation={[0, -1.571, 0]} scale={0.18}>
          <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.TVScreen} />
          <mesh name="Cube008_1" geometry={nodes.Cube008_1.geometry} material={materials.Frame} />
        </group>
        <mesh castShadow receiveShadow name="sofa2" geometry={nodes.sofa2.geometry} material={materials.Sofa} position={[-1.057, -1.125, -0.427]} rotation={[Math.PI, 0, Math.PI]} scale={[0.189, 0.019, 0.189]} />
        <mesh castShadow receiveShadow name="carpet" geometry={nodes.carpet.geometry} material={materials.Carpet} position={[-1.311, -2.317, 0.433]} scale={0.189} />
        <mesh castShadow receiveShadow name="table_round" geometry={nodes.table_round.geometry} material={materials.EndTable} position={[-3.618, -1.125, -0.474]} rotation={[Math.PI, 0, Math.PI]} scale={[0.189, 0.019, 0.189]} />
        <mesh castShadow receiveShadow name="table_square" geometry={nodes.table_square.geometry} material={materials.CoffeeTable} position={[-1.285, -1.125, -0.626]} rotation={[Math.PI, 0, Math.PI]} scale={[0.189, 0.019, 0.189]} />
        <mesh castShadow receiveShadow name="sofa1" geometry={nodes.sofa1.geometry} material={materials.Sofa} position={[-1.301, -1.125, -0.167]} rotation={[0, -Math.PI / 2, 0]} scale={[0.189, 0.019, 0.189]} />
        <mesh castShadow receiveShadow name="window" geometry={nodes.window.geometry} material={materials.Frame} position={[0.025, 0.082, 4.965]} rotation={[0, Math.PI / 2, 0]} scale={0.16} />
        <mesh name="frame_door" geometry={nodes.frame_door.geometry} material={materials.Frame} position={[2.055, 0.001, -2.115]} rotation={[0, -Math.PI / 2, 0]} scale={0.16} />
        <mesh name="frame_door2" geometry={nodes.frame_door2.geometry} material={materials.Frame} position={[0.922, 0.001, -6.132]} scale={0.16} />
        <mesh castShadow receiveShadow name="floor3" geometry={nodes.floor3.geometry} material={materials.Planks} position={[1.024, -0.005, -5.952]} scale={[1.067, 1, 0.919]} />
        <mesh name="window2" geometry={nodes.window2.geometry} material={materials.Frame} position={[5.966, 0.082, -4.269]} scale={0.16} />
        <mesh castShadow receiveShadow name="wall2" geometry={nodes.wall2.geometry} material={materials.Walls} position={[2, 0, -3.072]} />
        <mesh name="wall3" geometry={nodes.wall3.geometry} material={materials.Walls} position={[-3.055, 0.214, -5.215]} />
        <group name="plant" position={[2.617, -0.203, 1.573]} scale={0.18}>
          <mesh name="Cube017" geometry={nodes.Cube017.geometry} material={materials.Bark} />
          <mesh castShadow receiveShadow name="Cube017_1" geometry={nodes.Cube017_1.geometry} material={materials.Pot} />
          <mesh name="Cube017_2" geometry={nodes.Cube017_2.geometry} material={materials.Pebbles} />
          <mesh castShadow receiveShadow name="Cube017_3" geometry={nodes.Cube017_3.geometry} material={materials.Leaves} />
        </group>
        <group name="ceiling" position={[0.108, 1.377, 1.5]} scale={[0.192, 0.189, 0.189]}>
          <mesh castShadow receiveShadow name="Cube013" geometry={nodes.Cube013.geometry} material={materials.Lights} />
          <mesh castShadow receiveShadow name="Cube013_1" geometry={nodes.Cube013_1.geometry} material={materials.Walls} />
          <mesh castShadow receiveShadow name="Cube013_2" geometry={nodes.Cube013_2.geometry} material={materials.Frame} />
        </group>
        <group name="picture" position={[2.991, 0, 3.131]} scale={0.18}>
          <mesh name="Cube036" geometry={nodes.Cube036.geometry} material={materials.Painting} />
          <mesh name="Cube036_1" geometry={nodes.Cube036_1.geometry} material={materials.Frame} />
        </group>
        <mesh name="floor1" geometry={nodes.floor1.geometry} material={materials.Planks} />
        <mesh name="floor_light_border" geometry={nodes.floor_light_border.geometry} material={materials.Walls} position={[0, -0.01, 0]} />
        <mesh name="floor_light" geometry={nodes.floor_light.geometry} material={materials.Lights} position={[0, -0.01, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/room.glb')
