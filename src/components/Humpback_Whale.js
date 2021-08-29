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
            The humpback whale (Megaptera novaeangliae) is a species of baleen whale. It is one of the larger rorqual species, with adults ranging in length from 12–16 m (39–52 ft) and weighing around 25–30 t (28–33 short tons). The humpback has a distinctive body shape, with long pectoral fins and a knobbly head. It is known for breaching and other distinctive surface behaviors, making it popular with whale watchers. This work is based on "Humpback whale" (https://sketchfab.com/3d-models/humpback-whale-2a83b52bfe7f47a1b6c404a90b100dca) by AVINAS (https://sketchfab.com/AVINAS) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
        </div>
    );
}

export default function Humpback_Whale() {
    return (
        <>
            <Link to="/" style={{ margin: "50px", float: "left" }}>Go Back</Link>
            <div className="modelContainer">

                <div className="modelDiv">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={0.25} />
                            <Environment preset="city" />
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                        </Suspense>
                        <OrbitControls autoRotate/>
                    </Canvas>
                </div>

                <div className="modelDetails">
                    <div className="modelTitle">Humpback whale</div>
                    <Details />

                    <div className="QRContainer">
                        <img className="QRCode" src="https://storage.echoar.xyz/wispy-violet-4999/5f893398-cf46-4995-8882-88aa1fca0f42" alt="ChemGlass QR" />
                        <a href="https://go.echoar.xyz/PUC1" target="_blank" rel="noreferrer">
                            <button className="AR_button">View in AR</button>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}
