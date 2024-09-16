import React, { useState } from "react";
import NodesWrapper from "../nodes-components/NodesWrapper";
import Bool from "../nodes-components/bool";
import bool from "../Assets/bool.webp";
import { Handle, Position } from "reactflow";
function BoolNode({id}) {
  const [val, setVal] = useState("");
  const [boolVal, setBoolVal] = useState("");
  return (
    <NodesWrapper headingText={"Boolean"} icon={bool} id={id}>
      <Bool
        title={val}
        setVal={setVal}
        type={"text"}
        val={val}
        boolVal={boolVal}
        setBoolVal={setBoolVal}
      />
        <Handle sx={{
                    height: "18px",
                    width: "18px",
                    border: "1px solid lightgrey",
                    borderRadius: "12px",
                    background: "white",
        }}
        type="source" position={Position.Left} id={`${id}-bool`} />
    </NodesWrapper>
  );
}

export default BoolNode;
