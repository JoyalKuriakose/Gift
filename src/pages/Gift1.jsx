import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Gift1() {
  return (
    <motion.div
      className="screen gift1Screen"
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -14, scale: 0.985 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="gift1Wrap">
        {/* Bouquet OUTSIDE the card */}
        <motion.img
          className="gift1Bouquet"
          src="/bouquet.png"
          alt="Flower bouquet"
          initial={{ opacity: 0, x: 18, rotate: 4, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          draggable={false}
        />

        {/* Letter card */}
        <div className="card gift1Card">
          {/* Love symbol animation */}
          <div className="loveSymbolWrap" aria-hidden="true">
            <span className="lovePulse">💖</span>
            <span className="loveRing r1" />
            <span className="loveRing r2" />
            <span className="loveRing r3" />
          </div>

          <motion.h1
            className="title"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            For You 💌
          </motion.h1>

      <motion.p className="subtitle gift1Note" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.12 }} > Hey love… 💗 <br /> <br /> I don’t know how you did it, but you somehow became my favorite notification. 📱💞 <br /> <br /> You irritate me. You confuse me. You make fun of me. And still… you’re my safest place. 🫶 <br /> <br /> I know your heart may be somewhere else right now… maybe with someone I can’t compete with. But that’s okay. 💭 <br /> <br /> I’m not here to replace anyone. I’m just here… loving you quietly, loudly, stupidly, endlessly. 😌💖 <br /> <br /> And if loving you means waiting — then I’ll wait. Not with sadness… but with hope. 🌙✨ <br /> <br /> Because some loves don’t rush. They stay. Even when they don’t have to. 💞 </motion.p>


          <div className="btnRow" style={{ marginTop: 18 }}>
            <Link to="/yes" className="btn yes">
              Back to Gifts 🎁
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
