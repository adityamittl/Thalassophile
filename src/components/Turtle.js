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
    const { nodes, materials } = useGLTF('/model_72a_-_juvenile_leatherback_sea_turtle/scene.gltf')
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
                    <group name="leatherbackjuv_armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh
                            geometry={nodes.leatherbackjuv_body_leatherbackjuv_body_0.geometry}
                            material={nodes.leatherbackjuv_body_leatherbackjuv_body_0.material}
                            skeleton={nodes.leatherbackjuv_body_leatherbackjuv_body_0.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.leatherbackjuv_eye_leatherbackjuv_eye_0.geometry}
                            material={materials.leatherbackjuv_eye}
                            skeleton={nodes.leatherbackjuv_eye_leatherbackjuv_eye_0.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.leatherbackjuv_eye_leatherbackjuv_body_0.geometry}
                            material={nodes.leatherbackjuv_eye_leatherbackjuv_body_0.material}
                            skeleton={nodes.leatherbackjuv_eye_leatherbackjuv_body_0.skeleton}
                        />
                        <skinnedMesh
                            geometry={nodes.leatherbackjuv_membrane_leatherbackjuv_membrane_0.geometry}
                            material={materials.leatherbackjuv_membrane}
                            skeleton={nodes.leatherbackjuv_membrane_leatherbackjuv_membrane_0.skeleton}
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
            Once hatchlings leave the nest, they are often not seen again until they return to coastal waters years later as juveniles. Loggerheads that are born on the east coast of the U.S. however, have been tracked out into the Atlantic, into an area known as the Sargasso Sea.
        </div>
    );
}

export default function Turtle() {
    return (
        <>
            <Link to="/" style={{ margin: "50px", float: "left" }}>Go Back</Link>
            <div className="modelContainer">

                <div className="modelDiv">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [6, 6, 6], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={0.65} />
                            <Environment preset="city" />
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                        </Suspense>
                        <OrbitControls />
                    </Canvas>
                </div>

                <div className="modelDetails">
                    <div className="modelTitle">Juvenile Leatherback Sea Turtle</div>
                    <Details />
                </div>
            </div>
        </>
    )
}
