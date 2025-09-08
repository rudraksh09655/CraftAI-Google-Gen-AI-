import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { Suspense } from 'react';

function PotteryWheel() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={[0, 0, 0]}>
        {/* Pottery wheel base */}
        <cylinderGeometry args={[2, 2.2, 0.3, 32]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Clay pot */}
      <mesh position={[0, 0.8, 0]} rotation={[0, Math.PI * 0.1, 0]}>
        <cylinderGeometry args={[0.8, 1, 1.5, 16]} />
        <meshStandardMaterial color="#CD853F" />
      </mesh>
      
      {/* Decorative elements */}
      <mesh position={[2.5, 1, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#DAA520" metalness={0.8} />
      </mesh>
    </Float>
  );
}

function TextilePattern() {
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={[-3, 0, 0]} rotation={[0, 0, Math.PI / 12]}>
        <planeGeometry args={[2, 3]} />
        <meshStandardMaterial 
          color="#FF6B35" 
          transparent 
          opacity={0.8}
        />
      </mesh>
      
      <mesh position={[-2.8, 0.2, 0.1]} rotation={[0, 0, Math.PI / 12]}>
        <planeGeometry args={[0.5, 0.5]} />
        <meshStandardMaterial color="#4A90E2" />
      </mesh>
    </Float>
  );
}

function Jewelry() {
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh position={[3, -1, 1]}>
        <torusGeometry args={[0.4, 0.1, 16, 32]} />
        <meshStandardMaterial color="#FFD700" metalness={1} roughness={0.1} />
      </mesh>
      
      <mesh position={[2.5, -0.5, 0.8]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#FF4500" emissive="#FF4500" emissiveIntensity={0.2} />
      </mesh>
    </Float>
  );
}

export default function CraftScene() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={0.8}
            color="#FFA500"
          />
          <pointLight 
            position={[-10, -10, -5]} 
            intensity={0.4}
            color="#4A90E2"
          />
          
          <PotteryWheel />
          <TextilePattern />
          <Jewelry />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}