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
    const { nodes, materials } = useGLTF('/tiger_shark/scene.gltf')
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
                    <group name="RootNode">
                        <group position={[9.55, 29.56, 70.17]} rotation={[0, 1.26, 0]}>
                            <group position={[0, 0, -0.91]}>
                                <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
                            </group>
                        </group>
                        <group position={[-9.55, 29.56, 70.17]} rotation={[-Math.PI, 1.26, 0]} scale={-1}>
                            <group position={[0, 0, -0.91]}>
                                <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
                            </group>
                        </group>
                        <group position={[0, 22.92, 67.16]} rotation={[-Math.PI / 2, 0, 0]}>
                            <group position={[7.07, 1.76, 0.4]}>
                                <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
                                <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
                            </group>
                        </group>
                        <group position={[0.01, 26.71, 67.69]} rotation={[-Math.PI / 2, 0, 0]}>
                            <group position={[6.13, 4.21, 0.64]}>
                                <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
                                <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
                                <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
                            </group>
                        </group>
                        <group rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh geometry={nodes.mesh_7.geometry} material={materials['02_-_Default']} />
                        </group>
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
            The tiger shark (Galeocerdo cuvier) is a species of requiem shark and the only extant member of the genus Galeocerdo. It is a large macropredator, capable of attaining a length over 5 m (16 ft 5 in). Populations are found in many tropical and temperate waters, especially around central Pacific islands. Its name derives from the dark stripes down its body, which resemble a tiger's pattern, but fade as the shark matures.
        </div>
    );
}

export default function Tiger_Shark() {
    return (
        <>
            <Link to="/" style={{ margin: "50px", float: "left" }}>Go Back</Link>
            <div className="modelContainer">

                <div className="modelDiv">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [6, 6, 6], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={0.07} />
                            <Environment preset="city" />
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                        </Suspense>
                        <OrbitControls autoRotate/>
                    </Canvas>
                </div>

                <div className="modelDetails">
                    <div className="modelTitle">Tiger shark</div>
                    <Details />
                    <div className="QRContainer">
                        <img className="QRCode" src="https://storage.echoar.xyz/wispy-violet-4999/02390fca-e971-456c-82e4-3debf8cc3fcf" alt="QR" />
                        <a href="https://go.echoar.xyz/xbJS" target="_blank" rel="noreferrer">
                            <button className="AR_button">View in AR</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
