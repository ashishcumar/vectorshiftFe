import React from "react";

function ConditionalSvg({ size = 24 }) {
  return (
    <svg
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-dwpknh"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="SwapHorizRoundedIcon"
      width={size}
      height={size}
    >
      <path
        d="m6.14 11.86-2.78 2.79c-.19.2-.19.51 0 .71l2.78 2.79c.31.32.85.09.85-.35V16H13c.55 0 1-.45 1-1s-.45-1-1-1H6.99v-1.79c0-.45-.54-.67-.85-.35m14.51-3.21-2.78-2.79c-.31-.32-.85-.09-.85.35V8H11c-.55 0-1 .45-1 1s.45 1 1 1h6.01v1.79c0 .45.54.67.85.35l2.78-2.79c.2-.19.2-.51.01-.7"
        className="svgPath"
      />
    </svg>
  );
}

export default ConditionalSvg;
