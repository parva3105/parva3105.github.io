import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 2400
const RADIUS = 12

function genSphere() {
  const pos = new Float32Array(COUNT * 3)
  for (let i = 0; i < COUNT; i++) {
    const i3 = i * 3
    const r = RADIUS * Math.cbrt(Math.random())
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    pos[i3] = r * Math.sin(phi) * Math.cos(theta)
    pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    pos[i3 + 2] = r * Math.cos(phi)
  }
  return pos
}

export default function Scene3D() {
  const ref = useRef(null)
  const pos = useMemo(() => genSphere(), [])
  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    return g
  }, [pos])

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.getElapsedTime() * 0.04
  })

  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial
        transparent
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        color="#06b6d4"
        opacity={0.6}
      />
    </points>
  )
}
