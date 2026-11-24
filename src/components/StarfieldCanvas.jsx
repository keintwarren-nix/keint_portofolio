import React, { useEffect, useRef } from 'react';

/**
 * 60fps Starfield + Random Infrequent Drifting Clouds Canvas:
 * 1. Twinkling pixel stars and shooting stars.
 * 2. Sunset Pixel Cloudscape Sprite drifts by at RANDOM heights and INFREQUENT intervals (not a fixed repeating wall).
 * 3. Transparent background so background.jpg is 100% visible.
 */
export default function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      buildStars();
    };
    window.addEventListener('resize', onResize, { passive: true });

    // ─── Stars ───
    let stars = [];
    const STAR_N = Math.min(130, Math.floor((W * H) / 11000));
    const STAR_COLORS = ['#FFFFFF', '#F2F0FF', '#FF9ECF', '#8E8CFF', '#FFC9A8'];

    const buildStars = () => {
      stars = [];
      for (let i = 0; i < STAR_N; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          sz: Math.random() > 0.85 ? 2.5 : Math.random() > 0.5 ? 1.5 : 1,
          alpha: 0.25 + Math.random() * 0.65,
          speed: 0.008 + Math.random() * 0.02,
          dir: Math.random() > 0.5 ? 1 : -1,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
          pixel: Math.random() > 0.85,
        });
      }
    };
    buildStars();

    // ─── Shooting Stars ───
    let shooters = [];
    let lastShoot = Date.now();
    let nextShootDelay = 6000 + Math.random() * 8000;
    const addShooter = () => shooters.push({
      x: Math.random() * W * 0.5,
      y: Math.random() * H * 0.4,
      len: 70 + Math.random() * 90,
      speed: 9 + Math.random() * 7,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
      opacity: 1,
      life: 0,
      maxLife: 45 + Math.random() * 20,
    });

    // ─── Random Infrequent Clouds ───
    const cloudImg = new Image();
    cloudImg.src = '/assets/Sunset Pixel Cloudscape Sprite.png';
    let cloudReady = false;
    cloudImg.onload = () => { cloudReady = true; };

    let driftingClouds = [];
    let lastCloudTime = Date.now() - 25000; // allow initial cloud soon
    let nextCloudDelay = 20000 + Math.random() * 25000; // infrequent: 20-45s

    const spawnCloud = () => {
      if (!cloudReady) return;
      // Random height between 15% and 65% of screen
      const scale = 0.18 + Math.random() * 0.14; // random scale
      const h = Math.round(H * scale);
      const w = Math.round((cloudImg.naturalWidth / cloudImg.naturalHeight) * h);
      const y = Math.round(H * (0.15 + Math.random() * 0.55));
      driftingClouds.push({
        x: W + 20, // starts offscreen right
        y: y,
        w: w,
        h: h,
        speed: 0.35 + Math.random() * 0.35, // slow drifting
        alpha: 0.45 + Math.random() * 0.25, // soft blend
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // 1. Stars
      for (const s of stars) {
        s.alpha += s.speed * s.dir;
        if (s.alpha >= 0.95) { s.alpha = 0.95; s.dir = -1; }
        else if (s.alpha <= 0.15) { s.alpha = 0.15; s.dir = 1; }
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        const sz = Math.floor(s.sz);
        if (s.pixel && sz > 1) {
          const px = Math.floor(s.x), py = Math.floor(s.y);
          ctx.fillRect(px, py, sz, sz);
          ctx.fillRect(px - sz, py, sz, sz);
          ctx.fillRect(px + sz, py, sz, sz);
          ctx.fillRect(px, py - sz, sz, sz);
          ctx.fillRect(px, py + sz, sz, sz);
        } else {
          ctx.fillRect(Math.floor(s.x), Math.floor(s.y), sz, sz);
        }
      }
      ctx.globalAlpha = 1;

      // 2. Shooting stars
      const now = Date.now();
      if (now - lastShoot > nextShootDelay) {
        addShooter();
        lastShoot = now;
        nextShootDelay = 7000 + Math.random() * 9000;
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.life++;
        s.opacity = Math.max(0, 1 - s.life / s.maxLife);
        ctx.save();
        ctx.globalAlpha = s.opacity;
        ctx.strokeStyle = '#FF9ECF';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - Math.cos(s.angle) * s.len, s.y - Math.sin(s.angle) * s.len);
        ctx.stroke();
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(Math.floor(s.x) - 1, Math.floor(s.y) - 1, 3, 3);
        ctx.restore();
        if (s.life >= s.maxLife || s.x > W || s.y > H) shooters.splice(i, 1);
      }

      // 3. Random infrequent drifting clouds
      if (now - lastCloudTime > nextCloudDelay) {
        spawnCloud();
        lastCloudTime = now;
        nextCloudDelay = 25000 + Math.random() * 30000; // next in 25-55 seconds
      }

      for (let i = driftingClouds.length - 1; i >= 0; i--) {
        const c = driftingClouds[i];
        c.x -= c.speed; // drift from right to left
        ctx.save();
        ctx.globalAlpha = c.alpha;
        ctx.drawImage(cloudImg, Math.floor(c.x), Math.floor(c.y), c.w, c.h);
        ctx.restore();

        // Remove once drifted completely off left edge
        if (c.x + c.w < -50) {
          driftingClouds.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
