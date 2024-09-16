import React from "react";

function ChatSvg({ color = "black", size = 24 }) {
  return (
    <svg
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-dwpknh"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      data-testid="ChatRoundedIcon"
    >
      <path
        d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M7 9h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1m6 5H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m4-6H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1"
       className="svgPath"
        fill={color}
      />
    </svg>
  );
}

export default ChatSvg;
