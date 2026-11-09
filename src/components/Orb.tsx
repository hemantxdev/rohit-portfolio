import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import type { Mesh } from 'three';
function Core(){const mesh=useRef<Mesh>(null);useFrame((state,delta)=>{if(mesh.current){mesh.current.rotation.y+=delta*.12;mesh.current.rotation.x=Math.sin(state.clock.elapsedTime*.22)*.12;}});return <Float speed={1.2} rotationIntensity={.25} floatIntensity={.45}><Sphere ref={mesh} args={[1.35,96,96]} scale={1.12}><MeshDistortMaterial color="#145ee8" roughness={.18} metalness={.72} distort={.34} speed={1.35} emissive="#06265f" emissiveIntensity={.6}/></Sphere></Float>}
export default function Orb(){return <div className="orb-wrap" aria-label="Abstract blue 3D object"><Canvas camera={{position:[0,0,4.4],fov:42}} dpr={[1,1.5]} gl={{alpha:true,antialias:true}}><ambientLight intensity={.8}/><directionalLight position={[3,3,4]} intensity={2.4} color="#b8d6ff"/><pointLight position={[-3,-1,2]} intensity={22} color="#1265ff"/><Suspense fallback={null}><Core/><Environment preset="city"/></Suspense></Canvas></div>}
