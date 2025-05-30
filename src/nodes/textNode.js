// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import NodesWrapper from "../nodes-components/NodesWrapper";
import ResizableTextarea from "../nodes-components/ResizableTextArea";
import { Box, Grid, Input, Text, Tooltip } from "@chakra-ui/react";
import TextSvg from "../Assets/SVG/TextSvg";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

export const TextNode = ({ id }) => {
  const [titleText, setTitleText] = useState(id);
  const [variable, setVariable] = useState([]);

  return (
    <NodesWrapper
      headingText={"Text"}
      subHeading={
        "Accepts Text from upstream nodes and allows you to write additional text / concatenate different texts to pass to downstream nodes."
      }
      icon={<TextSvg />}
      id={id}
    >
      <Input
        value={titleText}
        sx={{
          border: "none",
          outline: "none",
          background: "primaryLight200",
          textAlign: "center",
          maxH: "30px",
          margin: "4px 0",
          fontSize: "12px",
        }}
        onChange={(e) => setTitleText(e.target.value)}
      />

      <ResizableTextarea
        setVariable={setVariable}
        heading={"Text"}
        toolTip={"The text to be processed"}
        placeholder={"Type {{ to utilize variables"}
      />

      {variable.length
        ? variable.map((item, i) => {
            const topPos = `${((i + 1) / (variable.length + 1)) * 100}%`;
            return (
              <Tooltip
                key={`${id}-${item}`}
                label={item}
                placement="right"
                hasArrow
              >
                <Box position="absolute" top={topPos} right={0}>
                  <Handle
                    type="source"
                    position={Position.Right}
                    id={`${id}-Text`}
                    onConnect={(params) => console.log("Connected:", params)}
                  />
                </Box>
              </Tooltip>
            );
          })
        : null}

      
    </NodesWrapper>
  );
};
