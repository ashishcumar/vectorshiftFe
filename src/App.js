import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import {
  Button,
  Grid,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { shallow } from "zustand/shallow";
import { useStore } from "./store";
import { useState } from "react";
import useShowToast from "./customHook/useShowToast";

function App() {
  const {showToast} = useShowToast()
  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState({
    nodes: 0,
    edfes: 0,
    isDag: false,
  });
  const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    resetNode: state.resetNode,
  });

  const { nodes, edges, resetNode } = useStore(selector, shallow);
  const handleSubmit = async () => {

    try {
      const response = await fetch("https://vectorshiftbe-gf1v.onrender.com/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes: nodes,
          edges: edges,
        }),
      });

      const data = await response.json();
      if (data) {
        setResponse({
          nodes: data.num_nodes || 0,
          edfes: data.num_edges || 0,
          isDag: data.is_dag || true,
        });
        setShowModal(true);
      }
    } catch (error) {
      showToast({
        description:'Backend is not deployed, please run backend server locally.',
        title:'Backend Not Deployed.',
        duration:5000,
        isClosable:true,
        position:'top-right',
        status:'error'

      })
    }
  };

  return (
    <Grid
      style={{
        width: "100vw",
        minHeight: "100vh",
        padding: "8px",
        background: "rgb(241 243 244)",
        // background:'black'
      }}
    >
      {showModal ? (
        <Modal
          isOpen={showModal}
          isCentered
          onClose={() => {
            setShowModal(false);
            setResponse({});
          }}
        >
          <ModalOverlay backdropFilter={"blur(1px)"} />
          <ModalContent>
            <ModalHeader>Pipeline Succeed</ModalHeader>

            <ModalBody>
              <div
                style={{
                  padding: "20px",
                  borderRadius: "8px",
                  backgroundColor: "#e8f5e9",
                  color: "#2e7d32",
                }}
              >
                <p>
                  <strong>Number of Nodes:</strong> {response.nodes}
                </p>
                <p>
                  <strong>Number of Edges:</strong> {response.edfes}
                </p>
                <p>
                  <strong>Directed Acyclic Graph (DAG):</strong>{" "}
                  {response.isDag ? "Yes" : "No"}
                </p>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button
                sx={{
                  background: "rgb(99, 102, 241)",
                  color: "white",
                  "&:hover": {
                    background: "rgb(99, 102, 241)",
                    color: "white",
                  },
                }}
                mr={3}
                onClick={() => {
                  setShowModal(false);
                  setResponse({});
                }}
              >
                Close
              </Button>
              <Button
                variant={"outlined"}
                sx={{
                  border: "1px solid rgb(99, 102, 241)",
                  color: "rgb(99, 102, 241)",
                  "&:hover": {
                    border: "1px solid rgb(99, 102, 241)",
                    color: "rgb(99, 102, 241)",
                  },
                }}
                mr={3}
                onClick={() => {
                  setShowModal(false);
                  setResponse({});
                  resetNode();
                }}
              >
                Close & Reset Nodes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}

      <Grid
        style={{
          background: "white",
          borderRadius: "12px",
          border: "1px solid lightgrey",
        }}
      >
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton handleSubmit={handleSubmit} />
      </Grid>
    </Grid>
  );
}

export default App;
