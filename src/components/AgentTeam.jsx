import React from "react";

/**
 * An AI-first working session, illustrated: an orchestrator at the centre and
 * six specialists around it. Messages travel between them in a fixed sequence
 * (the orchestrator delegates, specialists hand work to each other, one
 * challenges another, a verifier flags what does not reconcile, and the draft
 * ends with a human), and each message appears in the session log beside the
 * diagram as it lands.
 *
 * The sequence is driven entirely by CSS keyframes generated per step in
 * styles.scss (team-msg-N, team-pkt-N, team-hot-N), animating only opacity and
 * transform. Positions come from fixed geometry, never Math.random(), so the
 * server render and the client agree. Under prefers-reduced-motion the
 * stylesheet drops the animation and shows the whole log at once.
 */

const W = 640;
const H = 470;
const C = {x: 320, y: 232};
const R = 165;

// Clockwise from the top. `human` is drawn differently: it is where the
// session ends, not another agent.
const RING = ["reading", "analysis", "critique", "verification", "writing", "human"];

const NODES = {orchestrator: {...C, angle: null}};
RING.forEach((id, i) => {
  const angle = -90 + i * 60;
  const rad = (angle * Math.PI) / 180;
  NODES[id] = {
    x: Math.round((C.x + R * Math.cos(rad)) * 10) / 10,
    y: Math.round((C.y + R * Math.sin(rad)) * 10) / 10,
    angle,
  };
});

// The order things happen in. Every hop is either a spoke or a ring
// neighbour, so the highlighted edge is always one that is drawn.
const STEPS = [
  {from: "orchestrator", to: "reading"},
  {from: "reading", to: "analysis"},
  {from: "analysis", to: "critique"},
  {from: "critique", to: "analysis"},
  {from: "verification", to: "orchestrator"},
  {from: "writing", to: "human"},
];

function labelPlacement(node) {
  // The centre label sits to the right, in the gap between two spokes.
  if (node.angle === null) return {x: node.x + 38, y: node.y + 5, anchor: "start"};
  const rad = (node.angle * Math.PI) / 180;
  const dx = Math.cos(rad);
  const dy = Math.sin(rad);
  const off = 30;
  const anchor = Math.abs(dx) < 0.2 ? "middle" : dx > 0 ? "start" : "end";
  return {
    x: node.x + dx * off,
    y: node.y + dy * off + (dy > 0.5 ? 12 : dy < -0.5 ? -2 : 5),
    anchor,
  };
}

function NodeLabel({id, text}) {
  const p = labelPlacement(NODES[id]);
  const lines = text.split("\n");
  // A two-line label is centred on its anchor point rather than hanging below.
  const first = lines.length > 1 ? "-0.55em" : 0;
  return (
    <text className="team__label" x={p.x} y={p.y} textAnchor={p.anchor}>
      {lines.map((line, i) => (
        <tspan key={line} x={p.x} dy={i === 0 ? first : "1.15em"}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

export default function AgentTeam({labels}) {
  const {nodes, steps, logTitle, logNote, alt} = labels;

  const spokes = RING.map((id) => [C, NODES[id]]);
  const ring = RING.map((id, i) => [NODES[id], NODES[RING[(i + 1) % RING.length]]]);

  return (
    <div className="team">
      <svg
        className="team__svg"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={alt}
        preserveAspectRatio="xMidYMid meet"
      >
        {[...spokes, ...ring].map(([a, b], i) => (
          <line key={`e-${i}`} className="team__edge" x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
        ))}

        {/* Per step: the edge lights up, a packet crosses it, the receiver pings. */}
        {STEPS.map((s, i) => {
          const a = NODES[s.from];
          const b = NODES[s.to];
          return (
            <g key={`s-${i}`}>
              <line
                className={`team__hot team__hot--${i} team__hotline`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
              />
              <circle className={`team__hot team__hot--${i} team__ping`} cx={b.x} cy={b.y} r={s.to === "orchestrator" ? 34 : 24} />
              <circle
                className={`team__pkt team__pkt--${i}`}
                cx={a.x}
                cy={a.y}
                r="5"
                style={{"--dx": `${b.x - a.x}px`, "--dy": `${b.y - a.y}px`}}
              />
            </g>
          );
        })}

        {RING.map((id, i) => {
          const n = NODES[id];
          return id === "human" ? (
            <g key={id} className="team__node team__node--human">
              <circle className="team__halo" cx={n.x} cy={n.y} r="17" />
              <circle className="team__humanring" cx={n.x} cy={n.y} r="11" />
              <circle className="team__humancore" cx={n.x} cy={n.y} r="4" />
            </g>
          ) : (
            <g key={id} className="team__node" style={{animationDelay: `${i * 0.5}s`}}>
              <circle className="team__halo" cx={n.x} cy={n.y} r="17" />
              <circle className="team__dot" cx={n.x} cy={n.y} r="8" />
            </g>
          );
        })}

        <g className="team__node team__node--core">
          <circle className="team__ring" cx={C.x} cy={C.y} r="26" />
          <circle className="team__core" cx={C.x} cy={C.y} r="12" />
        </g>

        {Object.keys(NODES).map((id) => (
          <NodeLabel key={id} id={id} text={nodes[id]} />
        ))}
      </svg>

      <div className="team__log">
        <div className="team__loghead">
          <span>{logTitle}</span>
          <span className="team__lognote">{logNote}</span>
        </div>
        <ol className="team__msgs">
          {STEPS.map((s, i) => (
            <li className={`team__msg team__msg--${i}${s.to === "human" ? " team__msg--human" : ""}`} key={i}>
              <div className="team__route">
                {nodes[s.from].replace("\n", " ")} <span aria-hidden="true">→</span>{" "}
                {nodes[s.to].replace("\n", " ")}
              </div>
              <p className="team__text">{steps[i]}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
