import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TenorEmbed from "../components/TenorEmbed.jsx";

export default function Gift3() {
  return (
    <motion.div
      className="screen gift3Stack"
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -14, scale: 0.985 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
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

      <div className="card">
        <h1 className="title">Bonus gift…</h1>
        <p className="subtitle">Now come here… I want my hugs 😤🫂💞</p>

        <div className="gifWrap" style={{ marginTop: 14 }}>
          <TenorEmbed postId="23490027" aspectRatio="1.0" />
        </div>
      </div>
    </motion.div>
  );
}
