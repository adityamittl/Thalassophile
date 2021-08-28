import React, { Suspense, useRef, useState } from "react"
import "./White_Shark.css"
import { Link } from "react-router-dom"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
    current: null,
})

function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/model_73a_-_great_hammerhead_shark/scene.gltf')
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
                    <group position={[0, 0.02, 0.06]}>
                        <primitive object={nodes.GLTF_created_0_rootJoint} />
                        <skinnedMesh
                            geometry={nodes.mesh_0.geometry}
                            material={nodes.mesh_0.material}
                            skeleton={nodes.mesh_0.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.mesh_1.geometry}
                            material={materials['eye.003']}
                            skeleton={nodes.mesh_1.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.mesh_2.geometry}
                            material={nodes.mesh_2.material}
                            skeleton={nodes.mesh_2.skeleton}
                        />
                    </group>
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
            The great hammerhead (Sphyrna mokarran) is the largest species of hammerhead shark, belonging to the family Sphyrnidae, attaining an average length of 4.6 m (15 ft) and reaching a maximum length of 6.1 m (20 ft). It is found in tropical and warm temperate waters worldwide, inhabiting coastal areas and the continental shelf. The great hammerhead can be distinguished from other hammerheads by the shape of its "hammer" (called the "cephalofoil"), which is wide with an almost straight front margin, and by its tall, sickle-shaped first dorsal fin. This work is based on "Model 73A - Great Hammerhead Shark" (https://sketchfab.com/3d-models/model-73a-great-hammerhead-shark-77d52f2b0e084fe7bcefbc86b920f080) by DigitalLife3D (https://sketchfab.com/DigitalLife3D) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
        </div>
    );
}

export default function Hammer_Head() {
    return (
        <>
            <Link to="/" style={{ margin: "50px", float: "left" }}>Go Back</Link>
            <div className="modelContainer">

                <div className="modelDiv">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [6, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={2} />
                            <Environment preset="city" />
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                        </Suspense>
                        <OrbitControls />
                    </Canvas>
                </div>

                <div className="modelDetails">
                    <div className="modelTitle">Great hammerhead</div>
                    <Details />
                </div>
            </div>
        </>
    )
}
