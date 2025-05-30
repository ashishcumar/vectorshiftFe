// submit.js

import { Button } from "@chakra-ui/react";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

export const SubmitButton = ({ handleSubmit }) => {
  const selector = (state) => ({
    nodes: state.nodes,
  });

  const { nodes } = useStore(selector, shallow);
  return (
    <Button
      sx={{
        margin: "auto",
        display: "block",
        padding: "4px 12px",
        backgroundColor: "primary",
        color: "white",
        borderRadius: "4px",
        width: "fit-content",
        "&:hover": {
          backgroundColor: "primary",
        },
      }}
      width={"fit-content"}
      onClick={handleSubmit}
      disabled={!nodes?.length}
    >
      Submit
    </Button>
  );
};
