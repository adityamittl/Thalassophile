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
    const { nodes, materials } = useGLTF('/dotted_white_seal_-_free_giveaway/scene.gltf')
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
                    <mesh geometry={nodes.defaultMaterial.geometry} material={materials.SealBodyTex} />
                    <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.SealEyesTex} />
                </group>
            </group>
        </group>
    )
}

function Details() {
    const snap = useSnapshot(state)
    if (snap.current === "SealEyesTex") {
        return (
            <div className="">
                <div className="heading">Seal eyes</div>
                <dic className="model_details">Seals have large eyes to allow them better vision underwater. On land their vision is greatly reduced. Their lenses are enlarged and almost round, adapted for focusing on light that is refracted upon entering the water. </dic>
            </div>
        )
    }
    else if (snap.current === "SealBodyTex") {
        return (
            <div className="">
                <div className="heading">Seal flippers</div>
                <dic className="model_details">All pinnipeds have four flippers, a layer of blubber, and sensitive whiskers on their snouts. The seal has all of these and a lot more. Like many marine animals, seals have streamlined fusiform bodies, tapered at both ends. </dic>
            </div>
        )
    }
    else {
        return (
            <div>Click on seal to know more</div>
        )
    }

}

export default function Seal() {
    return (
        <>
            <Link to="/" style={{ margin: "50px", float: "left" }}>Go Back</Link>
            <div className="modelContainer">

                <div className="modelDiv">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [6, 0, 6], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={5} />
                            <Environment preset="city" />
                        </Suspense>
                        <OrbitControls />
                    </Canvas>
                </div>

                <div className="modelDetails">
                    <div className="modelTitle">Dotted White Seal</div>
                    <div>The spotted seal (Phoca largha), also known as the larga seal or largha seal, is a member of the family Phocidae, and is considered a "true seal". It inhabits ice floes and waters of the north Pacific Ocean and adjacent seas. It is primarily found along the continental shelf of the Beaufort, Chukchi, Bering and Okhotsk Seas and south to the northern Yellow Sea and it migrates south as far as northern Huanghai and the western Sea of Japan. It is also found in Alaska from the southeastern Bristol Bay to Demarcation Point during the ice-free seasons of summer and autumn when spotted seals mate and have pups.</div>
                    <div className="QRContainer">
                        <img className="QRCode" src="https://storage.echoar.xyz/wispy-violet-4999/35b2e755-d55d-4548-8ced-69399fae58f4" alt="QR" />
                        <a href="https://go.echoar.xyz/UnWT" target="_blank" rel="noreferrer">
                            <button className="AR_button">View in AR</button>
                        </a>
                    </div>
                    <Details />
                </div>
            </div>
        </>
    )
}
