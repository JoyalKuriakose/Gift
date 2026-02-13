import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Ask from "./pages/Ask.jsx";
import Yes from "./pages/Yes.jsx";
import Gift1 from "./pages/Gift1.jsx";
import Gift3 from "./pages/Gift3.jsx";
import FloatingHearts from "./components/FloatingHearts.jsx";
import MusicToggle from "./components/MusicToggle.jsx";

export default function App() {
  const location = useLocation();

  return (
    <>
      {/* Background hearts */}
      <FloatingHearts count={30} />

      {/* Background music (no UI) */}
      <MusicToggle src="/romantic.mp3" volume={0.32} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Ask
                tenorPostId="16181982" aspectRatio="1.2"
                title="Can I Ask You something ? 🫣😅"
                subtitle=""
                yesTo="/no1"
                noTo="RUN_AWAY"
              />
            }
          />

          <Route
            path="/no1"
            element={
              <Ask
                tenorPostId="15325721" aspectRatio="1.1"
                title="Will you be my Valentine, forever? 💞🤗"
                subtitle=""
                yesTo="/yes"
                noTo="/no2"
              />
            }
          />

          <Route
            path="/no2"
            element={
              <Ask
                tenorPostId="6470473791690227657" aspectRatio="1.375"
                title="Please think again! 🙄"
                subtitle="Don’t say no so quickly 😥"
                yesTo="/yes"
                noTo="/no3"
              />
            }
          />

          <Route
            path="/no3"
            element={
              <Ask
                tenorPostId="15195810"
                title="Think one more time! 😣"
                subtitle="Why are you doing this? Please say yes 😣"
                yesTo="/yes"
                noTo="/no4"
              />
            }
          />

          <Route
            path="/no4"
            element={
              <Ask
                tenorPostId="15974530976611222074"
                title="Beautiful, please say yes! My heart is waiting only for you 🥺💖"
                subtitle="Don't make this poor soul wait too long 😭💕"
                yesTo="/yes"
                noTo="RUN_AWAY"
              />
            }
          />

          <Route path="/yes" element={<Yes />} />

          {/* ✅ New gift pages */}
          <Route path="/gift1" element={<Gift1 />} />
          <Route path="/gift3" element={<Gift3 />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
