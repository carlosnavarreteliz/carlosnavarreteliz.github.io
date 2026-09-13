import React from "react";

/**
 * An illustration of how a question gets worked: it fans out across a field of
 * autonomous agents running in parallel, and what survives their scrutiny
 * converges into evidence.
 *
 * Everything animates in CSS — opacity, transform and stroke-dashoffset only —
 * so the global prefers-reduced-motion rule switches it off for free and no
 * layout is ever recalculated. Delays come from the grid position rather than
 * Math.random(), because a random value would differ between the server render
 * and the client and throw the tree away on hydration.
 *
 * Two geometries are emitted and swapped with CSS. A single wide viewBox
 * scaled down to phone width renders the dots at under two pixels; the narrow
 * layout keeps them legible instead of clever.
 */

const WIDE = {
  w: 1000,
  h: 320,
  cols: 10,
  rows: 5,
  x0: 250,
  x1: 745,
  y0: 52,
  y1: 268,
  source: {x: 78, y: 160},
  sink: {x: 922, y: 160},
  endR: 21,
  coreR: 9,
  dotR: 4.5,
  haloR: 13,
};

const NARROW = {
  w: 400,
  h: 300,
  cols: 5,
  rows: 5,
  x0: 112,
  x1: 288,
  y0: 56,
  y1: 244,
  source: {x: 32, y: 150},
  sink: {x: 368, y: 150},
  endR: 18,
  coreR: 7.5,
  dotR: 5,
  haloR: 13,
};

function Swarm({g, variant, alt}) {
  const colX = (c) => (g.cols === 1 ? g.x0 : g.x0 + (c * (g.x1 - g.x0)) / (g.cols - 1));
  const rowY = (r) => (g.rows === 1 ? g.y0 : g.y0 + (r * (g.y1 - g.y0)) / (g.rows - 1));

  const agents = [];
  for (let r = 0; r < g.rows; r += 1) {
    for (let c = 0; c < g.cols; c += 1) {
      // Diagonal sweep: cheap, deterministic, and reads as a wave.
      agents.push({c, r, x: colX(c), y: rowY(r), delay: ((c * 3 + r * 7) % 21) / 7});
    }
  }

  const edge = Array.from({length: g.rows}, (_, r) => rowY(r));

  return (
    <svg
      className={`swarm__svg swarm__svg--${variant}`}
      viewBox={`0 0 ${g.w} ${g.h}`}
      role="img"
      aria-label={alt}
      preserveAspectRatio="xMidYMid meet"
    >
      {edge.map((y, i) => (
        <path
          key={`in-${i}`}
          className="swarm__wire"
          style={{animationDelay: `${i * 0.35}s`}}
          d={`M ${g.source.x + g.endR + 2} ${g.source.y} C ${g.source.x + g.w * 0.11} ${g.source.y}, ${colX(0) - g.w * 0.09} ${y}, ${colX(0) - 10} ${y}`}
        />
      ))}

      {edge.map((y, i) => (
        <path
          key={`out-${i}`}
          className="swarm__wire swarm__wire--out"
          style={{animationDelay: `${0.6 + i * 0.35}s`}}
          d={`M ${colX(g.cols - 1) + 10} ${y} C ${colX(g.cols - 1) + g.w * 0.09} ${y}, ${g.sink.x - g.w * 0.11} ${g.sink.y}, ${g.sink.x - g.endR - 2} ${g.sink.y}`}
        />
      ))}

      {agents.map((a) => (
        <g key={`${a.c}-${a.r}`} className="swarm__agent" style={{animationDelay: `${a.delay}s`}}>
          <circle className="swarm__halo" cx={a.x} cy={a.y} r={g.haloR} />
          <circle className="swarm__dot" cx={a.x} cy={a.y} r={g.dotR} />
        </g>
      ))}

      <g className="swarm__end">
        <circle className="swarm__ring" cx={g.source.x} cy={g.source.y} r={g.endR} />
        <circle className="swarm__core" cx={g.source.x} cy={g.source.y} r={g.coreR} />
      </g>

      <g className="swarm__end swarm__end--sink">
        <circle className="swarm__ring" cx={g.sink.x} cy={g.sink.y} r={g.endR} />
        <circle className="swarm__core" cx={g.sink.x} cy={g.sink.y} r={g.coreR} />
      </g>
    </svg>
  );
}

export default function AgentSwarm({labels}) {
  return (
    <div className="swarm">
      <Swarm g={WIDE} variant="wide" alt={labels.alt} />
      <Swarm g={NARROW} variant="narrow" alt={labels.alt} />

      <div className="swarm__legend">
        <span className="swarm__label">{labels.question}</span>
        <span className="swarm__label swarm__label--mid">{labels.agents}</span>
        <span className="swarm__label">{labels.evidence}</span>
      </div>
    </div>
  );
}
