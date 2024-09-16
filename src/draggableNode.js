// draggableNode.js

import { Box, Text } from "@chakra-ui/react";

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };
  
  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        width: "80px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        // backgroundColor: '#1C2536',
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid",
        borderColor: "lightgrey",
        display: "grid",
        placeContent: "center",
        gap: "4px",
      }}
      draggable
    >
      {typeof icon === "string" ? (
        <img
          src={icon}
          style={{
            height: "24px",
            width: "24px",
            margin: "auto",
            filter: "grey(1)",
          }}
        />
      ) : typeof icon == "object" ? (
        <Box
          sx={{
            height: "24px",
            width: "24px",
            display: "grid",
            placeContent: "center",
            margin: "auto",
          }}
        >
          {icon}
        </Box>
      ) : (
        <Box
          sx={{
            height: "24px",
            width: "24px",
            borderRadius: "4px",
            fontSize: "12px",
            borderRadius: "20px",
            fontWeight: "700",
            boxShadow: "md",
            display: "grid",
            placeContent: "center",
            margin: "auto",
          }}
        >
          {label.substring(0, 2)}
        </Box>
      )}

      <Text sx={{ fontWeight: "600", fontSize: "12px" }}> {label} </Text>
    </div>
  );
};
