import React from "react";
import userEvent from "@testing-library/user-event";
import Dropzone from "react-dropzone";
import { act, render, waitFor } from "test/utils";
import { fireEvent } from "@testing-library/react";
import { FileUpload } from "elements/FileUpload/FileUpload";
import { SupportedParser } from "elements/FileUpload/Parsers";

test("snapshot test", async () => {
  const onFileComplete = jest.fn();

  const ui = (
    <FileUpload
      onFileComplete={parsed => {
        onFileComplete(parsed);
        console.error(parsed);
      }}
    />
  );
  const { asFragment, container, rerender } = render(ui);
  expect(asFragment()).toMatchSnapshot();
});
test.skip("invoke onDragEnter when dragenter event occurs", async () => {
  const onFileComplete = jest.fn();

  const ui = (
    <FileUpload
      parser={(data, meta) => {
        // throw new Error("yeahh");
        return new Promise(
          res =>
            onFileComplete() &&
            res({
              data: [1],
              meta: {
                name: "this.jsx",
                type: "application/json",
                size: 1048,
                parser: SupportedParser.JSON
              }
            })
        );
      }}
      onFileComplete={parsed => {
        onFileComplete(parsed);
        console.error(parsed);
      }}
    />
  );
  const { rerender, findByTestId } = render(ui);

  const file = new File([JSON.stringify({ ping: true })], "ping.json", {
    type: "application/json"
  });
  const data = mockData([file]);
  const dropzone = await findByTestId("FileUpload");
  if (dropzone) dispatchEvt(dropzone, "dragenter", data);
  await flushPromises(rerender, ui);

  // expect(dropzone).toEqual({});
  expect(onFileComplete).toHaveBeenCalled();
});

async function flushPromises<T extends any>(
  rerender: (param: T) => void,
  ui: T
) {
  await act(() => waitFor(() => rerender(ui)));
}

function dispatchEvt(
  node: Element | Node | Document | Window,
  type: string,
  data: any
) {
  const event = new Event(type, { bubbles: true });
  Object.assign(event, data);
  fireEvent(node, event);
}

function mockData(files: any[]) {
  return {
    dataTransfer: {
      files,
      items: files.map((file: any) => ({
        kind: "file",
        type: file.type,
        getAsFile: () => file
      })),
      types: ["Files"]
    }
  };
}
