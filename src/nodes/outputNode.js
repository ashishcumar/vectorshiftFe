// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import NodesWrapper from "../nodes-components/NodesWrapper";
import TextField from "../nodes-components/TextField";
import SelectList from "../nodes-components/Select";
import { outputDropdown } from "../helpers/dropdownJson";
import OutputSvg from "../SVG/OutputSvg";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  return (
    <NodesWrapper headingText={"Output"} icon={<OutputSvg />} id={id}>
      <Handle type="target" className="handle" position={Position.Left} id={`${id}-value`} />
      <TextField
        type={"text"}
        setVal={setCurrName}
        val={currName}
        title={"Field Name"}
      />
      <SelectList
        headingText={"Type"}
        optionList={outputDropdown}
        setVal={setOutputType}
        val={outputType}
      />
    </NodesWrapper>
  );
};
