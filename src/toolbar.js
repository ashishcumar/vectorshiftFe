// toolbar.js
import { DraggableNode } from "./draggableNode";
import { toolBarJson } from "./helpers/dropdownJson";


export const PipelineToolbar = () => {
  return (
    <div
      style={{
        padding: "18px",
        borderBottom: "1px solid lightgrey",
        borderRadius: "0 0 12px 12px",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        alignItems:'center'
      }}
    >
      {toolBarJson?.map(({ type, label,icon }, i) => {
        return <DraggableNode type={type} label={label} key={i} icon={icon}/>;
      })}
    </div>
  );
};
