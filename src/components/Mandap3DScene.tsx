import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Sparkles as SparkleIcon, RotateCw } from 'lucide-react';

const GoldenTempleMandapModel: React.FC<{ autoRotate: boolean }> = ({ autoRotate }) => {
  const mandapRef = useRef<THREE.Group>(null);
  const flameRef = useRef<THREE.Mesh>(null);
  const innerFlameRef = useRef<THREE.Mesh>(null);
  const diyasRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mandapRef.current && autoRotate) {
      mandapRef.current.rotation.y = t * 0.25;
    }
    if (flameRef.current) {
      flameRef.current.scale.y = 1 + Math.sin(t * 7) * 0.15;
      flameRef.current.scale.x = 1 + Math.cos(t * 5) * 0.08;
      flameRef.current.rotation.y = t * 2;
    }
    if (innerFlameRef.current) {
      innerFlameRef.current.scale.y = 1 + Math.cos(t * 9) * 0.18;
    }
    if (diyasRef.current) {
      diyasRef.current.rotation.y = -t * 0.4;
      diyasRef.current.position.y = Math.sin(t * 1.5) * 0.06;
    }
  });

  const pillarPositions: [number, number, number][] = [
    [-1.35, 0, -1.35],
    [1.35, 0, -1.35],
    [-1.35, 0, 1.35],
    [1.35, 0, 1.35],
  ];

  return (
    <group ref={mandapRef} position={[0, -0.45, 0]}>
      {/* Two-Tiered Royal Mandap Base Platform */}
      <mesh position={[0, -1.05, 0]}>
        <cylinderGeometry args={[2.35, 2.55, 0.22, 32]} />
        <meshStandardMaterial color="#6B1020" roughness={0.4} metalness={0.3} />
      </mesh>
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[2.05, 2.2, 0.14, 32]} />
        <meshStandardMaterial color="#D4AF62" roughness={0.25} metalness={0.85} />
      </mesh>

      {/* Four Ornate Carved Golden Temple Pillars */}
      {pillarPositions.map((pos, idx) => (
        <group key={idx} position={pos}>
          {/* Pillar Pedestal */}
          <mesh position={[0, -0.7, 0]}>
            <boxGeometry args={[0.36, 0.28, 0.36]} />
            <meshStandardMaterial color="#C59B27" roughness={0.3} metalness={0.85} />
          </mesh>
          {/* Main Fluted Pillar Shaft */}
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.12, 0.15, 1.75, 16]} />
            <meshStandardMaterial color="#D4AF62" roughness={0.2} metalness={0.9} />
          </mesh>
          {/* Decorative Gold Rings on Pillar */}
          {[-0.2, 0.25, 0.7].map((ry, rIdx) => (
            <mesh key={rIdx} position={[0, ry, 0]}>
              <torusGeometry args={[0.145, 0.025, 12, 24]} />
              <meshStandardMaterial color="#FCF6BA" roughness={0.15} metalness={0.95} />
            </mesh>
          ))}
          {/* Pillar Capital */}
          <mesh position={[0, 1.1, 0]}>
            <boxGeometry args={[0.38, 0.18, 0.38]} />
            <meshStandardMaterial color="#D4AF62" roughness={0.25} metalness={0.85} />
          </mesh>
        </group>
      ))}

      {/* Upper Canopy Beams & Toran Archway */}
      <mesh position={[0, 1.25, 0]}>
        <boxGeometry args={[3.15, 0.16, 3.15]} />
        <meshStandardMaterial color="#8F192E" roughness={0.35} metalness={0.45} />
      </mesh>
      <mesh position={[0, 1.38, 0]}>
        <boxGeometry args={[2.9, 0.12, 2.9]} />
        <meshStandardMaterial color="#D4AF62" roughness={0.25} metalness={0.88} />
      </mesh>

      {/* Temple Gopuram / Shikhara Dome */}
      <mesh position={[0, 1.85, 0]}>
        <coneGeometry args={[1.95, 0.9, 8]} />
        <meshStandardMaterial color="#6B1020" roughness={0.35} metalness={0.5} />
      </mesh>
      <mesh position={[0, 2.25, 0]}>
        <sphereGeometry args={[0.55, 24, 16]} />
        <meshStandardMaterial color="#D4AF62" roughness={0.2} metalness={0.92} />
      </mesh>
      {/* Sacred Golden Kalash Finial at Peak */}
      <mesh position={[0, 2.82, 0]}>
        <coneGeometry args={[0.14, 0.45, 16]} />
        <meshStandardMaterial color="#FCF6BA" roughness={0.1} metalness={0.98} />
      </mesh>

      {/* Sacred Havan Kund (Agni Altar) in the Center */}
      <group position={[0, -0.68, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.78, 0.24, 0.78]} />
          <meshStandardMaterial color="#9C7A32" roughness={0.3} metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.14, 0]}>
          <boxGeometry args={[0.62, 0.12, 0.62]} />
          <meshStandardMaterial color="#4A0815" roughness={0.5} />
        </mesh>

        {/* Sacred Agni Flame */}
        <mesh ref={flameRef} position={[0, 0.42, 0]}>
          <coneGeometry args={[0.22, 0.58, 12]} />
          <meshStandardMaterial
            color="#F59E0B"
            emissive="#EA580C"
            emissiveIntensity={1.8}
            transparent
            opacity={0.9}
          />
        </mesh>
        <mesh ref={innerFlameRef} position={[0, 0.36, 0]}>
          <coneGeometry args={[0.11, 0.38, 12]} />
          <meshStandardMaterial
            color="#FFF8EA"
            emissive="#FFD700"
            emissiveIntensity={2.2}
          />
        </mesh>
        <pointLight position={[0, 0.6, 0]} intensity={2.4} color="#FF9900" distance={5} />
      </group>

      {/* Orbiting Auspicious Floating Diyas */}
      <group ref={diyasRef} position={[0, -0.55, 0]}>
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 1.85;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          return (
            <group key={i} position={[x, 0, z]}>
              <mesh>
                <cylinderGeometry args={[0.09, 0.05, 0.06, 12]} />
                <meshStandardMaterial color="#D4AF62" metalness={0.85} roughness={0.2} />
              </mesh>
              <mesh position={[0, 0.07, 0]}>
                <sphereGeometry args={[0.035, 8, 8]} />
                <meshStandardMaterial color="#FFF8EA" emissive="#F59E0B" emissiveIntensity={2} />
              </mesh>
            </group>
          );
        })}
      </group>
    </group>
  );
};

