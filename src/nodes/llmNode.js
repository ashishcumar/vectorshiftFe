import React, { useState } from "react";
import NodesWrapper from "../nodes-components/NodesWrapper";
import awsLogo from "../Assets/aws-logo.png";
import TextField from "../nodes-components/TextField";
import SelectList from "../nodes-components/Select";
import { Handle, Position } from "reactflow";
import { awsLlm } from "../helpers/dropdownJson";
function LlmNode({ id }) {
  const [model, setModel] = useState();
  const [prompt, setPrompt] = useState();
  return (
    <NodesWrapper headingText={"AWS LLM"} icon={awsLogo} id={id}>
      <TextField
        placeholder={"Prompt"}
        title={"Prompt"}
        setVal={setPrompt}
        val={prompt}
        type={"text"}
      />
      <SelectList
        headingText={"Model"}
        optionList={awsLlm}
        val={model}
        setVal={setModel}
      />
      <Handle
        type="source"
        style={{
          height: "18px",
          width: "18px",
          border: "1px solid lightgrey",
          borderRadius: "12px",
          background: "white",
          right:'-10px',
        }}
        position={Position.Right}
        id={`${id}-llmnode`}
      />
      <Handle
        type="source"
        style={{
          height: "18px",
          width: "18px",
          border: "1px solid lightgrey",
          borderRadius: "12px",
          background: "white",
          left:'-10px'
        }}
        position={Position.Left}
        id={`${id}-llmnode`}
      />
    </NodesWrapper>
  );
}

export default LlmNode;
