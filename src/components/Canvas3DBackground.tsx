import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface PetalParticle {
  position: [number, number, number];
  rotation: [number, number, number];
  speedY: number;
  speedX: number;
  rotSpeed: [number, number, number];
  scale: number;
  color: string;
}

const FloatingPetalsAndGold3D: React.FC<{ count?: number }> = ({ count = 42 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Create petal particles data
  const petals = useMemo<PetalParticle[]>(() => {
    const palette = [
      '#D4AF62', // Antique Gold
      '#F59E0B', // Saffron Marigold
      '#9E1B32', // Crimson Rose
      '#FFF8EA', // Jasmine Mogra
      '#FFD700', // Bright Gold
    ];
    return Array.from({ length: count }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8 - 1,
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ],
      speedY: 0.008 + Math.random() * 0.014,
      speedX: (Math.random() - 0.5) * 0.006,
      rotSpeed: [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.015,
      ],
      scale: 0.09 + Math.random() * 0.12,
      color: palette[i % palette.length],
    }));
  }, [count]);

  // Create golden dust sparkles geometry
  const sparklePositions = useMemo(() => {
    const numPoints = 120;
    const positions = new Float32Array(numPoints * 3);
    for (let i = 0; i < numPoints; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return positions;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.children.forEach((child, idx) => {
        const p = petals[idx];
        if (!p) return;
        child.position.y -= p.speedY;
        child.position.x += Math.sin(t * 0.8 + idx) * 0.004 + p.speedX;
        child.rotation.x += p.rotSpeed[0];
        child.rotation.y += p.rotSpeed[1];
        child.rotation.z += p.rotSpeed[2];

        // Wrap around top when falling below view
        if (child.position.y < -7.5) {
          child.position.y = 7.5;
          child.position.x = (Math.random() - 0.5) * 18;
        }
      });
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = Math.sin(t * 0.12) * 0.15;
      pointsRef.current.position.y = Math.cos(t * 0.25) * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.85} />
      <pointLight position={[5, 6, 5]} intensity={1.8} color="#FFD700" />
      <pointLight position={[-5, -4, 3]} intensity={1.2} color="#E66C1E" />

      {/* 3D Floating Flower Petals */}
      <group ref={groupRef}>
        {petals.map((p, idx) => (
          <mesh
            key={idx}
            position={p.position}
            rotation={p.rotation}
            scale={[p.scale, p.scale * 1.35, p.scale * 0.3]}
          >
            <sphereGeometry args={[1, 8, 8]} />
            <meshStandardMaterial
              color={p.color}
              roughness={0.35}
              metalness={p.color === '#D4AF62' || p.color === '#FFD700' ? 0.75 : 0.15}
              transparent
              opacity={0.78}
            />
          </mesh>
        ))}
      </group>

      {/* Golden Dust Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={sparklePositions.length / 3}
            array={sparklePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.075}
          color="#FCF6BA"
          transparent
          opacity={0.65}
          sizeAttenuation
        />
      </points>
    </>
  );
};

export const Canvas3DBackground: React.FC = () => {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <FloatingPetalsAndGold3D count={38} />
      </Canvas>
    </div>
  );
};

