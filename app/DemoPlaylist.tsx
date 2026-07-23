"use client";

import { useEffect, useRef, useState } from "react";

const demos = [
  {
    title: "Mesh Generation",
    description: "AI agent meshing workflow with pyHyp",
    src: "/demos/meshing-pyhyp.mp4",
  },
  {
    title: "Mesh Preview",
    description: "Geometry and generated mesh inspection",
    src: "/demos/meshing-preview.mp4",
  },
  {
    title: "RANS Setting",
    description: "Solver configuration for RANS analysis",
    src: "/demos/rans-setting.mp4",
  },
];

export function DemoPlaylist() {
  const [current, setCurrent] = useState(0);
  const shouldContinue = useRef(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    if (shouldContinue.current) {
      void video.play().catch(() => undefined);
    }
  }, [current]);

  const selectDemo = (index: number) => {
    shouldContinue.current = true;
    setCurrent(index);
  };

  const playNext = () => {
    shouldContinue.current = true;
    setCurrent((index) => (index + 1) % demos.length);
  };

  return (
    <div className="demo-player">
      <div className="demo-player-topline">
        <span>DEMO SEQUENCE</span>
        <span>{String(current + 1).padStart(2, "0")} / 03</span>
      </div>

      <div className="demo-video-shell">
        <video
          ref={videoRef}
          className="demo-video"
          controls
          playsInline
          preload="metadata"
          onEnded={playNext}
          aria-label={`${demos[current].title} demonstration video`}
        >
          <source src={demos[current].src} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>

      <div className="demo-chapters" aria-label="Demo video chapters">
        {demos.map((demo, index) => (
          <button
            className={index === current ? "demo-chapter is-current" : "demo-chapter"}
            type="button"
            onClick={() => selectDemo(index)}
            aria-pressed={index === current}
            key={demo.src}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{demo.title}</strong>
            <small>{demo.description}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
