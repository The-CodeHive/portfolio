import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import { Object3DNode } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeJS {
    MeshLineGeometry: typeof MeshLineGeometry;
    MeshLineMaterial: typeof MeshLineMaterial;
  }
}
    