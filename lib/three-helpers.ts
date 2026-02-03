/**
 * Three.js 辅助函数
 */

import * as THREE from "three";

/**
 * 创建高亮材质
 */
export function createHighlightMaterial(color: string = "#00ff00") {
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    emissive: new THREE.Color(color),
    emissiveIntensity: 0.5,
    metalness: 0.1,
    roughness: 0.4,
  });
}

/**
 * 预加载纹理
 */
export function preloadTexture(url: string): Promise<THREE.Texture> {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();
    loader.load(
      url,
      (texture) => resolve(texture),
      undefined,
      (error) => reject(error)
    );
  });
}

/**
 * 计算包围盒中心
 */
export function getBoundingBoxCenter(object: THREE.Object3D): THREE.Vector3 {
  const box = new THREE.Box3().setFromObject(object);
  const center = new THREE.Vector3();
  box.getCenter(center);
  return center;
}

/**
 * 自动调整相机位置以适应对象
 */
export function fitCameraToObject(
  camera: THREE.PerspectiveCamera,
  object: THREE.Object3D,
  offset: number = 1.5
) {
  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());

  const maxSize = Math.max(size.x, size.y, size.z);
  const fitHeightDistance =
    maxSize / (2 * Math.atan((Math.PI * camera.fov) / 360));
  const fitWidthDistance = fitHeightDistance / camera.aspect;
  const distance = offset * Math.max(fitHeightDistance, fitWidthDistance);

  camera.position.copy(center);
  camera.position.z += distance;
  camera.lookAt(center);
}
