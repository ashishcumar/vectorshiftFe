import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { Grid } from "@chakra-ui/react";
import { shallow } from "zustand/shallow";
import { useStore } from "./store";
import { useState } from "react";
import useApiCall from "./customHook/useApiCall";
import PipelineSuccess from "./components/modals/PipelineSuccess";

function App() {
  const [showModal, setShowModal] = useState(false);

  const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    resetNode: state.resetNode,
  });

  const { handleSubmit, response, loading } = useApiCall(setShowModal);
  const { resetNode } = useStore(selector, shallow);
  return (
    <Grid
      style={{
        width: "100vw",
        minHeight: "100vh",
        padding: "8px",
        background: "rgb(241 243 244)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <PipelineSuccess
        response={response}
        showModal={showModal}
        setShowModal={setShowModal}
        resetNode={resetNode}
      />

      <Grid
        style={{
          background: "white",
          borderRadius: "12px",
          border: "1px solid lightgrey",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton handleSubmit={handleSubmit} loading={loading} />
      </Grid>
    </Grid>
  );
}

export default App;
