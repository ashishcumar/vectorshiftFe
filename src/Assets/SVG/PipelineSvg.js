import React from "react";

function PipelineSvg({ size = 24 }) {
  return (
    <svg
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-dwpknh"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      data-testid="PlayCircleOutlineRoundedIcon"
    >
      <path
        d="m10.8 15.9 4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1a.5.5 0 0 0-.8.4v7c0 .41.47.65.8.4M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
        className="svgPath"
      />
    </svg>
  );
}

export default PipelineSvg;
