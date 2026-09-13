import React, {useId} from "react";

/**
 * The mark: two equal circles overlapping, with the lens between them filled.
 *
 * It is his research in one glyph — two positions, and the region where they
 * actually agree. It stays legible down to 16px because it is only three
 * shapes and one weight of stroke.
 *
 * The clipPath id is generated per instance; a hard-coded one would collide as
 * soon as the mark appears twice on a page (nav and footer both use it).
 */
export default function Logo({size = 34, tone = "#23394e", lens = "#2e6f9e", className = ""}) {
  const clip = `lens-${useId().replace(/:/g, "")}`;

  return (
    <svg
      className={`logo ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      role="img"
      aria-label="Carlos Navarrete"
      style={{width: size, height: size}}
    >
      <defs>
        <clipPath id={clip}>
          <circle cx="25.2" cy="20" r="10.6" />
        </clipPath>
      </defs>

      {/* The overlap, drawn first so the outlines sit on top of it. */}
      <circle
        className="logo__lens"
        cx="14.8"
        cy="20"
        r="10.6"
        fill={lens}
        clipPath={`url(#${clip})`}
      />

      <circle cx="14.8" cy="20" r="10.6" stroke={tone} strokeWidth="1.9" />
      <circle cx="25.2" cy="20" r="10.6" stroke={tone} strokeWidth="1.9" />
    </svg>
  );
}
