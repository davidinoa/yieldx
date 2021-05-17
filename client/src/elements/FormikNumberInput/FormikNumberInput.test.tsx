import React, { ComponentType, PropsWithChildren } from "react";
import {
  fireEvent,
  render,
  RenderOptions,
  RenderResult,
  waitFor,
  screen
} from "@testing-library/react";
import { Formik } from "formik";
import FormikNumberInput from "./FormikNumberInput";

describe("FormikNumberInput", () => {
  const providers: ComponentType = (props: PropsWithChildren<{}>) => {
    const { children } = props;

    return (
      <Formik
        initialValues={{ foo: "foo" }}
        onSubmit={() => {
          /* do nothing */
        }}
      >
        {children}
      </Formik>
    );
  };

  function formikRender(
    ui: React.ReactElement,
    options?: Omit<RenderOptions, "queries">
  ): RenderResult {
    return render(ui, { wrapper: providers, ...options });
  }

  function getInput(utils: RenderResult): HTMLInputElement {
    return utils.getByRole("textbox") as HTMLInputElement;
  }

  async function typeInput(
    input: HTMLInputElement,
    value: string
  ): Promise<void> {
    for (let i = 0, len = value.length; i < len; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await waitFor(() => {
        fireEvent.change(input, {
          target: { value: value.substring(0, i + 1) }
        });
      });
    }
  }

  test("renders without crashing", () => {
    formikRender(<FormikNumberInput data-testid="element" name="foo" />);
  });

  test("exposes an input textbox", () => {
    const utils = formikRender(
      <FormikNumberInput data-testid="element" name="foo" />
    );
    const input = getInput(utils);
    expect(input).toBeInTheDocument();
  });

  test("handles numbers with two decimal places by default", async () => {
    const utils = formikRender(
      <FormikNumberInput data-testid="element" name="foo" />
    );
    const input = getInput(utils);
    await typeInput(input, "1234");
    expect(input.value).toBe("12.34");
    // Obnoxious, but we need to do this otherwise we get a strange error about not using act(...) when updating a child
    // in <Formik>. See the below for more info:
    //  https://github.com/testing-library/react-testing-library/issues/535#issuecomment-576816390
    await waitFor(() => screen.queryByRole("textbox"));
  });

  test("does nothing with non-numeric input", async () => {
    const utils = formikRender(
      <FormikNumberInput data-testid="element" name="foo" />
    );
    const input = getInput(utils);
    await typeInput(input, "foo");
    expect(input.value).toBe("");
    await waitFor(() => screen.queryByRole("textbox"));
  });

  test("allows inputting a number up to the maximum value", async () => {
    const utils = formikRender(
      <FormikNumberInput data-testid="element" name="foo" maxValue={100} />
    );
    const input = getInput(utils);
    await typeInput(input, "10000");
    expect(input.value).toBe("100.00");
    await waitFor(() => screen.queryByRole("textbox"));
  });

  test("does not allow inputting a number greater than the maximum value", async () => {
    const utils = formikRender(
      <FormikNumberInput data-testid="element" name="foo" maxValue={100} />
    );
    const input = getInput(utils);
    await typeInput(input, "10001");
    expect(input.value).toBe("10.00");
    await waitFor(() => screen.queryByRole("textbox"));
  });
});
