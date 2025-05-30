import React from "react";

const InputSvg = ({ size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className="svgPath"
    >
      <path
        d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2M11 16l4-4-4-4v3H1v2h10z"
        className="svgPath"
      />
    </svg>
  );
};

export default InputSvg;