export const Mandap3DScene: React.FC = () => {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="relative w-full max-w-4xl mx-auto my-12 rounded-2xl border border-[#D4AF62]/40 bg-gradient-to-b from-[#3D0711]/90 via-[#240309]/95 to-[#1A0206]/95 overflow-hidden gold-glow">
      {/* Header Banner inside 3D Mandap Viewer */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-4 border-b border-[#D4AF62]/25 bg-[#240309]/70 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <SparkleIcon className="w-5 h-5 text-[#D4AF62]" />
          <div>
            <h4 className="font-display text-sm sm:text-base text-gold-foil tracking-wider uppercase">
              Interactive 3D Suvarna Vivah Mandapam
            </h4>
            <p className="text-xs text-[#FFF8EA]/70 font-sans">
              Drag to rotate • Scroll or pinch to inspect the sacred Agni altar &amp; golden pillars
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setAutoRotate((prev) => !prev)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans font-medium border border-[#D4AF62]/50 bg-[#6B1020]/60 hover:bg-[#D4AF62] hover:text-[#240309] text-[#FFF8EA] transition-all"
        >
          <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
          {autoRotate ? 'Auto-Rotating' : 'Paused Rotation'}
        </button>
      </div>

      {/* 3D Canvas Viewport */}
      <div className="relative w-full h-[320px] sm:h-[380px] cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 1.4, 4.9], fov: 45 }}>
          <ambientLight intensity={0.75} />
          <directionalLight position={[5, 8, 5]} intensity={1.6} color="#FFF8EA" />
          <pointLight position={[-4, 3, -3]} intensity={1.2} color="#D4AF62" />
          <GoldenTempleMandapModel autoRotate={autoRotate} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.1}
          />
        </Canvas>

        {/* Bottom Caption Overlay */}
        <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none">
          <span className="inline-block px-4 py-1 rounded-full bg-[#240309]/80 border border-[#D4AF62]/30 text-xs text-[#F3E5AB] tracking-widest uppercase">
            Sacred Sapthapadi Altar • Seven Vows Around Agni
          </span>
        </div>
      </div>
    </div>
  );
};

