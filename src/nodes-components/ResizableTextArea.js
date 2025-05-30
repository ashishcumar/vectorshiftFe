import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box, Grid, Text, Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import { useRef } from "react";

const ResizableTextarea = ({ setVariable, heading, toolTip, placeholder }) => {
  const textareaRef = useRef(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleBlur = () => {
    const element = textareaRef.current;
    if (element) {
      const text = element.innerText;
      const html = text.replace(/{{\s*(.*?)\s*}}/g, (_, tag) => {
        return `<span class="tag">{{ ${tag} }}</span>`;
      });
      element.innerHTML = html;
    }
  };

  const handleInput = () => {
    const element = textareaRef.current;
    if (!element) return;
    const text = element.innerText;
    setIsEmpty(text?.trim() == "");
    const tagMatches = [...text.matchAll(/{{\s*(.*?)\s*}}/g)];
    const uniqueTags = [...new Set(tagMatches.map((match) => match[1]))];
    setVariable(uniqueTags);
  };

  return (
    <Grid margin={"8px 0"} position={"relative"}>
      <Text
        sx={{
          fontSize: "md",
          fontWeight: "600",
          color: "#565C65",
          margin: "4px 0",
        }}
      >
        {heading}
        <span style={{ color: "red" }}>*</span>
        {toolTip ? (
          <Tooltip label={toolTip} aria-label="A tooltip">
            <QuestionOutlineIcon background="bgLight" marginLeft="4px" />
          </Tooltip>
        ) : null}
      </Text>
      <Grid position={"relative"}>
        <Box
          ref={textareaRef}
          contentEditable
          suppressContentEditableWarning
          onBlur={handleBlur}
          onInput={handleInput}
          onFocus={(e) => {
            if (e.target.id === "input") {
              e.stopPropagation();
            } else {
              const range = document.createRange();
              const selection = window.getSelection();
              range.selectNodeContents(textareaRef.current);
              range.collapse(false);
              selection.removeAllRanges();
              selection.addRange(range);
              if (textareaRef?.current?.innerHTML?.endsWith("</span>")) {
                textareaRef.current.innerHTML =
                  textareaRef?.current?.innerHTML + " ";
              }
              textareaRef.current.focus();
            }
          }}
          sx={{
            border: "1px solid #d9d8dd",
            borderRadius: "4px",
            padding: "10px",
            minHeight: "40px",
            overflowY: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            fontSize: "12px",
            width: "100%",
            color: "secondary",
            "&::before": {
              content: placeholder && isEmpty ? `"${placeholder}"` : '""',
              position: "absolute",
              left: "10px",
              top: "10px",
              color: "#aaa",
              pointerEvents: "none",
              fontSize: "12px",
            },
            "& .tag": {
              backgroundColor: "#f0f4ff",
              color: "#3f51b5",
              padding: "2px 4px",
              borderRadius: "4px",
              fontWeight: "bold",
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ResizableTextarea;
