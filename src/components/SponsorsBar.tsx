import React from "react";

const logos = Array(10).fill("./assets/spotufy.png");

export const SponsorsBar = () => (
  <div className="bg-black py-6 overflow-hidden">
    <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
      Confían en nosotros
    </p>
    <div className="relative flex overflow-hidden">
      <div
        className="flex gap-20 w-max"
        style={{ animation: "marquee-sponsors 22s linear infinite" }}
      >
        {logos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="sponsor"
            className="h-9 w-auto object-contain opacity-50 grayscale hover:opacity-90 hover:grayscale-0 transition-all duration-300"
            draggable={false}
          />
        ))}
      </div>
    </div>
    <style>{`
      @keyframes marquee-sponsors {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);
