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

          <motion.p
            className="subtitle gift1Note"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.12 }}
          >
            <strong>My Love,</strong>
            <br /><br />

            I don’t even know where to begin, because every time I try to put my
            feelings into words, they feel smaller than what I actually feel for you.
            <br /><br />

            You know this already, but I want to say it again — I love you.
            Not in a simple way. Not in a temporary way.
            I love you in a way that feels calm, deep, and certain.
            The kind of love that doesn’t shake when things get confusing.
            The kind that stays.
            <br /><br />

            I know you’ve been feeling a little lost lately.
            A little unsure. Maybe questioning yourself, your decisions, your path.
            And I want you to know something very clearly — it’s okay.
            It’s okay to be confused. It’s okay to not have everything figured out.
            You are human. You are growing. And growth is never perfectly clear.
            <br /><br />

            But even in your confusion, I see your strength.
            <br />
            Even in your doubts, I see your brilliance.
            <br />
            Even when you feel unsure, I see the most capable, beautiful soul.
            <br /><br />

            You don’t have to face anything alone.
            Not your fears. Not your decisions.
            Not your overthinking nights.
            I am here.
            Not just as someone who loves you,
            but as your safe place.
            Your biggest supporter.
            Your teammate in this life.
            <br /><br />

            No matter what happens,
            no matter what phase you go through,
            I’ll be right beside you —
            holding your hand when you’re tired,
            pushing you forward when you doubt yourself,
            and reminding you who you are when you forget.
            <br /><br />

            You are my world.
            Not because I depend on you for happiness —
            but because loving you feels like home.
            You make my life brighter just by existing in it.
            And I’m so proud of you,
            even on the days you don’t feel proud of yourself.
            <br /><br />

            Take your time.
            Breathe.
            Trust yourself a little more.
            And whenever you feel like you can’t —
            borrow my faith in you.
            <br /><br />

            I’m not going anywhere.
            I choose you.
            Every day.
            In every phase.
            In every version of you.
            <br /><br />

            I love you more than I can ever explain.
            <br /><br />

            <strong>Forever yours,</strong>
            <br />
            ❤️
          </motion.p>


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
