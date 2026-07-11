import React, { useEffect, useRef } from 'react';

export default function MouseTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let spots = [];
    const maxSpots = 35; // Fewer spots but larger to create an aurora feel

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      // Create large, slow-moving ambient light spots
      // Colors are selected from a muted, premium palette
      const colors = [
        'rgba(99, 102, 241, 0.08)',  // Soft Indigo
        'rgba(59, 130, 246, 0.08)',  // Soft Blue
        'rgba(168, 85, 247, 0.08)',  // Soft Purple
        'rgba(6, 182, 212, 0.06)',   // Muted Teal/Cyan
        'rgba(236, 72, 153, 0.06)'   // Soft Lavender/Pink
      ];

      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      spots.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 0.8, // extremely slow drifting
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 80 + 120, // large initial glow radius
        targetSize: Math.random() * 200 + 300, // expands significantly
        color: randomColor,
        life: 1.0,
        decay: Math.random() * 0.003 + 0.003 // lasts between 3 to 5 seconds
      });

      if (spots.length > maxSpots) {
        spots.shift();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      spots.forEach((s) => {
        // Organic slow drifting
        s.x += s.vx;
        s.y += s.vy;
        s.life -= s.decay;

        // Smooth size expansion (simulating paint diffusing in water)
        s.size += (s.targetSize - s.size) * 0.02;

        if (s.life <= 0) return;

        // Draw radial glow for smooth light falloff
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size);
        grad.addColorStop(0, s.color);
        grad.addColorStop(0.5, s.color.replace(/0\.\d+\)/, `${s.life * 0.04})`)); // fade outline
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Filter out dead spots
      spots = spots.filter((s) => s.life > 0);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1, // Sits behind all website cards, texts, and navigation
        filter: 'blur(100px)', // Intense diffusion to create wallpaper lighting (no circles or hard edges)
        opacity: 0.95
      }}
    />
  );
}
