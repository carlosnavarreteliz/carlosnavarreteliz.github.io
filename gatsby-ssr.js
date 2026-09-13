const React = require("react");

exports.onRenderBody = ({setHtmlAttributes, setHeadComponents}) => {
  setHtmlAttributes({lang: "en"});
  setHeadComponents([
    <link key="preconnect-gfonts" rel="preconnect" href="https://fonts.googleapis.com" />,
    <link key="preconnect-gstatic" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
    // Mozilla Headline (display) + Mozilla Text (reading) + Instrument Serif
    // italic (the accent hand). Micro-labels use the system mono stack.
    <link
      key="fonts"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Mozilla+Headline:wght@400;500;600;700&family=Mozilla+Text:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
    />,
    // Scalable mark for browsers that support it; the manifest plugin still
    // emits the PNG set for the rest.
    <link key="favicon-svg" rel="icon" type="image/svg+xml" href="/favicon.svg" />,
  ]);
};
