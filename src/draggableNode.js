// draggableNode.js

import { Box, Grid, Text } from "@chakra-ui/react";
import { selector, useStore } from "./store";
import { shallow } from "zustand/shallow";

export const DraggableNode = ({ type, label, icon }) => {
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    // event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  };

  const nodeClick = (nodeType) => {
    const appData = { nodeType };
    if (typeof appData === "undefined" || !appData) {
      return;
    }

    const nodeID = getNodeID(type);
    const newNode = {
      id: nodeID,
      type,
      position: {
        x: 0,
        y: 0,
      },
      data: getInitNodeData(nodeID, type),
    };

    addNode(newNode);
  };

  return (
    <Grid
      className={"draggableNode"}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      sx={{
        height: "80px",
        width: "80px",
        padding: "8px",
        border: "1px solid",
        borderColor: "border",
        background: "white",
        borderRadius: "8px",
        placeContent: "center",
        gap: "8px",
        transition: "all 0.2s ease-in-out",
        // cursor: "grab",
        boxShadow: "secondaryShadow",
      }}
      draggable
      onClick={() => nodeClick(type)}
    >
      <Box
        sx={{
          height: "24px",
          width: "24px",
          margin: "auto",
        }}
      >
        {icon}
      </Box>

      <Text sx={{ fontWeight: "500", fontSize: "12px" }}> {label} </Text>
    </Grid>
  );
};
