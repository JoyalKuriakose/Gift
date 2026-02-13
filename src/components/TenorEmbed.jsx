import React from "react";

export default function TenorEmbed({ postId, width = "100%", aspectRatio = 1 }) {
  // Tenor iframe embed:
  // https://tenor.com/view/<slug>-<postId> → but slug isn't needed for iframe if we use the "embed" endpoint.
  // Tenor supports this format:
  // https://tenor.com/embed/<postId>
  const src = `https://tenor.com/embed/${postId}`;

  return (
    <div style={{ width: "100%" }}>
      <div style={{ position: "relative", width: "100%", paddingTop: `${100 / aspectRatio}%` }}>
        <iframe
          title="Tenor GIF"
          src={src}
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}