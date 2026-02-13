import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function ConfettiBurst({ run = false }) {
  const [show, setShow] = useState(false);

  const pieces = useMemo(() => {
    return Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      x: 45 + (Math.random() * 10 - 5),
      drift: (Math.random() * 2 - 1) * 40,
      delay: Math.random() * 0.12,
      rotate: Math.random() * 180,
      emoji: Math.random() < 0.5 ? "💖" : "✨",
      size: 16 + Math.random() * 14,
    }));
  }, []);

  useEffect(() => {
    if (!run) return;
    setShow(true);
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, [run]);

  if (!show) return null;

  return (
    <div className="burst" aria-hidden="true">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          className="burstPiece"
          style={{ left: `${p.x}%`, fontSize: `${p.size}px` }}
          initial={{ y: 0, x: 0, opacity: 0, rotate: p.rotate, scale: 0.8 }}
          animate={{ y: -220, x: p.drift, opacity: 1, rotate: p.rotate + 90, scale: 1 }}
          transition={{ duration: 0.9, delay: p.delay, ease: "easeOut" }}
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
}
