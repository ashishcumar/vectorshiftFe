import React from "react";
import HeadingWithText from "../nodes-components/HeadingWithText";
import { useState } from "react";
import NodesWrapper from "../nodes-components/NodesWrapper";
import CheckboxWithText from "../nodes-components/CheckboxWithText";
import SelectList from "../nodes-components/Select";
import { pipelineList } from "../helpers/dropdownJson";
import { Box, Text } from "@chakra-ui/react";
import PipelineSvg from "../SVG/PipelineSvg";
import { Handle, Position } from "reactflow";

function PipelineNode({id}) {
  const [batchMode, setBatchMode] = useState();
  const [selectedPipeline, setSelectedPipeline] = useState();
  return (
    <NodesWrapper headingText={"Pipeline"} icon={<PipelineSvg />} id={id}>
      <HeadingWithText />
      <SelectList
        headingText={"Select Pipeline"}
        optionList={pipelineList}
        setVal={setSelectedPipeline}
        val={selectedPipeline}
      />
      <Box sx={{margin:'0 8px'}}>
      <CheckboxWithText
        setVal={setBatchMode}
        val={batchMode}
        text={"Batch Mode"}
      />
      <Text sx={{fontSize:'12px',color:'secondaryLight'}}> Not seeing the input and output you expect? (Did you deploy your pipeline) </Text>
      </Box>
      <Handle type="source" className="handle" position={Position.Right} id={`${id}-pipeline`} />
    </NodesWrapper>
  );
}

export default PipelineNode;
