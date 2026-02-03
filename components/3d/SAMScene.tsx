"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { PATHS, SCENE_CONFIG } from "@/lib/constants";

// 预加载模型
useGLTF.preload(PATHS.models.worker1);
useGLTF.preload(PATHS.models.bag);
useGLTF.preload(PATHS.models.worker2);

interface ModelProps {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  onHover?: (hovered: boolean) => void;
  onClick?: () => void;
}

function Model({
  url,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  onHover,
  onClick,
}: ModelProps) {
  const { scene } = useGLTF(url);
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // 悬停动画
  useFrame((state) => {
    if (meshRef.current && hovered) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  const handlePointerOver = () => {
    setHovered(true);
    onHover?.(true);
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    setHovered(false);
    onHover?.(false);
    document.body.style.cursor = "default";
  };

  return (
    <group
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      <primitive object={scene.clone()} />
      {/* 高亮效果 */}
      {hovered && (
        <mesh scale={1.1}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial
            color="#00ff00"
            transparent
            opacity={0.2}
            wireframe
          />
        </mesh>
      )}
    </group>
  );
}

function BackgroundPlane() {
  const texture = useTexture(PATHS.images.demoScene);

  return (
    <mesh position={[0, 0, -5]} rotation={[0, 0, 0]}>
      <planeGeometry args={[16, 9]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

function Scene() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  return (
    <>
      {/* 环境光 */}
      <ambientLight intensity={SCENE_CONFIG.lights.ambient.intensity} />

      {/* 方向光 */}
      <directionalLight
        position={SCENE_CONFIG.lights.directional.position}
        intensity={SCENE_CONFIG.lights.directional.intensity}
        castShadow
      />

      {/* 背景平面（demo_scene.png） */}
      <Suspense fallback={null}>
        <BackgroundPlane />
      </Suspense>

      {/* 3D 模型 */}
      <Suspense fallback={null}>
        <Model
          url={PATHS.models.worker1}
          position={[-2, -0.5, 2]}
          rotation={[0, Math.PI / 4, 0]}
          scale={1.4}
          onHover={(hovered) => console.log("Worker 1 hovered:", hovered)}
          onClick={() => setSelectedModel("worker1")}
        />

        <Model
          url={PATHS.models.bag}
          position={[0, 0, 0.5]}
          scale={0.8}
          onHover={(hovered) => console.log("Bag hovered:", hovered)}
          onClick={() => setSelectedModel("bag")}
        />

        <Model
          url={PATHS.models.worker2}
          position={[2, -0.5, 2]}
          rotation={[0, - Math.PI / 6, 0]}
          scale={1}
          onHover={(hovered) => console.log("Worker 2 hovered:", hovered)}
          onClick={() => setSelectedModel("worker2")}
        />
      </Suspense>

      {/* 环境贴图 */}
      <Environment preset="city" />

      {/* 相机控制 */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        maxDistance={15}
        minDistance={5}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export function SAMScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          fov: SCENE_CONFIG.camera.fov,
          near: SCENE_CONFIG.camera.near,
          far: SCENE_CONFIG.camera.far,
          position: SCENE_CONFIG.camera.position,
        }}
        shadows
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>

      {/* 加载提示 */}
      <div className="pointer-events-none absolute bottom-4 left-4 text-sm text-white/70">
        マウスでドラッグして回転
      </div>
    </div>
  );
}
