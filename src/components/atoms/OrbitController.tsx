// import React, { useRef } from "react";
// import {
//   extend,
//   ReactThreeFiber,
//   useThree,
//   useFrame,
// } from "@react-three/fiber";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// extend({ OrbitControls });

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       readonly orbitControls: ReactThreeFiber.Object3DNode<
//         OrbitControls,
//         typeof OrbitControls
//       >;
//     }
//   }
// }


// const OrbitController: React.FC = (props: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>) => {
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();
//   const controls = useRef({} as OrbitControls);
//   useFrame(() => controls.current.update());
//   return (
//     <orbitControls {...props} ref={controls} args={[camera, domElement]} />
//   );
// }

// export default OrbitController;

import React, { useRef } from 'react';
import { ReactThreeFiber, extend, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

// インターフェイスIntrinsicElementsにorbitControls の定義を追加
declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Node<OrbitControls, typeof OrbitControls>
    }
  }
}

type ControlProps = {
  isControl: boolean;
}

export const OrbitController: React.FC<ControlProps> = (props) => {
  const controlsRef = useRef<OrbitControls>();
  const { camera, gl } = useThree();

  useFrame(() => {
    controlsRef.current?.update();
  });

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enabled={props.isControl}
      enableZoom={true}
      zoomSpeed={1.0}
      enableRotate={true}
      rotateSpeed={1.0}
      enablePan={true}
      panSpeed={2.0}
      minDistance={0}
      maxDistance={Infinity}
      minPolarAngle={0}
      maxPolarAngle={Math.PI}
    />
  );
}