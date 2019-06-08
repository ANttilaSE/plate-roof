import React, { useState, useEffect } from "react";

export const Editor = () => {
  let mount, scene, camera, renderer;
  const [initialized, setInitialized] = useState(false);
  
  useEffect(() => {
    if (!initialized) {
      const width = mount.clientWidth
      const height = mount.clientHeight

      scene = new THREE.Scene()
      setInitialized(true);
    }
  })

  return (
    <div
      style={{ width: '400px', height: '400px' }}
      ref={(x) => { mount = x }}
    />
  )
}
