export function HeroVisual() {
  return (
    <div className="hero-visual-wrap">
      <div className="visual-topline">
        <span className="mono-label">FIG. 01 / CHANGE IN REVIEW</span>
        <span className="visual-coordinate">HX—04.18</span>
      </div>
      <svg
        aria-labelledby="forge-visual-title forge-visual-description"
        className="forge-visual"
        role="img"
        viewBox="0 0 680 490"
      >
        <title id="forge-visual-title">An illustrative software verification diagram</title>
        <desc id="forge-visual-description">
          Connected software modules pass through inspection points. A flagged
          dependency is isolated and a verified path is reinforced. This is a
          conceptual illustration, not live product output.
        </desc>
        <defs>
          <pattern height="24" id="hero-grid" patternUnits="userSpaceOnUse" width="24">
            <path className="grid-line" d="M24 0H0V24" />
          </pattern>
          <linearGradient id="beam-fill" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#273543" />
            <stop offset="1" stopColor="#17222d" />
          </linearGradient>
          <linearGradient id="beam-edge" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#5b7489" stopOpacity=".7" />
            <stop offset=".5" stopColor="#344a5d" stopOpacity=".3" />
            <stop offset="1" stopColor="#5b7489" stopOpacity=".7" />
          </linearGradient>
          <filter height="160%" id="soft-highlight" width="160%" x="-30%" y="-30%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        <rect className="diagram-field" height="490" rx="5" width="680" />
        <rect fill="url(#hero-grid)" height="490" opacity=".66" rx="5" width="680" />
        <path className="diagram-frame" d="M18 64V18h46M616 18h46v46M18 426v46h46m552 0h46v-46" />
        <path className="diagram-axis" d="M340 47v398M57 245h566" />

        <g className="diagram-connection">
          <path d="M139 150h88l48 48h55m66 0h49l49-48h47" />
          <path d="M139 340h88l48-48h55m66 0h49l49 48h47" />
          <path d="M173 150v190m334-190v190M275 198v94m130-94v94" />
          <path className="connection-verified" d="M275 245h130" />
        </g>

        <g className="diagram-module module-muted">
          <path d="m91 131 17-10h48l17 10v38l-17 10h-48l-17-10v-38Z" />
          <path d="M108 121v20l24 14 24-14v-20M132 155v24m-24-38h48" />
          <circle cx="132" cy="141" r="4" />
        </g>
        <g className="diagram-module module-muted">
          <path d="m91 321 17-10h48l17 10v38l-17 10h-48l-17-10v-38Z" />
          <path d="M108 311v20l24 14 24-14v-20M132 345v24m-24-38h48" />
          <circle cx="132" cy="331" r="4" />
        </g>

        <g className="diagram-core">
          <path className="core-halo" d="m242 173 24-14h148l24 14v144l-24 14H266l-24-14V173Z" />
          <path className="core-shell" d="m251 180 20-12h138l20 12v130l-20 12H271l-20-12V180Z" />
          <path className="core-inset" d="m270 195 10-6h120l10 6v100l-10 6H280l-10-6V195Z" />
          <path className="core-lines" d="M289 214h92m-92 18h64m-64 18h81m-81 18h52" />
          <circle className="core-port" cx="340" cy="283" r="4" />
          <text className="svg-mono core-caption" textAnchor="middle" x="340" y="356">CHANGE SET / 04</text>
        </g>

        <g className="inspection-tag">
          <path d="M466 108h101l15 15v35H466z" />
          <path d="m567 108 15 15h-15z" />
          <circle cx="483" cy="132" r="4" />
          <text className="svg-mono" x="495" y="129">ASSUMPTION</text>
          <text className="svg-mono tag-sub" x="495" y="143">UNDER REVIEW</text>
          <path className="tag-leader" d="M482 158v18l-31 31" />
        </g>
        <g className="pass-tag">
          <path d="M466 332h101l15 15v35H466z" />
          <path d="m567 332 15 15h-15z" />
          <path d="m480 350 5 5 10-11" />
          <text className="svg-mono" x="502" y="352">PATH TESTED</text>
          <text className="svg-mono tag-sub" x="502" y="367">EVIDENCE LINKED</text>
          <path className="tag-leader pass-leader" d="M466 350h-26l-35-35" />
        </g>

        <g className="inspection-ring">
          <circle cx="405" cy="245" r="27" />
          <circle cx="405" cy="245" r="18" />
          <path d="M405 209v-7m0 86v-7m36-36h7m-86 0h7m61-25 5-5m-61 61 5-5m51 0 5 5m-61-61 5 5" />
        </g>

        <g className="diagram-ticks">
          <path d="M57 76h20m-20 7h11M603 76h20m-11 7h11M57 405h20m-20 7h11M603 405h20m-11 7h11" />
        </g>
        <text className="svg-mono diagram-note" x="40" y="44">INPUT</text>
        <text className="svg-mono diagram-note" textAnchor="end" x="640" y="44">INSPECTED PATH</text>
        <text className="svg-mono diagram-note bottom-note" x="40" y="457">STRUCTURE / DEPENDENCY / EVIDENCE</text>
        <text className="svg-mono diagram-note bottom-note" textAnchor="end" x="640" y="457">SCHEMATIC ONLY</text>
      </svg>
      <div className="visual-caption">
        <span className="status-marker" />
        <span>ILLUSTRATIVE VERIFICATION MODEL</span>
        <span className="caption-divider" />
        <span>NOT LIVE PRODUCT DATA</span>
      </div>
    </div>
  );
}
