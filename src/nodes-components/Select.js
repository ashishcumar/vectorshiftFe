// import { ChevronDownIcon } from "@chakra-ui/icons";
// import { Box, Flex, Text, Icon, List, ListItem } from "@chakra-ui/react";
// import { useState, useRef, useEffect } from "react";
// // headingText, optionList, val, setVal, sideTitle
// const SelectList = ({ optionList, val, setVal, placeholder = "Select..." }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState(val);
//   const selectRef = useRef(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (selectRef.current && !selectRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSelect = (option) => {
//     setSelected(option);
//     setVal(option);
//     setIsOpen(false);
//   };

//   return (
//     <Box position="relative" ref={selectRef} width="100%" overflow={"visible"}>
//       {/* Select Trigger */}
//       <Flex
//         align="center"
//         justify="space-between"
//         p={2}
//         border="1px solid"
//         borderColor="gray.200"
//         borderRadius="md"
//         cursor="pointer"
//         _hover={{ borderColor: "gray.300" }}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <Text fontSize="sm">{selected ? selected.label : placeholder}</Text>
//         <Icon
//           as={ChevronDownIcon}
//           w={4}
//           h={4}
//           transition="transform 0.2s"
//           transform={isOpen ? "rotate(180deg)" : "none"}
//         />
//       </Flex>

//       {/* Dropdown Menu */}
//       {isOpen && (
//             <Box
//               width="100%"
//               mt={1}
//               border="1px solid"
//               borderColor="gray.200"
//               borderRadius="md"
//               bg="white"
//               boxShadow="md"
//               zIndex="dropdown"
//               maxHeight="200px"
//               overflowY="auto"
//             >
//               <List>
//                 {optionList?.map((option) => (
//                   <ListItem
//                     key={option.value}
//                     p={2}
//                     fontSize="sm"
//                     _hover={{ bg: "gray.50" }}
//                     onClick={() => handleSelect(option)}
//                     bg={
//                       selected?.value === option.value
//                         ? "blue.50"
//                         : "transparent"
//                     }
//                     color={
//                       selected?.value === option.value ? "blue.600" : "inherit"
//                     }
//                   >
//                     {option.label}
//                   </ListItem>
//                 ))}
//               </List>
//             </Box>

//       )}
//     </Box>
//   );
// };

// export default SelectList;

import { ChevronDownIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Icon,
  List,
  ListItem,
  useOutsideClick,
  Grid,
  Tag,
  Tooltip,
} from "@chakra-ui/react";
import { useState, useRef } from "react";

const SelectList = ({
  headingText,
  optionList = [],
  val,
  setVal,
  placeholder = "Select...",
  toolTip = "",
  tag,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setVal(option);
    setIsOpen(false);
  };

  return (
    <Grid>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        margin={tag ?"8px 0" : "4px 0"}
      >
        <Flex alignItems={"center"} gap={"8px"}>
          <Text
            sx={{
              fontSize: "md",
              fontWeight: "600",
              color: "#565C65",
              margin: "4px 0",
            }}
          >
            {headingText}
          </Text>
          {toolTip ? (
            <Tooltip label={toolTip} fontSize={"10px"}>
              <QuestionOutlineIcon
                fontWeight={"bold"}
                height={"16px"}
                objectFit={"contain"}
                color="#565C65"
              />
            </Tooltip>
          ) : null}
        </Flex>
        {tag ? (
          <Tag
            sx={{
              fontSize: "10px",
              backgroundColor: "primary",
              color: "#f0f4ff",
              padding: "0px 4px",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          >
            Dropdown
          </Tag>
        ) : null}
      </Flex>

      <Box
        position="relative"
        width="100%"
        overflow={"visible"}
        zIndex={"auto"}
      >
        <Flex
          align="center"
          justify="space-between"
          p={2.5}
          border="1px solid"
          borderColor="gray.300"
          borderRadius="md"
          cursor="pointer"
          _hover={{ borderColor: "gray.400" }}
          onClick={() => setIsOpen(!isOpen)}
          bg="white"
          boxShadow={isOpen ? "sm" : "none"}
          transition="all 0.2s"
        >
          <Text fontSize="sm" color={val ? "gray.900" : "gray.500"}>
            {val?.label || placeholder}
          </Text>
          <Icon
            as={ChevronDownIcon}
            w={5}
            h={5}
            transition="transform 0.2s"
            transform={isOpen ? "rotate(180deg)" : "none"}
          />
        </Flex>

        {/* Dropdown Menu */}
        {isOpen && (
          <Box
            // position="absolute"
            top="100%"
            left="0"
            right="0"
            zIndex="dropdown"
            mt="2"
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            boxShadow="md"
            maxHeight="200px"
            overflowY="scroll"
          >
            <List spacing={0}>
              {optionList.map((option) => (
                <ListItem
                  key={option.value}
                  p={2.5}
                  fontSize="sm"
                  cursor="pointer"
                  _hover={{ bg: "gray.50" }}
                  bg={
                    val?.value === option.value
                      ? "primaryLight200"
                      : "transparent"
                  }
                  color={val?.value === option.value ? "primary" : "gray.800"}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>
    </Grid>
  );
};

export default SelectList;
