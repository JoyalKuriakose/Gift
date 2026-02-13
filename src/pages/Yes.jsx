import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TenorEmbed from "../components/TenorEmbed.jsx";
import ConfettiBurst from "../components/ConfettiBurst.jsx";

const giftsData = [
  {
    id: "gift1",
    title: "A Love Note 💌",
    emoji: "🎁",
    // content not needed because it navigates
    content: null,
  },
  {
  id: "gift2",
  title: "A Cute Promise 🤍",
  emoji: "🎀",
  content: (
    <div>
      <h2 className="giftTitle">My Promise ✨</h2>

      <div className="giftVideoWrap">
        <video
          className="giftVideo"
          src="/reel.mp4"
          controls
          playsInline
          preload="auto"
        />
      </div>

      <ul className="giftList" style={{ marginTop: 14 }}>
        <br />
        <br />
        <li>More hugs when you’re tired 🫂</li>
        <li>More laughs when you’re sad 😄</li>
        <li>More love… every single day 💗</li>
        <li>I will always irritate you (lovingly) 😌</li>
        <li>I will steal your food sometimes 🍕😋</li>
        <li>I will fight with you… then hug you tighter 🥺🤍</li>
        <li>I will annoy you with random texts 💬💕</li>
        <li>I will always choose you, even on bad days 🌙✨</li>
        <li>I will protect you like you’re my whole world 🛡️💖</li>
        <li>I will never stop loving you 💞</li>
      </ul>

      <p className="giftSmall">
        I promise to always stand by you 💞
      </p>
    </div>
  ),
}
,
  {
    id: "gift3",
    title: "A Surprise GIF 💞",
    emoji: "💝",
    // content not needed because it navigates
    content: null,
  },
];

export default function Yes() {
  const [burst, setBurst] = useState(false);
  const [openGift, setOpenGift] = useState(null);
  const [openedIds, setOpenedIds] = useState(() => new Set());
  const navigate = useNavigate();

  useEffect(() => {
    setBurst(true);
    const t = setTimeout(() => setBurst(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const gifts = useMemo(() => giftsData, []);

  const onOpen = (gift) => {
    setOpenedIds((prev) => new Set(prev).add(gift.id));
    setBurst(true);
    setTimeout(() => setBurst(false), 900);

    if (gift.id === "gift1") return navigate("/gift1");
    if (gift.id === "gift3") return navigate("/gift3");

    setOpenGift(gift); // only gift2 opens modal
  };

  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -14, scale: 0.985 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <ConfettiBurst run={burst} />

      <div className="card">
        <motion.div
          className="gifWrap"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.06 }}
        >
          <TenorEmbed postId="14541077" aspectRatio="1.37853" />
        </motion.div>

        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.12 }}
        >
          I knew it! You Love me a lot 😘
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.18 }}
        >
          Now choose your gifts below… three surprises waiting for you 💞
        </motion.p>

        <div className="giftRow">
          {gifts.map((g, idx) => {
            const opened = openedIds.has(g.id);

            return (
              <motion.button
                key={g.id}
                className={`giftBox ${opened ? "opened" : ""}`}
                onClick={() => onOpen(g)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.22 + idx * 0.06 }}
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="giftTop">
                  <span className="giftIcon">{g.emoji}</span>
                  <span className="giftSpark">✨</span>
                </div>
                <div className="giftLabel">{g.title}</div>
              </motion.button>
            );
          })}
        </div>

        <p className="tinyHint">Tap a gift to open it 🎁</p>
      </div>

      <AnimatePresence>
        {openGift && (
          <motion.div
            className="giftModalBackdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenGift(null)}
          >
            <motion.div
              className={`giftModal ${openGift?.id === "gift2" ? "gift2Wide" : ""}`}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {openGift.content}

              <button className="giftClose" onClick={() => setOpenGift(null)}>
                Close 💗
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
