import { Grid, Select, Text } from "@chakra-ui/react";
import React from "react";
function SelectList({ headingText, optionList, val, setVal }) {
  return (
    <Grid sx={{ padding: "8px 0" }}>
      <Text
        sx={{
          fontSize: "sm",
          fontWeight: "600",
          marginBottom: "4px",
          color: "secondaryLight",
        }}
      >
        {headingText}
      </Text>
      <Select
        sx={{ height: "32px", border: "none", outline: "none" }}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      >
        {optionList.length ? (
          optionList.map((item) => {
            return (
              <option value={item.value} style={{ fontSize: "10px" }}>
                {item.label}
              </option>
            );
          })
        ) : (
          <option value="option1" style={{ fontSize: "10px" }}>
            No options
          </option>
        )}
      </Select>
    </Grid>
  );
}

export default SelectList;
