"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  radius: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export default function SurrealEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = containerRef.current?.clientWidth || 600);
    let height = (canvas.height = containerRef.current?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      width = canvas.width = containerRef.current.clientWidth;
      height = canvas.height = containerRef.current.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Node setup
    const nodeCount = 15;
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push({
        x,
        y,
        targetX: x,
        targetY: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Fortress 3D Vertices (abstract representation of a floating floating fort)
    const points3D = [
      { x: -80, y: -80, z: -80 },
      { x: 80, y: -80, z: -80 },
      { x: 80, y: 80, z: -80 },
      { x: -80, y: 80, z: -80 },
      { x: -80, y: -80, z: 80 },
      { x: 80, y: -80, z: 80 },
      { x: 80, y: 80, z: 80 },
      { x: -80, y: 80, z: 80 },
      { x: 0, y: -140, z: 0 }, // Top peak
    ];

    let angleX = 0.003;
    let angleY = 0.005;

    const rotateX = (point: typeof points3D[0], rad: number) => {
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      const y = point.y * cos - point.z * sin;
      const z = point.y * sin + point.z * cos;
      return { ...point, y, z };
    };

    const rotateY = (point: typeof points3D[0], rad: number) => {
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      const x = point.x * cos + point.z * sin;
      const z = -point.x * sin + point.z * cos;
      return { ...point, x, z };
    };

    const project = (point: typeof points3D[0], w: number, h: number) => {
      // Perspective projection
      const fov = 350;
      const distance = 250;
      const scale = fov / (distance + point.z);
      const x2d = w / 2 + point.x * scale;
      const y2d = h / 2 + point.y * scale;
      return { x: x2d, y: y2d, scale };
    };

    let radarRadius = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle background coordinate grid
      ctx.strokeStyle = "rgba(14, 27, 48, 0.02)";
      ctx.lineWidth = 1;
      const spacing = 40;
      for (let x = 0; x < width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw expanding radar lines
      radarRadius += 0.8;
      if (radarRadius > Math.min(width, height) / 2) {
        radarRadius = 0;
      }
      ctx.strokeStyle = `rgba(14, 27, 48, ${Math.max(0, 0.15 - radarRadius / (Math.min(width, height) / 2))})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radarRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Static target overlays
      ctx.strokeStyle = "rgba(14, 27, 48, 0.05)";
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 80, 0, Math.PI * 2);
      ctx.arc(width / 2, height / 2, 160, 0, Math.PI * 2);
      ctx.stroke();

      // 3. Update & Draw floating digital nodes
      nodes.forEach((node) => {
        // Drifts
        node.x += node.vx;
        node.y += node.vy;

        // Boundary bounce
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse attraction
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            node.x += (dx / dist) * 0.5;
            node.y += (dy / dist) * 0.5;
          }
        }

        node.pulsePhase += node.pulseSpeed;
        const currentRadius = Math.max(0.2, node.radius + Math.sin(node.pulsePhase) * 1.5);

        // Node Glow
        ctx.shadowColor = "rgba(14, 27, 48, 0.1)";
        ctx.shadowBlur = 8;
        ctx.fillStyle = "rgba(14, 27, 48, 0.5)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // 4. Draw interactive 3D fortress mesh
      // Rotate points based on mouse
      let dynamicAngleX = angleX;
      let dynamicAngleY = angleY;
      if (mouse.active) {
        dynamicAngleY = (mouse.x - width / 2) * 0.00002;
        dynamicAngleX = -(mouse.y - height / 2) * 0.00002;
      }

      const rotatedPoints = points3D.map((p) => {
        let pt = rotateY(p, dynamicAngleY);
        pt = rotateX(pt, dynamicAngleX);
        return pt;
      });

      // Apply rotation accumulate
      points3D.forEach((p, idx) => {
        let pt = rotateY(p, angleY * 0.2);
        pt = rotateX(pt, angleX * 0.2);
        points3D[idx] = pt;
      });

      const projected = rotatedPoints.map((p) => project(p, width, height));

      // Draw cube lines
      ctx.strokeStyle = "rgba(14, 27, 48, 0.12)";
      ctx.lineWidth = 1;

      const drawLine = (i: number, j: number) => {
        ctx.beginPath();
        ctx.moveTo(projected[i].x, projected[i].y);
        ctx.lineTo(projected[j].x, projected[j].y);
        ctx.stroke();
      };

      // Connect Base Cube
      drawLine(0, 1); drawLine(1, 2); drawLine(2, 3); drawLine(3, 0); // back face
      drawLine(4, 5); drawLine(5, 6); drawLine(6, 7); drawLine(7, 4); // front face
      drawLine(0, 4); drawLine(1, 5); drawLine(2, 6); drawLine(3, 7); // connections

      // Connect Peak (Spire representation of secure fortress)
      drawLine(0, 8); drawLine(1, 8); drawLine(2, 8); drawLine(3, 8);

      // Red core node in center of fortress
      const centerPoint = project({ x: 0, y: 0, z: 0 }, width, height);
      ctx.fillStyle = "#d9383a"; // controlled red accent
      ctx.shadowColor = "rgba(217, 56, 58, 0.5)";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(centerPoint.x, centerPoint.y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0; // reset

      // Label coordinate next to central red node
      ctx.fillStyle = "rgba(14, 27, 48, 0.4)";
      ctx.font = "8px monospace";
      ctx.fillText("SYS_SEC_ACTIVE", centerPoint.x + 12, centerPoint.y - 4);
      ctx.fillText(`C_X: ${centerPoint.x.toFixed(0)} C_Y: ${centerPoint.y.toFixed(0)}`, centerPoint.x + 12, centerPoint.y + 6);

      // Connect fortress vertices to nearest floating nodes
      projected.forEach((pt) => {
        nodes.forEach((node) => {
          const dx = node.x - pt.x;
          const dy = node.y - pt.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.strokeStyle = `rgba(14, 27, 48, ${0.05 * (1 - dist / 90)})`;
            ctx.beginPath();
            ctx.moveTo(pt.x, pt.y);
            ctx.lineTo(node.x, node.y);
            ctx.stroke();
          }
        });
      });

      // 5. Draw abstract surveillance lens (top left floating circle)
      const lensX = width / 2 - 140 + Math.sin(Date.now() * 0.001) * 15;
      const lensY = height / 2 - 120 + Math.cos(Date.now() * 0.0007) * 15;

      ctx.strokeStyle = "rgba(14, 27, 48, 0.2)";
      ctx.beginPath();
      ctx.arc(lensX, lensY, 28, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = "rgba(14, 27, 48, 0.05)";
      ctx.beginPath();
      ctx.arc(lensX, lensY, 34, 0, Math.PI * 2);
      ctx.stroke();

      // Reflex highlight
      const gradient = ctx.createLinearGradient(lensX - 10, lensY - 10, lensX + 15, lensY + 15);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.5)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
      gradient.addColorStop(1, "rgba(14, 27, 48, 0.02)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(lensX, lensY, 27, 0, Math.PI * 2);
      ctx.fill();

      // Small blinking indicator
      const blink = Math.floor(Date.now() / 600) % 2 === 0;
      ctx.fillStyle = blink ? "#d9383a" : "rgba(217, 56, 58, 0.2)";
      ctx.beginPath();
      ctx.arc(lensX + 8, lensY - 8, 2, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(14, 27, 48, 0.4)";
      ctx.font = "7px monospace";
      ctx.fillText("CAM_LENS_01", lensX - 25, lensY + 45);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [mouse]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0, active: false });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full"
      />
      {/* Editorial overlays / frames */}
      <div className="absolute top-4 left-4 border-l border-t border-accent-navy/20 w-8 h-8 pointer-events-none" />
      <div className="absolute top-4 right-4 border-r border-t border-accent-navy/20 w-8 h-8 pointer-events-none" />
      <div className="absolute bottom-4 left-4 border-l border-b border-accent-navy/20 w-8 h-8 pointer-events-none" />
      <div className="absolute bottom-4 right-4 border-r border-b border-accent-navy/20 w-8 h-8 pointer-events-none" />

      {/* Subtle UI markings */}
      <div className="absolute top-6 left-6 font-mono text-[8px] text-accent-navy/30 tracking-widest pointer-events-none">
        STRONGHOLD INTEL SYSTEMS
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[8px] text-accent-navy/30 tracking-widest pointer-events-none">
        SEC_GRID_2026 // v1.0.8
      </div>
    </div>
  );
}
