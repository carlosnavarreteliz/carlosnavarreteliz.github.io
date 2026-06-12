import React from "react";

export function SocialMedia({data = [], className = ""}) {
  if (!Array.isArray(data) || data.length === 0)
    return null;

  return (
    <ul
      className={
        "flex flex-wrap gap-2 items-center justify-start " +
        "list-none p-0 m-0 " +
        className
      }
    >
      {data.map((d, i) => {
        const {name, url} = d;
        return (
          <li key={`socialmedia_${i}`}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="chip inline-flex items-center gap-1.5"
            >
              {name}
              <span className="text-[9px] opacity-70" aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
