import * as THREE from 'three';

const width = window.innerWidth;
const height = window.innerHeight;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
const canvas = renderer.domElement;

const rendererDom = document.getElementById('renderer');
if (rendererDom) {
  rendererDom.appendChild(canvas);
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000.0);
camera.position.z = 5.0;

const geometry = new THREE.BoxGeometry(1.0, 1.0, 1.0);
const material = new THREE.MeshPhongMaterial({ color: '#fff' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1.0);
scene.add(directionalLight);
const ambientLight = new THREE.AmbientLight(0x111111, 1.0);
scene.add(ambientLight);

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  mesh.rotation.z += 0.01;
  renderer.render(scene, camera);
}

animate();
