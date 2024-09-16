import React from "react";
import NodesWrapper from "../nodes-components/NodesWrapper";
import SelectList from "../nodes-components/Select";
import { chatMemoryList } from "../helpers/dropdownJson";
import ChatSvg from "../SVG/ChatSvg";
import { Handle, Position } from "reactflow";

function Chat({id}) {
  return (
    <NodesWrapper headingText={"Chat"} icon={<ChatSvg />} id={id}>
      <SelectList headingText={"Type"} optionList={chatMemoryList} />
      <Handle className="handle" type="source" position={Position.Left} id={`${id}-chat`} />
    </NodesWrapper>
  );
}

export default Chat;
