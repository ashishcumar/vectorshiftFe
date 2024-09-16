import {
  Box,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import HeadingWithText from "./HeadingWithText";

const ResizableTextarea = ({
  title,
  val,
  setVal,
  variable,
  setVariable,
  handleInputChange,
}) => {
  const textareaRef = useRef(null);
  const addVariableBox = () => {
    setVariable([...variable, { id: variable.length }]);
  };

  const renderInputs = () => {
    return variable?.map((input) => (

        <Input
          id="input"
          type="text"
          style={{
            fontSize: "10px",
            zIndex: 1,
            color: "rgb(99, 102, 241)",
            margin: "0 4px",
            display: "inline-block",
            height: "20px",
            width: "100px !important",
            minWidth: "100px !important",
            maxWidth: "100px !important",
            paddingLeft: "24px",
            border: "1px solid rgb(99, 102, 241)",
            outline: "none",
            backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22><text x=%220%22 y=%2212%22 fill=%22rgb(99, 102, 241)%22 font-size=%2210%22>{%7B%7D}</text></svg>')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "5px center", 
          }}
          key={input.id}
          value={input.value || ""}
          onChange={(e) => {
            handleInputChange(e, input.id);
            e.target.style.height = "auto";
          }}
          onBlur={(e) => {
            textareaRef.current.focus();
          }}
        />
    ));
  };

  return (
    <Grid sx={{ position: "relative" }}>
      <HeadingWithText headingText={title} />
      <div style={{ position: "relative" }}>
        <p
          onClick={addVariableBox}
          style={{
            fontSize: "10px",
            position: "absolute",
            top: "-28px",
            right: "0",
          }}
        >
          {"{{}}"}
        </p>
        <div
          ref={textareaRef}
          id={"div"}
          contentEditable={true}
          suppressContentEditableWarning={true}
          style={{
            border: "1px solid #d9d8dd",
            borderRadius: "4px",
            padding: "10px",
            minHeight: "40px",
            overflowY: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            fontSize: "12px",
            width: "220px",
          }}
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
              textareaRef.current.focus();
            }
          }}
        >
          {renderInputs()}
        </div>
      </div>
    </Grid>
  );
};

export default ResizableTextarea;
