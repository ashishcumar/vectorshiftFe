import React, { useState } from "react";
import NodesWrapper from "../nodes-components/NodesWrapper";
import { Button, Grid } from "@chakra-ui/react";
import TextField from "../nodes-components/TextField";
import ConditionalSvg from "../SVG/ConditionalSvg";
import { Handle, Position } from "reactflow";

function Conditions({ id }) {
  const [conditionsArr, setConditionsArr] = useState([
    {
      title: "if",
      placeHolder: "condition...",
    },
    {
      title: "then",
      placeHolder: "input",
    },

    {
      title: "else",
      placeHolder: "input",
    },
  ]);

  const pushNewCondition = () => {
    const temp = [...conditionsArr];
    const newConditon = [
      {
        title: "else if",
        placeHolder: "condition...",
      },
      {
        title: "then",
        placeHolder: "input",
      },
    ];
    const startingConditions = temp.slice(0, temp.length - 1);
    const elseCondition = temp.slice(temp.length - 1);
    setConditionsArr([...startingConditions, ...newConditon, ...elseCondition]);
  };

  const removeCondition = () => {
    const temp = [...conditionsArr];
    const startingConditions = temp.slice(0, temp.length - 3);
    const elseCondition = temp.slice(temp.length - 1);
    setConditionsArr([...startingConditions, ...elseCondition]);
  };
  return (
    <NodesWrapper
      headingText={"Condition"}
      icon={<ConditionalSvg />}
      width={350}
      id={id}
    >
      <Grid sx={{ gridTemplateColumns: "1fr 1fr", gap: "0 8px" }}>
        {conditionsArr.map((item) => {
          return (
            <TextField
              placeholder={item.placeHolder}
              title={item.title}
              key={item.title}
            />
          );
        })}
      </Grid>
      <Grid
        sx={{
          justifyContent: "space-between",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px",
          margin: "12px 0 8px 0",
        }}
      >
        <Button
          variant="solid"
          sx={{
            wordWrap: "wrap",
            background: "primaryDark",
            color: "white",
            "&:hover": {
              background: "primaryDark",
              color: "white",
            },
          }}
          onClick={pushNewCondition}
        >
          Add Condition
        </Button>
        <Button
          variant="outline"
          isDisabled={conditionsArr.length <= 3}
          onClick={removeCondition}
        >
          Remove Condition
        </Button>
      </Grid>
      <Handle  className="handle" type="source" position={Position.Left} id={`${id}-condition`} />
      <Handle className="handle" type="source" position={Position.Right} id={`${id}-condition`} />
    </NodesWrapper>
  );
}

export default Conditions;
