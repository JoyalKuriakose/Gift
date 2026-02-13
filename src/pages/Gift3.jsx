import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import TenorEmbed from "../components/TenorEmbed.jsx";

export default function Gift3() {
  // ✅ Your images in public: 1.jpeg ... 9.jpeg
  const images = useMemo(
    () => Array.from({ length: 9 }, (_, i) => `/${i + 1}.jpeg`),
    []
  );

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("idle"); // "idle" | "slideshow" | "collage"
  const [idx, setIdx] = useState(0);

  const openSlideshow = () => {
    setIdx(0);
    setMode("slideshow");
    setOpen(true);
  };

  const closeAll = () => {
    setOpen(false);
    setMode("idle");
    setIdx(0);
  };

  // Auto play slideshow
  useEffect(() => {
    if (!open) return;
    if (mode !== "slideshow") return;

    const t = setInterval(() => {
      setIdx((p) => {
        const next = p + 1;
        if (next >= images.length) {
          setMode("collage"); // after last slide -> show heart collage
          return p; // keep last image index
        }
        return next;
      });
    }, 2000); // ✅ slide interval

    return () => clearInterval(t);
  }, [open, mode, images.length]);

  return (
    <motion.div
      className="screen gift3Stack"
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -14, scale: 0.985 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* First Card */}
      <div className="card">
        <h1 className="title">No more free surprises 😌💝</h1>
        <p className="subtitle">
          Subscription expired. Payment accepted in kisses only 💋💞
        </p>

        <div className="gifWrap" style={{ marginTop: 14 }}>
          <TenorEmbed postId="1613492217735624274" aspectRatio="1.0" />
        </div>

        <div className="btnRow">
          <Link to="/" className="btn yes">
            Back
          </Link>
        </div>
      </div>

      {/* Second Card (Clickable Bonus Gift) */}
      <motion.button
        type="button"
        className="card bonusCard"
        onClick={openSlideshow}
        whileHover={{ y: -4, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <h1 className="title">Bonus gift… 💞</h1>
        <p className="subtitle">Tap to open your photo surprise 📸✨</p>

        <div className="gifWrap" style={{ marginTop: 14 }}>
          <TenorEmbed postId="23490027" aspectRatio="1.0" />
        </div>

        <p className="tinyHint" style={{ marginTop: 10 }}>
          (Tap anywhere on this card 😌)
        </p>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="giftModalBackdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAll}
          >
            <motion.div
              className="giftModal gift3Modal"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {mode === "slideshow" && (
                <>
                  <h2 className="giftTitle">
                     💖
                  </h2>

                  <div className="gift3SlideWrap">
                    <img
                      src={images[idx]}
                      alt={`slide-${idx + 1}`}
                      className="gift3SlideImg"
                      draggable={false}
                    />
                  </div>

                  <p className="giftSmall">Auto-playing… wait till the end 😚✨</p>

                  <button className="giftClose" onClick={closeAll}>
                    Close 💗
                  </button>
                </>
              )}

              {mode === "collage" && (
                <>
                  <h2 className="giftTitle">All of them… in my heart 💞</h2>

                  <div className="heartCollage">
                    {images.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`mem-${i + 1}`}
                        className="heartImg"
                        draggable={false}
                      />
                    ))}
                    <div className="heartOverlay"></div>
                  </div>

                  <p className="giftSmall">
                    Now come here… I want my hugs 😤🫂💞
                  </p>

                  <button className="giftClose" onClick={closeAll}>
                    Close 💗
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
