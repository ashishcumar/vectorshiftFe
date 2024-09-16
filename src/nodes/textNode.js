// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import NodesWrapper from "../nodes-components/NodesWrapper";
import ResizableTextarea from "../nodes-components/ResizableTextArea";
import { Grid, Text } from "@chakra-ui/react";
import TextSvg from "../SVG/TextSvg";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");
  const [variable, setVariable] = useState([]);

  const handleInputChange = (e, id) => {
    const updatedInputBoxes = variable.map((input) =>
      input.id === id ? { ...input, value: e.target.value.trim() } : input
    );
    setVariable(updatedInputBoxes);
  };

  return (
    <NodesWrapper headingText={"Text"} icon={<TextSvg />} id={id}>
      <Grid>
        <ResizableTextarea
          title={"Text"}
          val={currText}
          setVal={setCurrText}
          variable={variable}
          setVariable={setVariable}
          handleInputChange={handleInputChange}
        />
      </Grid>
      {variable.length
        ? variable.map((item, i) => {
            return (
              <Handle
                type="source"
                position={Position.Left}
                id={`${id}-${item.id}-textnode`}
                style={{
                  top:
                    variable.length == 1
                      ? "50%"
                      : `${(100 / variable.length) * (i + 1)}%`,
                  height: "18px",
                  width: "18px",
                  border: "1px solid lightgrey",
                  borderRadius: "12px",
                  background: "white",
                  left: "-10px",
                }}
                datatype="sdf"
              />
            );
          })
        : null}
      {variable.length
        ? variable.map((item, i) => {
            return (
              <Text
                style={{
                  position: "absolute",
                  top:
                    variable.length == 1
                      ? "50%"
                      : `${(100 / variable.length) * (i + 1)}%`,
                  borderRadius: "12px",
                  right: "104%",
                  background: "white",

                  whiteSpace: "nowrap",
                  fontSize: "10px",
                  color: "rgb(99, 102, 241)",
                }}
              >
                {item?.value}
              </Text>
            );
          })
        : null}
    </NodesWrapper>
  );
};
