import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function FloatingHearts({ count = 14 }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 6,
      size: 14 + Math.random() * 18,
      blur: Math.random() < 0.35 ? 1.5 : 0,
      opacity: 0.25 + Math.random() * 0.35,
      rotate: -15 + Math.random() * 30,
    }));
  }, [count]);

  return (
    <div className="floatingHearts" aria-hidden="true">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="heart"
          style={{
            left: `${h.x}%`,
            fontSize: `${h.size}px`,
            filter: h.blur ? `blur(${h.blur}px)` : "none",
            opacity: h.opacity,
          }}
          initial={{ y: "110vh", rotate: h.rotate }}
          animate={{ y: "-20vh", rotate: h.rotate + 20 }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
