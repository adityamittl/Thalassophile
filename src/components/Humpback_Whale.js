import React, { Suspense, useRef, useState } from "react"
import "./White_Shark.css"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
    current: null,
})

function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/humpback_whale/scene.gltf')
    const [hovered, set] = useState(null)
    return (
        <group ref={group} {...props} dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.desirefxme_001_BottlenoseDolphin_0.geometry} material={materials.BottlenoseDolphin} />
          <mesh geometry={nodes.desirefxme_002_BottlenoseDolphin_0.geometry} material={materials.BottlenoseDolphin_0} />
        </group>
      </group>
        </group>
    )
}

function Details() {
    const snap = useSnapshot(state)
    return (
        <div className="pb-12 w-full ">
            {snap.current}
        </div>
    );
}

export default function Humpback_Whale() {
    return (
        <div className="modelContainer">

            <div className="modelDiv">
                <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                    <ambientLight intensity={0.7} />
                    <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                    <Suspense fallback={null}>
                        <Model scale={0.3} />
                        <Environment preset="city" />
                        <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                    </Suspense>
                    <OrbitControls />
                </Canvas>
            </div>

            <div className="modelDetails">
                <Details />
            </div>

        </div>
    )
}
