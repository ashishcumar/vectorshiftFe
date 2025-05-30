// toolbar.js
import { Flex } from "@chakra-ui/react";
import { DraggableNode } from "./draggableNode";
import { toolBarJson } from "./helpers/dropdownJson";


export const PipelineToolbar = () => {
  return (
    <Flex
      gap={'12px'}
      background={'bgLight'}
      borderRadius={'0 0 12px 12px'}
      border={'1px solid'}
      borderColor={'border'}
      alignItems={'center'}
      padding={'24px 16px'}
    >
      {toolBarJson?.map(({ type, label,icon }, i) => {
        return <DraggableNode type={type} label={label} key={i} icon={icon}/>;
      })}
    </Flex>
  );
};
