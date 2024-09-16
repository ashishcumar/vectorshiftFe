import React from "react";
import HeadingWithText from "./HeadingWithText";
import { Grid, Input } from "@chakra-ui/react";

function TextField({ type, title, val, setVal,placeholder }) {
  return (
    <Grid>
      <HeadingWithText headingText={title} />
      <Input
        type={type}
        placeholder={placeholder ? placeholder : "text..."}
        val={val}
        setVal={(e) => setVal(e.target.value)}
        sx={{
          padding: "0 8px",
          "&:focus": {
            border: "primaryDark",
          },
          fontSize:'12px'
        }}
      />
    </Grid>
  );
}

export default TextField;
