import React from "react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";
import "../index.css"
function HeadingWithText({ headingText, icon, fontSizeParam, id }) {
  const [selectedNode, setSelectedNode] = useState("");
  const selector = (state) => ({
    removeNode: state.removeNode,
  });
  const { removeNode } = useStore(selector, shallow);

  const updateSelectedNode = () => {
    if (!selectedNode) {
      setSelectedNode(id);
    } else if (selectedNode === id) {
      removeNode(id);
    } else {
      console.log("unhandled case");
    }
  };
  return (
    <Grid
      sx={{
        gridTemplateColumns: icon ? "3fr 1fr" : "1fr",
        gap: "12px",
        padding: !icon ? "8px 0" : "0",
      }}
    >
      <Flex sx={{ gap: "12px", alignItems: "center" }}>
        {typeof icon === "string" ? (
          <img
            src={icon}
            alt={headingText}
            style={{
              height: "18px",
              width: "18px",
            }}
          />
        ) : typeof icon === "object" ? (
          <Box
            sx={{
              height: "24px",
              width: "24px",
              display: "grid",
              placeContent: "center",
            }}
          >
            {icon}
          </Box>
        ) : null}
        <Text
          className={icon ? "heading-text" : ""}
          sx={{
            fontSize: icon ? "md" : fontSizeParam ? fontSizeParam : "sm",
            color: "secondaryLight",
            fontWeight: "600",
          }}
        >
          {headingText}
        </Text>
      </Flex>
      {icon ? (
        <Flex sx={{ justifyContent: "right" }} onClick={updateSelectedNode}>
          <SmallCloseIcon
            style={{
              color: selectedNode === id ? "white" : "black",
              background: selectedNode === id ? "salmon" : "white",
              borderRadius: "50%",
            }}
          />
        </Flex>
      ) : null}
    </Grid>
  );
}

export default HeadingWithText;
