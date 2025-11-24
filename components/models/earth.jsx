"use client";
import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function WorldModel(props) {
  const group = useRef();         // 地球含む全体（回転）
  const cloudOrbit = useRef();    // 雲の公転親（こいつを回す）
  const cloudRef = useRef();      // 雲本体（必要なら個別操作）
  const planeRef = useRef();      // 飛行機
  const { nodes, materials, animations } = useGLTF("/threeImage/world-transformed.glb");
  useAnimations(animations, group);
  // 毎フレーム回転
  const earthAxis = useMemo(() => new THREE.Vector3(1, 1, 0).normalize(), []);


  useFrame((state, delta) => {
    // 地球：右下方向に軸回転（一定方向）
    if (group.current) {
      group.current.rotation.y += delta * 0.1; // Y軸で右回転
      group.current.rotation.x += delta * 0.075; // X軸で下方向に傾ける
    }

    // 雲：cloudOrbit を回して「公転」させる（左回転にしたければマイナス）
    if (cloudOrbit.current) {
      cloudOrbit.current.rotation.y -= delta * -0.0991; // ← 左回転（公転）
    }

    // 飛行機：横にループ移動（例）
    if (planeRef.current) {
      planeRef.current.position.x += delta * 0.6;
      if (planeRef.current.position.x > 10) planeRef.current.position.x = 10;
    }
  });





  return (
    <group ref={group} {...props} dispose={null} rotation={[0, 0, 1]} scale={1.8}>
      <group name="Scene">
        <group name="world" scale={1.359}>
          <mesh
            name="ICO球"
            castShadow
            receiveShadow
            geometry={nodes.ICO球.geometry}
            material={materials.PaletteMaterial001}
            position={[0.711, -0.072, -0.311]}
            rotation={[1.433, -0.102, -2.032]}
            scale={[0.02, 0.02, 0.026]}
          />
          <mesh
            name="Roundcube001"
            castShadow
            receiveShadow
            geometry={nodes.Roundcube001.geometry}
            material={materials['マテリアル.008']}
            rotation={[-0.025, 0, 0]}
            scale={0.707}
          />
          <group
            name="Roundcube027"
            position={[0.505, 0.131, -0.532]}
            rotation={[0.139, -0.3, 1.791]}
            scale={0.736}>
            <mesh
              name="Roundcube018_1"
              castShadow
              receiveShadow
              geometry={nodes.Roundcube018_1.geometry}
              material={materials.PaletteMaterial002}
            />
            <mesh
              name="Roundcube018_2"
              castShadow
              receiveShadow
              geometry={nodes.Roundcube018_2.geometry}
              material={materials['マテリアル.012']}
            />
          </group>
          <mesh
            name="SEE_TEST"
            castShadow
            receiveShadow
            geometry={nodes.SEE_TEST.geometry}
            material={materials['see.001']}
            scale={0.736}
          />
          <mesh
            name="メタボール001"
            castShadow
            receiveShadow
            geometry={nodes.メタボール001.geometry}
            material={materials['マテリアル.030']}
            position={[0.25, -0.508, -0.547]}
            rotation={[2.114, -1.217, -1.824]}
            scale={0.018}
          />
          <mesh
            name="円柱005"
            castShadow
            receiveShadow
            geometry={nodes.円柱005.geometry}
            material={materials['マテリアル.019']}
            position={[0.688, 0.365, -0.264]}
            rotation={[-0.169, 0.261, -0.976]}
            scale={0.042}
          />
          <mesh
            name="円錐016"
            castShadow
            receiveShadow
            geometry={nodes.円錐016.geometry}
            material={materials['マテリアル.032']}
            position={[0.356, -0.57, 0.357]}
            rotation={[-2.026, 0.944, 0.059]}
            scale={0.736}
          />
          <mesh
            name="平面014"
            castShadow
            receiveShadow
            geometry={nodes.平面014.geometry}
            material={materials['マテリアル.029']}
            position={[0.149, -0.63, 0.468]}
            rotation={[-1.864, 0.203, 2.421]}
            scale={0.734}
          />
          <mesh
            name="立方体001"
            castShadow
            receiveShadow
            geometry={nodes.立方体001.geometry}
            material={materials['マテリアル.013']}
            position={[0, 0.739, 0.008]}
            scale={0.018}
          />
          <mesh
            name="立方体002"
            castShadow
            receiveShadow
            geometry={nodes.立方体002.geometry}
            material={materials['マテリアル.011']}
            position={[0, 0.739, 0.008]}
            scale={0.018}
          />
        </group>
        <group ref={cloudOrbit} name="cloudOrbit">
          <group ref={cloudRef} name="cloud" scale={2.5}>
            {/* cloud 内のメッシュ群（そのまま） */}
            <group
              name="エンプティ"
              position={[-0.353, -0.022, 0.868]}
              rotation={[1.572, 0, 0.358]}
              scale={[0.104, 0.112, 0.211]}>
              <mesh
                name="Roundcube002"
                castShadow
                receiveShadow
                geometry={nodes.Roundcube002.geometry}
                material={materials.PaletteMaterial001}
                position={[0, -0.34, 0.685]}
                scale={[0.621, 0.575, 0.307]}
              />
            </group>
            <group
              name="エンプティ"
              position={[-1.353, -4.022, 3.868]}
              rotation={[1.572, 0, 0.358]}
              scale={[0.104, 0.112, 0.211]}>
              <mesh
                name="Roundcube002"
                castShadow
                receiveShadow
                geometry={nodes.Roundcube002.geometry}
                material={materials.PaletteMaterial001}
                position={[0, -0.34, 0.685]}
                scale={[0.621, 0.575, 0.307]}
              />
            </group>
            {/* 他の cloud メッシュ群もそのまま置く */}
            <group
              name="エンプティ001"
              position={[-0.027, 0.691, 0.045]}
              scale={[0.108, 0.108, 0.237]}>
              <mesh
                name="Roundcube006"
                castShadow
                receiveShadow
                geometry={nodes.Roundcube006.geometry}
                material={materials.PaletteMaterial001}
                position={[0, 0, 0.389]}
                scale={[0.621, 0.791, 0.469]}
              />
            </group>
            <group
              name="エンプティ001"
              position={[-0.527, 1.191, 0.045]}
              scale={[0.108, 0.108, 0.237]}>
              <mesh
                name="Roundcube006"
                castShadow
                receiveShadow
                geometry={nodes.Roundcube006.geometry}
                material={materials.PaletteMaterial001}
                position={[0, 0, 0.389]}
                scale={[0.621, 0.791, 0.469]}
              />
            </group>
            <group
              name="エンプティ001"
              position={[3.527, 1.191, 0.045]}
              scale={[0.108, 0.108, 0.237]}>
              <mesh
                name="Roundcube006"
                castShadow
                receiveShadow
                geometry={nodes.Roundcube006.geometry}
                material={materials.PaletteMaterial001}
                position={[0, 0, 0.389]}
                scale={[0.621, 0.791, 0.469]}
              />
            </group>
            {/* （残りの雲パーツも cloud の中に入れてください） */}
          </group>
        </group>

        {/* 飛行機 */}
        <group ref={planeRef} name="hikouki" scale={5.943}>
          <group name="hikouki_" scale={0.614}>
            <group
              name="エンプティ010"
              position={[0, 0.58, 0.001]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.03, 0.049, 0.03]}>
              <mesh
                name="Roundcube019"
                castShadow
                receiveShadow
                geometry={nodes.Roundcube019.geometry}
                material={materials.PaletteMaterial001}
                position={[0, 0.421, -0.029]}
                scale={[0.57, 0.356, 0.57]}
              />
            </group>
            <group
              name="エンプティ010"
              position={[1, 1.58, 1.001]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.03, 0.049, 0.03]}>
              <mesh
                name="Roundcube019"
                castShadow
                receiveShadow
                geometry={nodes.Roundcube019.geometry}
                material={materials.PaletteMaterial001}
                position={[0, 0.421, -0.029]}
                scale={[0.57, 0.356, 0.57]}
              />
            </group>
            <group
              name="エンプティ010"
              position={[1, 3.58, 2.001]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.03, 0.049, 0.03]}>
              <mesh
                name="Roundcube019"
                castShadow
                receiveShadow
                geometry={nodes.Roundcube019.geometry}
                material={materials.PaletteMaterial001}
                position={[0, 0.421, -0.029]}
                scale={[0.57, 0.356, 0.57]}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/threeImage/world-transformed.glb')