import { Grid } from "@chakra-ui/react";
import React from "react";
import HeadingWithText from "./HeadingWithText";

function NodesWrapper({ headingText, icon, children, width,id }) {
  return (
    <Grid
      className="nodeWrapper"
      sx={{
        width: width ? width : 250,
        background: "white",
        height: "fit-content",
        border: "1px solid",
        borderColor: "hoverBorder",
        padding: "12px",
        borderRadius: "8px",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0px 0px 1px 1px #A9ABF7",
        "&:hover": {
          boxShadow: "0px 0px 3px 3px rgba(146,148,245,1)",
          "& .heading-text": {
            color: "rgba(146,148,245,1)",
          },
          "& .svgPath":{
            color: "rgba(146,148,245,1)",
          }
        },
      }}
    >
      <HeadingWithText headingText={headingText} icon={icon} id={id} />
      {children}
    </Grid>
  );
}

export default NodesWrapper;
