import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TenorEmbed from "../components/TenorEmbed.jsx";
import FloatingHearts from "../components/FloatingHearts.jsx";

function rand5to95() {
  return Math.floor(Math.random() * 90 + 5);
}

export default function Ask({ tenorPostId, title, subtitle, yesTo, noTo }) {
  const runAway = noTo === "RUN_AWAY";
  const [noPos, setNoPos] = useState({ top: 55, left: 62 });

  const moveNo = () => {
    setNoPos({ top: rand5to95(), left: rand5to95() });
  };

  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -14, scale: 0.985 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <FloatingHearts count={16} />

      <div className="card">
        <motion.div
          className="gifWrap"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.06 }}
        >
          <TenorEmbed postId={tenorPostId} />
        </motion.div>

        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.12 }}
        >
          {title}
        </motion.h1>

        {!!subtitle && (
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.16 }}
          >
            {subtitle}
          </motion.p>
        )}

        <div className="btnRow">
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
            <Link className="btn yes" to={yesTo}>
              Yes
            </Link>
          </motion.div>

          {!runAway ? (
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
              <Link className="btn no" to={noTo}>
                No
              </Link>
            </motion.div>
          ) : (
            <motion.a
              className="btn no runAway"
              href="#"
              onClick={(e) => e.preventDefault()}
              onMouseEnter={(e) => {
                e.preventDefault();
                moveNo();
              }}
              animate={{ top: `${noPos.top}%`, left: `${noPos.left}%` }}
              transition={{ type: "spring", stiffness: 520, damping: 28 }}
              style={{ position: "absolute" }}
              title="Catch me if you can 😈"
            >
              No
            </motion.a>
          )}
        </div>

        <p className="tinyHint">
          {runAway ? "Try clicking NO... if you can 😜" : "Choose wisely 😌"}
        </p>
      </div>
    </motion.div>
  );
}
