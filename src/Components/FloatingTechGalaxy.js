import React, { useEffect, useRef } from 'react';
import { 
  FaSalesforce, 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaPython, 
  FaCloud,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress 
} from 'react-icons/si';

const TECH_ITEMS = [
  { id: 'salesforce', name: 'Salesforce', icon: <FaSalesforce />, color: '#00A1E0', glow: 'rgba(0, 161, 224, 0.85)' },
  { id: 'react', name: 'React', icon: <FaReact />, color: '#61DAFB', glow: 'rgba(97, 218, 251, 0.9)' },
  { id: 'nodejs', name: 'Node.js', icon: <FaNodeJs />, color: '#68A063', glow: 'rgba(104, 160, 99, 0.9)' },
  { id: 'mongodb', name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', glow: 'rgba(71, 162, 72, 0.9)' },
  { id: 'express', name: 'Express', icon: <SiExpress />, color: '#E2E8F0', glow: 'rgba(226, 232, 240, 0.85)' },
  { id: 'javascript', name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', glow: 'rgba(247, 223, 30, 0.9)' },
  { id: 'html5', name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', glow: 'rgba(227, 79, 38, 0.9)' },
  { id: 'python', name: 'Python', icon: <FaPython />, color: '#38BDF8', glow: 'rgba(56, 189, 248, 0.9)' },
  { id: 'cloud', name: 'Cloud / API', icon: <FaCloud />, color: '#00f2fe', glow: 'rgba(0, 242, 254, 0.95)' },
  { id: 'database', name: 'Database / SQL', icon: <FaDatabase />, color: '#c084fc', glow: 'rgba(192, 132, 252, 0.9)' }
];

const GLOW_RADIUS = 310; // Radius in pixels around portrait center for proximity glow

export default function FloatingTechGalaxy() {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Initialize randomized states for each tech item
    const particles = TECH_ITEMS.map((item, index) => {
      // Scramble positions randomly across the viewport on mount/refresh
      const x = Math.random() * (width - 160) + 30;
      const y = Math.random() * (height - 140) + 70;

      // Randomized velocity vector (X and Y axes drift)
      const speed = 0.25 + Math.random() * 0.45;
      const angle = Math.random() * Math.PI * 2;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      return {
        ...item,
        x,
        y,
        vx,
        vy,
        isDragging: false,
        dragOffsetX: 0,
        dragOffsetY: 0,
        lastDragX: x,
        lastDragY: y,
        isNear: false,
      };
    });

    let animationFrameId;

    const tick = () => {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;

      // Find Home Portrait Anchor if present
      const portraitEl = document.getElementById('home-portrait-anchor');
      let portraitCenter = null;
      if (portraitEl) {
        const pRect = portraitEl.getBoundingClientRect();
        // Only consider if on screen
        if (pRect.bottom > 0 && pRect.top < currentHeight) {
          portraitCenter = {
            x: pRect.left + pRect.width / 2,
            y: pRect.top + pRect.height / 2,
          };
        }
      }

      particles.forEach((p, idx) => {
        const el = elementsRef.current[idx];
        if (!el) return;

        if (!p.isDragging) {
          // Floating motion along X and Y axes
          p.x += p.vx;
          p.y += p.vy;

          // Boundary bouncing across entire viewport
          const elWidth = el.offsetWidth || 130;
          const elHeight = el.offsetHeight || 42;

          if (p.x <= 15) {
            p.x = 15;
            p.vx = Math.abs(p.vx);
          } else if (p.x + elWidth >= currentWidth - 15) {
            p.x = currentWidth - elWidth - 15;
            p.vx = -Math.abs(p.vx);
          }

          if (p.y <= 65) {
            p.y = 65;
            p.vy = Math.abs(p.vy);
          } else if (p.y + elHeight >= currentHeight - 25) {
            p.y = currentHeight - elHeight - 25;
            p.vy = -Math.abs(p.vy);
          }
        }

        // Check proximity to Vinay's home portrait
        let isNear = false;
        if (portraitCenter) {
          const itemCenterX = p.x + (el.offsetWidth || 130) / 2;
          const itemCenterY = p.y + (el.offsetHeight || 42) / 2;
          const dist = Math.hypot(itemCenterX - portraitCenter.x, itemCenterY - portraitCenter.y);
          if (dist <= GLOW_RADIUS) {
            isNear = true;
          }
        }

        if (p.isNear !== isNear) {
          p.isNear = isNear;
          el.classList.toggle('is-near', isNear);
          el.classList.toggle('is-far', !isNear);
        }

        // Apply hardware-accelerated transform
        el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      });

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    // Pointer handlers for dragging
    const handlePointerDown = (e, idx) => {
      const p = particles[idx];
      if (!p) return;
      p.isDragging = true;
      p.dragOffsetX = e.clientX - p.x;
      p.dragOffsetY = e.clientY - p.y;
      p.lastDragX = e.clientX;
      p.lastDragY = e.clientY;

      const onPointerMove = (moveEvent) => {
        if (!p.isDragging) return;
        p.x = moveEvent.clientX - p.dragOffsetX;
        p.y = moveEvent.clientY - p.dragOffsetY;

        // Impart mouse momentum
        const deltaX = moveEvent.clientX - p.lastDragX;
        const deltaY = moveEvent.clientY - p.lastDragY;
        p.vx = Math.max(-1.5, Math.min(1.5, deltaX * 0.3 || (Math.random() - 0.5) * 0.5));
        p.vy = Math.max(-1.5, Math.min(1.5, deltaY * 0.3 || (Math.random() - 0.5) * 0.5));

        p.lastDragX = moveEvent.clientX;
        p.lastDragY = moveEvent.clientY;
      };

      const onPointerUp = () => {
        p.isDragging = false;
        // Ensure floating is always on
        if (Math.abs(p.vx) < 0.2) p.vx = (Math.random() > 0.5 ? 1 : -1) * (0.3 + Math.random() * 0.3);
        if (Math.abs(p.vy) < 0.2) p.vy = (Math.random() > 0.5 ? 1 : -1) * (0.3 + Math.random() * 0.3);

        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        window.removeEventListener('pointercancel', onPointerUp);
      };

      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
      window.addEventListener('pointercancel', onPointerUp);
    };

    // Attach pointerdown to DOM nodes
    const cleanups = [];
    particles.forEach((_, idx) => {
      const el = elementsRef.current[idx];
      if (!el) return;
      const downHandler = (e) => handlePointerDown(e, idx);
      el.addEventListener('pointerdown', downHandler);
      cleanups.push(() => el.removeEventListener('pointerdown', downHandler));
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      cleanups.forEach(c => c());
    };
  }, []);

  return (
    <div className="global-floating-tech-galaxy" ref={containerRef} aria-hidden="true">
      {TECH_ITEMS.map((item, idx) => (
        <div
          key={item.id}
          ref={(el) => (elementsRef.current[idx] = el)}
          className="global-floating-badge is-far"
          style={{
            '--badge-color': item.color,
            '--badge-glow': item.glow,
          }}
        >
          <span className="global-badge-icon">{item.icon}</span>
          <span className="global-badge-label">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
