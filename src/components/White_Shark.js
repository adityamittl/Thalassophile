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
    const { nodes, materials } = useGLTF('/great_white_shark/scene.gltf')
    const [hovered, set] = useState(null)
    return (
        <group ref={group} {...props} dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[-1.68, -3.2, -1.1]}>
                    <mesh geometry={nodes.mesh_0.geometry} material={materials.Material0} />
                    <mesh geometry={nodes.mesh_1.geometry} material={materials.Material1} />
                </group>
            </group>
        </group>
    )
}

function Details() {
    const snap = useSnapshot(state)
    if (snap.current === "Material0") {
        return (
            <div className="">
                <div className="heading">Shark fins</div>
                <dic className="model_details">Fins provide balance and stability in the water. Sharks have a large dorsal fin which provides balance. Usually they'll also have a smaller dorsal fin further back towards their tail. Their pectoral fins are used to steer and lift themselves in the water. And their tails are used to propel themselves forward.</dic>
            </div>
        )
    }
    else {
        return (
            <div>Click on shark to know more</div>
        )
    }

}

export default function White_Shark() {
    return (
        <>
            <Link to="/" style={{ margin: "50px", float: "left" }}>Go Back</Link>
            <div className="modelContainer">

                <div className="modelDiv">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [6, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={1.2} />
                            <Environment preset="city" />
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                        </Suspense>
                        <OrbitControls />
                    </Canvas>
                </div>

                <div className="modelDetails">
                    <div className="modelTitle">Great white shark</div>
                    The great white shark (Carcharodon carcharias), also known as the white shark, white pointer, or simply great white, is a species of large mackerel shark which can be found in the coastal surface waters of all the major oceans. It is notable for its size, with larger female individuals growing to 6.1 m (20 ft) in length and 1,905–2,268 kg (4,200–5,000 lb) in weight at maturity. However, most are smaller; males measure 3.4 to 4.0 m (11 to 13 ft), and females measure 4.6 to 4.9 m (15 to 16 ft) on average.
                    <div className="QRContainer">
                        <img className="QRCode" src="https://storage.echoar.xyz/wispy-violet-4999/1c291dfc-cb29-42ca-b795-9b347f5d40fc" alt="QR" />
                        <a href="https://go.echoar.xyz/T6se" target="_blank" rel="noreferrer">
                            <button className="AR_button">View in AR</button>
                        </a>
                    </div>
                    <Details />
                </div>
            </div>
        </>
    )
}
