import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { FileUpload, FileUploadProps } from "elements/FileUpload/FileUpload";
import { ParseResult } from "elements/FileUpload/Parsers";
import { FileList } from "./FileContent";

const exampleStyle = {
  margin: "80px",
  border: "1px solid #cccccc55",
  borderRadius: 10
};

const Template: Story<FileUploadProps> = args => {
  const [results, setResults] = useState<ParseResult[]>([]);
  const { onFileComplete: _ignore, ...props } = args;
  return (
    <div style={exampleStyle}>
      <FileUpload
        {...props}
        onFileComplete={res => {
          setResults([...results, res]);
          return undefined;
        }}
      />
      {results.length > 0 ? <FileList files={results} /> : null}
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
export default {
  component: FileUpload,
  title: "Elements/FileUpload"
} as Meta;
