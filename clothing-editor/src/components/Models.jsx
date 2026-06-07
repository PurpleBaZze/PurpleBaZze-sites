import React, { useRef, useState } from 'react';
import { useTexture, Decal, useCursor } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import useStore from '../store';

const LogoDecals = ({ logos }) => {
  return (
    <>
      {logos.map((logo) => (
        <Decal
          key={logo.id}
          position={logo.position}
          rotation={[0, 0, 0]}
          scale={logo.scale}
        >
          <meshBasicMaterial
            map={useTexture(logo.url)}
            polygonOffset
            polygonOffsetFactor={-1}
            transparent
          />
        </Decal>
      ))}
    </>
  );
};

const Tshirt = ({ color, logos }) => (
  <group>
    {/* Torso */}
    <mesh castShadow receiveShadow>
      <boxGeometry args={[1, 1.2, 0.3]} />
      <meshStandardMaterial color={color} />
      <LogoDecals logos={logos} />
    </mesh>
    {/* Sleeves */}
    <mesh position={[0.6, 0.4, 0]} rotation={[0, 0, -Math.PI / 4]}>
      <boxGeometry args={[0.4, 0.2, 0.3]} />
      <meshStandardMaterial color={color} />
    </mesh>
    <mesh position={[-0.6, 0.4, 0]} rotation={[0, 0, Math.PI / 4]}>
      <boxGeometry args={[0.4, 0.2, 0.3]} />
      <meshStandardMaterial color={color} />
    </mesh>
  </group>
);

const Jacket = ({ color, logos }) => (
  <group>
    {/* Torso */}
    <mesh castShadow receiveShadow>
      <boxGeometry args={[1.1, 1.3, 0.4]} />
      <meshStandardMaterial color={color} />
      <LogoDecals logos={logos} />
    </mesh>
    {/* Arms */}
    <mesh position={[0.7, 0.3, 0]} rotation={[0, 0, -Math.PI / 6]}>
      <boxGeometry args={[0.3, 0.8, 0.3]} />
      <meshStandardMaterial color={color} />
    </mesh>
    <mesh position={[-0.7, 0.3, 0]} rotation={[0, 0, Math.PI / 6]}>
      <boxGeometry args={[0.3, 0.8, 0.3]} />
      <meshStandardMaterial color={color} />
    </mesh>
  </group>
);

const Pants = ({ color, logos }) => (
  <group>
    {/* Left Leg */}
    <mesh position={[-0.25, -0.4, 0]} castShadow receiveShadow>
      <boxGeometry args={[0.4, 1.2, 0.25]} />
      <meshStandardMaterial color={color} />
    </mesh>
    {/* Right Leg */}
    <mesh position={[0.25, -0.4, 0]} castShadow receiveShadow>
      <boxGeometry args={[0.4, 1.2, 0.25]} />
      <meshStandardMaterial color={color} />
    </mesh>
    {/* Waist */}
    <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
      <boxGeometry args={[0.9, 0.3, 0.25]} />
      <meshStandardMaterial color={color} />
      <LogoDecals logos={logos} />
    </mesh>
  </group>
);

const Shoes = ({ color, logos }) => (
  <group>
    <mesh position={[-0.4, -0.5, 0.2]} castShadow receiveShadow>
      <boxGeometry args={[0.35, 0.2, 0.7]} />
      <meshStandardMaterial color={color} />
    </mesh>
    <mesh position={[0.4, -0.5, 0.2]} castShadow receiveShadow>
      <boxGeometry args={[0.35, 0.2, 0.7]} />
      <meshStandardMaterial color={color} />
    </mesh>
  </group>
);

const Cap = ({ color, logos }) => (
  <group position={[0, 0.2, 0]}>
    <mesh castShadow receiveShadow>
      <sphereGeometry args={[0.5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial color={color} />
      <LogoDecals logos={logos} />
    </mesh>
    <mesh position={[0, 0, 0.5]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
      <cylinderGeometry args={[0.5, 0.5, 0.05, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  </group>
);

const Mug = ({ color, logos }) => (
  <group>
    <mesh castShadow receiveShadow>
      <cylinderGeometry args={[0.4, 0.4, 1, 32]} />
      <meshStandardMaterial color={color} />
      <LogoDecals logos={logos} />
    </mesh>
    {/* Handle */}
    <mesh position={[0.5, 0, 0]} rotation={[0, 0, 0]}>
      <torusGeometry args={[0.25, 0.05, 16, 32, Math.PI]} />
      <meshStandardMaterial color={color} />
    </mesh>
  </group>
);

const Mousepad = ({ color, logos }) => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow>
    <boxGeometry args={[1.8, 1.2, 0.02]} />
    <meshStandardMaterial color={color} />
    <LogoDecals logos={logos} />
  </mesh>
);

export const ModelManager = ({ item, color, logos }) => {
  const updateLogoPosition = useStore((state) => state.updateLogoPosition);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const onPointerDown = (e) => {
    e.stopPropagation();
    if (logos.length > 0) {
      // In a real app, we'd select which logo to move.
      // Here we'll move the last added one to the clicked point.
      const lastLogo = logos[logos.length - 1];
      updateLogoPosition(lastLogo.id, [e.point.x, e.point.y, e.point.z]);
    }
  };

  const commonProps = {
    onPointerDown,
    onPointerOver: () => setHovered(true),
    onPointerOut: () => setHovered(false)
  };

  return (
    <group {...commonProps}>
      {item === 'tshirt' && <Tshirt color={color} logos={logos} />}
      {item === 'jacket' && <Jacket color={color} logos={logos} />}
      {item === 'pants' && <Pants color={color} logos={logos} />}
      {item === 'shoes' && <Shoes color={color} logos={logos} />}
      {item === 'cap' && <Cap color={color} logos={logos} />}
      {item === 'mug' && <Mug color={color} logos={logos} />}
      {item === 'mousepad' && <Mousepad color={color} logos={logos} />}
    </group>
  );
};
