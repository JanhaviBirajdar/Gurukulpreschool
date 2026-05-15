import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function ToyBlock({ position, color, size = [1, 1, 1], rotationSpeed = 0.005 }) {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed
      meshRef.current.rotation.x += rotationSpeed * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <RoundedBox ref={meshRef} args={size} radius={0.15} position={position} castShadow>
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </RoundedBox>
    </Float>
  )
}

function Star({ position, color = '#FFE66D' }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <Float speed={1.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </Float>
  )
}

function Balloon({ position, color }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <Float speed={1} floatIntensity={0.5}>
        <Sphere args={[0.4, 16, 16]}>
          <meshStandardMaterial color={color} roughness={0.2} metalness={0.3} transparent opacity={0.85} />
        </Sphere>
        {/* String */}
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[0.005, 0.005, 0.5, 4]} />
          <meshStandardMaterial color="#999" />
        </mesh>
      </Float>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#fff5f7" />
      <pointLight position={[-3, 3, 2]} intensity={0.4} color="#FF6B9D" />
      <pointLight position={[3, -2, 3]} intensity={0.3} color="#A78BFA" />

      {/* ABC Blocks */}
      <ToyBlock position={[-1.5, -0.5, 0]} color="#FF6B9D" size={[0.9, 0.9, 0.9]} rotationSpeed={0.008} />
      <ToyBlock position={[0, 0.5, 0.5]} color="#4ECDC4" size={[0.8, 0.8, 0.8]} rotationSpeed={0.006} />
      <ToyBlock position={[1.5, -0.3, -0.5]} color="#A78BFA" size={[0.85, 0.85, 0.85]} rotationSpeed={0.007} />
      <ToyBlock position={[0.5, -1.2, 0.3]} color="#FFE66D" size={[0.7, 0.7, 0.7]} rotationSpeed={0.009} />

      {/* Balloons */}
      <Balloon position={[-2, 1.5, -1]} color="#FF6B9D" />
      <Balloon position={[2, 1.8, -0.5]} color="#4ECDC4" />
      <Balloon position={[0, 2, -1.5]} color="#FFE66D" />

      {/* Stars */}
      <Star position={[-2.5, 0.5, 1]} color="#FFE66D" />
      <Star position={[2.5, 1, 0.5]} color="#FF9A56" />
      <Star position={[0, -1.5, 1]} color="#4ECDC4" />
      <Star position={[-1, 2, 0]} color="#A78BFA" />
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  )
}
