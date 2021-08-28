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
    const { nodes, materials } = useGLTF('/model_54a_-_caribbean_reef_shark/scene.gltf')
    const [hovered, set] = useState(null)
    return (
        <group ref={group} {...props} dispose={null}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
        <primitive object={nodes.CRS_Armature_rootJoint} />
        <skinnedMesh
          geometry={nodes.Carribean_Shark001_0.geometry}
          material={materials.Diffuse_Eye}
          skeleton={nodes.Carribean_Shark001_0.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Carribean_Shark001_1.geometry}
          material={materials.CRS_Material}
          skeleton={nodes.Carribean_Shark001_1.skeleton}
        />
      </group>
        </group>
    )
}

function Details() {
    const snap = useSnapshot(state)
    return (
        <div className="pb-12 w-full ">
            {snap.current}
            The Caribbean reef shark (Carcharhinus perezi) is a species of requiem shark, belonging to the family Carcharhinidae. It is found in the tropical waters of the western Atlantic Ocean from Florida to Brazil, and is the most commonly encountered reef shark in the Caribbean Sea. With a robust, streamlined body typical of the requiem sharks, this species is difficult to tell apart from other large members of its family such as the dusky shark (C. obscurus) and the silky shark (C. falciformis).
        </div>
    );
}

export default function White_Shark() {
    return (
        <>
            <Link to="/" style={{ margin: "50px", float: "left" }}>Go Back</Link>
            <div className="modelContainer">

                <div className="modelDiv">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model scale={0.8} />
                            <Environment preset="city" />
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                        </Suspense>
                        <OrbitControls />
                    </Canvas>
                </div>

                <div className="modelDetails">
                    <div className="modelTitle">Caribbean reef shark</div>
                    <Details />
                </div>
            </div>
        </>
    )
}
