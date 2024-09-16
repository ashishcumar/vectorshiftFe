// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import SelectList from "../nodes-components/Select";
import TextField from "../nodes-components/TextField";
import NodesWrapper from "../nodes-components/NodesWrapper";
import { inputDropdown } from "../helpers/dropdownJson";
import InputSvg from "../SVG/InputSvg";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");
  return (
    <NodesWrapper headingText={"Input"} icon={<InputSvg />} id={id}>
      <TextField
        type={"text"}
        setVal={setCurrName}
        val={currName}
        title={"Field Name"}
      />
      <SelectList
        headingText={"Type"}
        optionList={inputDropdown}
        val={inputType}
        setVal={setInputType}
      />
      <Handle type="source" className="handle" position={Position.Right} id={`${id}-value`} />
    </NodesWrapper>
  );
};
