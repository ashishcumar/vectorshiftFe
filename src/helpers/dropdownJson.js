import bool from "../Assets/bool.webp";
import InputSvg from "../SVG/InputSvg";
import OutputSvg from "../SVG/OutputSvg";
import ChatSvg from "../SVG/ChatSvg";
import ConditionalSvg from "../SVG/ConditionalSvg";
import OpenAiSvg from "../SVG/OpenAiSvg";
import PipelineSvg from "../SVG/PipelineSvg";
import TextSvg from "../SVG/TextSvg";
import TimerSvg from "../SVG/TimerSvg";
import awsLogo from "../Assets/aws-logo.png";

export const inputDropdown = [
  {
    label: "Text",
    value: "Text",
  },
  {
    label: "File",
    value: "File",
  },
  {
    label: "Audio",
    value: "Audio",
  },
];

export const outputDropdown = [
  {
    label: "Text",
    value: "Text",
  },
  {
    label: "Image",
    value: "Image",
  },
  {
    label: "Formatted Text",
    value: "Formatted Text",
  },
  {
    label: "Audio",
    value: "Audio",
  },
  {
    label: "JSON",
    value: "JSON",
  },
  {
    label: "File",
    value: "File",
  },
];

export const toolBarJson = [
  {
    type: "customInput",
    label: "Input",
    icon: <InputSvg />,
  },
  {
    type: "customOutput",
    label: "Output",
    icon: <OutputSvg />,
  },
  {
    type: "text",
    label: "Text",
    icon: <TextSvg />,
  },
  {
    type: "timer",
    label: "Timer",
    icon: <TimerSvg />,
  },
  {
    type: "bool",
    label: "Boolean",
    icon: bool,
  },
  {
    type: "openai",
    label: "OpenAi",
    icon: <OpenAiSvg />,
  },
  {
    type: "pipeline",
    label: "Pipeline",
    icon: <PipelineSvg />,
  },
  {
    type: "conditional",
    label: "Conditional",
    icon: <ConditionalSvg />,
  },
  {
    type: "chat",
    label: "Chat",
    icon: <ChatSvg />,
  },
  {
    type: "awsllm",
    label: "AWS LLM",
    icon: awsLogo,
  },
];

export const openAiLlmList = [
  {
    label: "gpt-4-turbo-2024-04-09",
    value: "gpt-4-turbo-2024-04-09",
  },
  {
    label: "gpt-3.5-turbo",
    value: "gpt-3.5-turbo",
  },
  {
    label: "gpt-3.5-turbo-16k",
    value: "gpt-3.5-turbo-16k",
  },
  {
    label: "gpt-4",
    value: "gpt-4",
  },
  {
    label: "gpt-4o",
    value: "gpt-4o",
  },
  {
    label: "gpt-4o-mini",
    value: "gpt-4o-mini",
  },
  {
    label: "gpt-4-32k",
    value: "gpt-4-32k",
  },
  {
    label: "gpt-4-turbo",
    value: "gpt-4-turbo",
  },
];

export const pipelineList = [
  {
    label: "pipeline-1",
    value: "pipeline-1",
  },
  {
    label: "pipeline-2",
    value: "pipeline-2",
  },
  {
    label: "pipeline-3",
    value: "pipeline-3",
  },
  {
    label: "pipeline-4",
    value: "pipeline-4",
  },
];

export const chatMemoryList = [
  {
    label: "Full-Formatted",
    value: "Full-Formatted",
  },
  {
    label: "Full-Raw",
    value: "Full-Raw",
  },
  {
    label: "Token-Buffer",
    value: "Token-Buffer",
  },
  {
    label: "Vector-Database",
    value: "Vector-Database",
  },
  {
    label: "Message Buffer",
    value: "Message Buffer",
  },
];

export const awsLlm = [
  {
    label:"Titan-text-express",
    value:"Titan-text-express"
  },
  {
    label:"Titan-text-lite",
    value:"Titan-text-lite"
  }
]