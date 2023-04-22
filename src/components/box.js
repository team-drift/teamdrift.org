import { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box as NativeBox } from '@react-three/drei';

export default function Box(props) {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <NativeBox
      args={[1, 1, 1]}
      {...props}
      ref={mesh}
      scale={[20, 20, 20]}
    >
      <meshStandardMaterial
        attach="material"
        color={'#720b23'}
      />
    </NativeBox>
  );
}
