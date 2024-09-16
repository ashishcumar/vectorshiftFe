import React, { useState } from "react";
import NodesWrapper from "../nodes-components/NodesWrapper";
import TextField from "../nodes-components/TextField";
import TimerSvg from "../SVG/TimerSvg";
import { Handle, Position } from "reactflow";

function TimerNode({ id }) {
  const [time, setTime] = useState();
  return (
    <NodesWrapper headingText={"Timer"} icon={<TimerSvg />} id={id}>
      <TextField type={"time"} setVal={setTime} val={time} title={"Time"} />
      <Handle
        type="source"
        className="handle"
        position={Position.Right}
        id={`${id}-timer`}
      />
    </NodesWrapper>
  );
}

export default TimerNode;
