import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  Text,
  VStack,
  useTheme,
} from "@chakra-ui/react";
import React from "react";

function PipelineSuccess({ response, showModal, setShowModal, resetNode }) {
  const theme = useTheme();

  return (
    <Modal
      isOpen={showModal}
      isCentered
      onClose={() => setShowModal(false)}
      size="md"
    >
      <ModalOverlay backdropFilter="blur(4px)" bg="blackAlpha.300" />
      <ModalContent
        borderRadius="md"
        boxShadow={theme.shadows.primaryShadow}
        p={2}
      >
        <ModalHeader
          fontWeight="bold"
          fontSize="lg"
          color={theme.colors.primary}
          borderBottom={`1px solid ${theme.colors.border}`}
          mb={4}
        >
          Pipeline Succeeded
        </ModalHeader>

        <ModalBody>
          <VStack
            spacing={2}
            bg="#e8f5e9"
            p={5}
            borderRadius="md"
            boxShadow="sm"
            color="#2e7d32"
          >
            <Box w="100%" display="flex" justifyContent="space-between">
              <Text fontWeight="semibold">Number of Nodes:</Text>
              <Text>{response?.nodes ?? 0}</Text>
            </Box>

            <Box w="100%" display="flex" justifyContent="space-between">
              <Text fontWeight="semibold">Number of Edges:</Text>
              <Text>{response?.edges ?? 0}</Text>
            </Box>

            <Box w="100%" display="flex" justifyContent="space-between">
              <Text fontWeight="semibold">Directed Acyclic Graph (DAG):</Text>
              <Text>{response?.isDag ? "Yes" : "No"}</Text>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter gap={3}>
          <Button
            bg={theme.colors.primary}
            color="white"
            _hover={{ bg: theme.colors.primary }}
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>

          <Button
            variant="outline"
            borderColor={theme.colors.primary}
            color={theme.colors.primary}
            _hover={{
              bg: theme.colors.primaryLight100,
              borderColor: theme.colors.primary,
            }}
            onClick={() => {
              setShowModal(false);
              resetNode();
            }}
          >
            Close & Reset Nodes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default PipelineSuccess;
