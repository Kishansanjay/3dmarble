import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Share2, RotateCw, Eye, Rotate3D } from 'lucide-react';
import { Product } from '../../data/products';

interface MarbleSlabViewerProps {
  product: Product;
}

interface MagnifierCallout {
  id: string;
  title: string;
  subtitle: string;
  anchor3D: { x: number; y: number; z: number };
  position: 'top-left' | 'mid-left' | 'top-right' | 'mid-right';
}

export const MarbleSlabViewer: React.FC<MarbleSlabViewerProps> = ({ product }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [is3DMode, setIs3DMode] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [activeCalloutId, setActiveCalloutId] = useState<string | null>(null);
  const [copiedShare, setCopiedShare] = useState(false);

  // References for Three.js state
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const blockMeshRef = useRef<THREE.Mesh | null>(null);
  const targetRotationRef = useRef<{ x: number; y: number }>({ x: 0.3, y: -0.5 });
  const currentRotationRef = useRef<{ x: number; y: number }>({ x: 0.3, y: -0.5 });
  const previousMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const [projectedCoords, setProjectedCoords] = useState<Record<string, { x: number; y: number }>>({});

  // Primary texture image for 3D showcase (texturebg.png)
  const currentImage = product.textureImage || product.images[0] || '/assets/images/gallery/Banner.jpg';

  const callouts: MagnifierCallout[] = [
    {
      id: 'top-surface',
      title: 'Natural Marble Pattern',
      subtitle: 'Unique veining and texture in every piece, making each cube one of a kind.',
      anchor3D: { x: -0.2, y: 1.15, z: 0.1 },
      position: 'top-left'
    },
    {
      id: 'front-surface',
      title: 'Premium Marble Surface',
      subtitle: 'Smooth yet textured finish with a natural matte feel.',
      anchor3D: { x: -0.6, y: -0.2, z: 1.15 },
      position: 'mid-left'
    },
    {
      id: 'raw-edge',
      title: 'Raw & Natural Edges',
      subtitle: 'Hand-finished rough edges for an authentic, natural look.',
      anchor3D: { x: 1.15, y: 1.0, z: 1.05 },
      position: 'top-right'
    },
    {
      id: 'rough-texture',
      title: 'Rough Stone Texture',
      subtitle: 'Naturally textured sides for a bold, organic appearance.',
      anchor3D: { x: 1.15, y: -0.4, z: 0.3 },
      position: 'mid-right'
    }
  ];

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || !is3DMode) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const width = container.clientWidth;
    const isMobile = width < 576;
    const height = isMobile ? 380 : width < 992 ? 460 : 580;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 6.2);
    cameraRef.current = camera;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // 3. Studio Lighting matching top-left spotlight ray in background image
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xfffaee, 4.2);
    spotLight.position.set(-4.5, 6.5, 4.0);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.6;
    spotLight.decay = 1.2;
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.bias = -0.0001;
    scene.add(spotLight);

    const fillLight = new THREE.DirectionalLight(0xddeeff, 1.0);
    fillLight.position.set(4, 2, 4);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xffffff, 1.2, 8);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    // 4. Create 3D Marble Block Geometry
    const boxWidth = 2.3;
    const boxHeight = 2.3;
    const boxDepth = 2.3;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth, 32, 32, 32);

    // Add organic vertex displacement on side/back vertices to simulate raw hand-chiseled stone edges
    const posAttribute = geometry.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < posAttribute.count; i++) {
      vertex.fromBufferAttribute(posAttribute, i);

      if (Math.abs(vertex.x) > 1.1 || vertex.z < -1.05 || vertex.y > 1.1) {
        const noise = (Math.sin(vertex.x * 12) + Math.cos(vertex.y * 14) + Math.sin(vertex.z * 10)) * 0.045;
        vertex.x += noise * 0.5;
        vertex.y += noise * 0.5;
        vertex.z += noise * 0.5;
      }

      posAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    geometry.computeVertexNormals();

    // 5. Textures & Materials (Full 6-Side Marble Texture Integration)
    const textureLoader = new THREE.TextureLoader();

    // Load Marble Texture for ALL 6 Sides
    const marbleTexture = textureLoader.load(currentImage, () => {
      renderer.render(scene, camera);
    });
    marbleTexture.colorSpace = THREE.SRGBColorSpace;
    marbleTexture.wrapS = THREE.RepeatWrapping;
    marbleTexture.wrapT = THREE.RepeatWrapping;

    // Load Marble Roughness Map Texture (/textures/marble-roughness.jpg)
    const roughnessTexture = textureLoader.load('/textures/marble-roughness.jpg');
    roughnessTexture.wrapS = THREE.RepeatWrapping;
    roughnessTexture.wrapT = THREE.RepeatWrapping;
    roughnessTexture.repeat.set(3, 3);

    // Polished Marble Material for Front & Top Faces
    const polishedMarbleMaterial = new THREE.MeshStandardMaterial({
      color: 0xf2f0eb,
      map: marbleTexture,
      roughnessMap: roughnessTexture,
      roughness: 0.55,
      metalness: 0.0
    });

    // Side & Back Marble Material (Marble Texture + Rough Stone Bump Map for Full 6 Sides)
    const sideMarbleMaterial = new THREE.MeshStandardMaterial({
      color: 0xf2f0eb,
      map: marbleTexture,
      roughnessMap: roughnessTexture,
      roughness: 0.65,
      metalness: 0.0,
      bumpMap: roughnessTexture,
      bumpScale: 0.03
    });

    // Box Materials: [right, left, top, bottom, front, back] - All 6 faces display marbleTexture!
    const materials = [
      sideMarbleMaterial,     // Right side (+X)
      sideMarbleMaterial,     // Left side (-X)
      polishedMarbleMaterial, // Top side (+Y)
      sideMarbleMaterial,     // Bottom side (-Y)
      polishedMarbleMaterial, // Front face (+Z)
      sideMarbleMaterial      // Back face (-Z)
    ];

    const blockMesh = new THREE.Mesh(geometry, materials);
    blockMesh.position.set(0, 0, 0);
    blockMesh.castShadow = true;
    blockMesh.receiveShadow = true;
    scene.add(blockMesh);
    blockMeshRef.current = blockMesh;

    // 6. Contact Shadow Receiver Floor
    const shadowFloorGeo = new THREE.PlaneGeometry(12, 12);
    const shadowFloorMat = new THREE.ShadowMaterial({ opacity: 0.35 });
    const shadowFloor = new THREE.Mesh(shadowFloorGeo, shadowFloorMat);
    shadowFloor.rotation.x = -Math.PI / 2;
    shadowFloor.position.y = -1.22;
    shadowFloor.receiveShadow = true;
    scene.add(shadowFloor);

    // 7. Animation Loop with smooth lerp physics and 3D to 2D projection calculation
    let animationFrameId: number;

    const updateProjections = () => {
      if (!blockMeshRef.current || !cameraRef.current || !containerRef.current) return;

      const container = containerRef.current;
      const w = container.clientWidth;
      const h = container.clientHeight;
      const newCoords: Record<string, { x: number; y: number }> = {};

      callouts.forEach((spot) => {
        const localPos = new THREE.Vector3(spot.anchor3D.x, spot.anchor3D.y, spot.anchor3D.z);
        localPos.applyMatrix4(blockMeshRef.current!.matrixWorld);
        localPos.project(cameraRef.current!);

        const screenX = ((localPos.x + 1) * w) / 2;
        const screenY = ((-localPos.y + 1) * h) / 2;

        newCoords[spot.id] = { x: screenX, y: screenY };
      });

      setProjectedCoords(newCoords);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (blockMeshRef.current) {
        if (isAutoRotating) {
          targetRotationRef.current.y += 0.008;
        }

        currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * 0.08;
        currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * 0.08;

        blockMeshRef.current.rotation.x = currentRotationRef.current.x;
        blockMeshRef.current.rotation.y = currentRotationRef.current.y;
      }

      renderer.render(scene, camera);
      updateProjections();
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = w < 576 ? 380 : w < 992 ? 460 : 580;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [currentImage, is3DMode, isAutoRotating]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    previousMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const deltaX = e.clientX - previousMousePosRef.current.x;
    const deltaY = e.clientY - previousMousePosRef.current.y;

    targetRotationRef.current.y += deltaX * 0.008;
    targetRotationRef.current.x += deltaY * 0.006;

    targetRotationRef.current.x = Math.max(-0.6, Math.min(0.8, targetRotationRef.current.x));

    previousMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setIsAutoRotating(false);
      previousMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || e.touches.length !== 1) return;

    const deltaX = e.touches[0].clientX - previousMousePosRef.current.x;
    const deltaY = e.touches[0].clientY - previousMousePosRef.current.y;

    targetRotationRef.current.y += deltaX * 0.008;
    targetRotationRef.current.x += deltaY * 0.006;

    targetRotationRef.current.x = Math.max(-0.6, Math.min(0.8, targetRotationRef.current.x));

    previousMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div
      ref={containerRef}
      className="position-relative overflow-hidden user-select-none rounded-3 shadow-lg"
      style={{
        minHeight: '380px',
        cursor: isDragging ? 'grabbing' : 'grab',
        backgroundImage: "url('/assets/images/products/marble-dsiplay-background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Top Action Toolbar */}
      <div className="position-absolute top-0 end-0 m-3 d-flex gap-2" style={{ zIndex: 30 }}>
        <button
          onClick={() => setIs3DMode(!is3DMode)}
          className={`btn btn-sm ${is3DMode ? 'btn-dark' : 'btn-outline-light'} shadow-sm d-flex align-items-center gap-1`}
          title="Toggle 3D Interactive Showcase"
        >
          {is3DMode ? <Rotate3D size={16} /> : <Eye size={16} />}
          <span className="text-white small">{is3DMode ? '3D Studio' : 'Classic View'}</span>
        </button>

        <button
          onClick={handleShare}
          className="btn btn-sm btn-dark bg-opacity-75 border border-secondary text-white shadow-sm d-flex align-items-center gap-1"
          title="Share Product"
        >
          <Share2 size={16} />
          {copiedShare && <span className="small text-success">Copied!</span>}
        </button>
      </div>

      {/* Main 3D Canvas / Classic View */}
      {is3DMode ? (
        <canvas ref={canvasRef} className="w-100 h-100 d-block" style={{ minHeight: '380px' }} />
      ) : (
        <div className="w-100 h-100 d-flex align-items-center justify-content-center py-5">
          <img
            src={currentImage}
            alt={product.name}
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: '460px', objectFit: 'contain' }}
          />
        </div>
      )}

      {/* Interactive Callout Lines (Desktop/Tablet) */}
      {is3DMode && (
        <svg className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none d-none d-lg-block" style={{ zIndex: 15 }}>
          {callouts.map((spot) => {
            const anchor = projectedCoords[spot.id];
            if (!anchor) return null;

            let badgeX = anchor.x;
            let badgeY = anchor.y;

            if (spot.position === 'top-left') {
              badgeX = Math.max(140, anchor.x - 220);
              badgeY = Math.max(100, anchor.y - 120);
            } else if (spot.position === 'mid-left') {
              badgeX = Math.max(140, anchor.x - 260);
              badgeY = anchor.y + 10;
            } else if (spot.position === 'top-right') {
              badgeX = anchor.x + 220;
              badgeY = Math.max(100, anchor.y - 100);
            } else if (spot.position === 'mid-right') {
              badgeX = anchor.x + 240;
              badgeY = anchor.y + 70;
            }

            return (
              <g key={spot.id}>
                <path
                  d={`M ${anchor.x} ${anchor.y} L ${(anchor.x + badgeX) / 2} ${badgeY} L ${badgeX} ${badgeY}`}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                  strokeOpacity="0.75"
                />
                <circle cx={anchor.x} cy={anchor.y} r="4" fill="#ffffff" stroke="#333333" strokeWidth="1.5" />
              </g>
            );
          })}
        </svg>
      )}

      {/* Circular Magnifier Callout Bubbles */}
      {is3DMode &&
        callouts.map((spot) => {
          const anchor = projectedCoords[spot.id];
          if (!anchor) return null;

          let badgeX = anchor.x;
          let badgeY = anchor.y;

          if (spot.position === 'top-left') {
            badgeX = Math.max(140, anchor.x - 220);
            badgeY = Math.max(100, anchor.y - 120);
          } else if (spot.position === 'mid-left') {
            badgeX = Math.max(140, anchor.x - 260);
            badgeY = anchor.y + 10;
          } else if (spot.position === 'top-right') {
            badgeX = anchor.x + 220;
            badgeY = Math.max(100, anchor.y - 100);
          } else if (spot.position === 'mid-right') {
            badgeX = anchor.x + 240;
            badgeY = anchor.y + 70;
          }

          const isLeft = spot.position.includes('left');
          const isActive = activeCalloutId === spot.id;

          return (
            <div
              key={spot.id}
              className="position-absolute pointer-events-auto d-none d-lg-flex align-items-center gap-3"
              style={{
                left: `${badgeX}px`,
                top: `${badgeY}px`,
                transform: 'translate(-50%, -50%)',
                zIndex: isActive ? 25 : 20,
                flexDirection: isLeft ? 'row-reverse' : 'row'
              }}
              onMouseEnter={() => setActiveCalloutId(spot.id)}
              onMouseLeave={() => setActiveCalloutId(null)}
            >
              <div
                className="rounded-circle border border-2 border-white shadow-lg overflow-hidden flex-shrink-0 d-flex align-items-center justify-content-center bg-dark"
                style={{
                  width: '68px',
                  height: '68px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
                  cursor: 'pointer',
                  transition: 'transform 0.25s ease'
                }}
              >
                <img
                  src={currentImage}
                  alt={spot.title}
                  className="w-100 h-100"
                  style={{
                    objectFit: 'cover',
                    transform: spot.id.includes('raw') ? 'scale(2.2) rotate(45deg)' : 'scale(1.8)'
                  }}
                />
              </div>

              <div
                className={`text-white ${isLeft ? 'text-end' : 'text-start'}`}
                style={{ maxWidth: '200px', textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
              >
                <h6 className="m-0 fw-bold fs-6 text-white">{spot.title}</h6>
                <p className="small text-light opacity-75 mb-0" style={{ fontSize: '0.78rem', lineHeight: '1.25' }}>
                  {spot.subtitle}
                </p>
              </div>
            </div>
          );
        })}

      {/* 360° VIEW Button Badge */}
      {is3DMode && (
        <div
          className="position-absolute bottom-0 start-50 translate-middle-x mb-4 pointer-events-auto"
          style={{ zIndex: 25 }}
        >
          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className="btn btn-sm btn-dark bg-opacity-75 border border-secondary rounded-pill px-4 py-2 text-white shadow-lg d-flex align-items-center gap-2"
            style={{ backdropFilter: 'blur(8px)', cursor: 'pointer' }}
          >
            <RotateCw size={16} className={isAutoRotating ? 'spin-anim' : ''} />
            <span className="fw-semibold text-uppercase tracking-wider small">360° VIEW</span>
          </button>
        </div>
      )}
    </div>
  );
};
