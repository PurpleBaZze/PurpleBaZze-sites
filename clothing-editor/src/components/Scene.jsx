import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment, Center } from '@react-three/drei';
import { ModelManager } from './Models';
import useStore from '../store';

const Scene = () => {
  const activeItem = useStore((state) => state.activeItem);
  const color = useStore((state) => state.color);
  const logos = useStore((state) => state.logos);

  return (
    <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }} gl={{ preserveDrawingBuffer: true }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />

      <Suspense fallback={null}>
        <Center>
          <ModelManager item={activeItem} color={color} logos={logos} />
        </Center>
        <Environment preset="city" />
        <ContactShadows position={[0, -1.5, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
      </Suspense>

      <OrbitControls makeDefault />
    </Canvas>
  );
};

export default Scene;
