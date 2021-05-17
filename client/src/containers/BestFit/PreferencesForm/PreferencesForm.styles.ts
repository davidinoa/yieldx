import styled, { css } from "styled-components";
import {
  Form as FormikForm,
  Field as FormikField,
  FieldArray as FormikFieldArray
} from "formik";
import { Container, Col, Form as BootStrapForm } from "react-bootstrap";
import background from "assets/svg/bestfit-background.svg";
import { mediaQuery } from "theme/breakpoints.style";
import { navbar } from "theme/theme.style";

type Props = {
  completed?: boolean;
  current?: boolean;
  selected?: boolean;
  bondOption?: boolean;
};

export const SpinnerWrapper = styled(Col)`
  height: calc(100vh - 200px);
  width: 100vw;
`;

export const BestFitContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  height: auto;
  text-align: center;
  background: url(${background}) center center repeat-y fixed;
  background-size: 100% auto;
  min-height: calc(100vh - ${navbar.height.xs});

  ${mediaQuery("sm")} {
    align-items: center;
  }
  ${mediaQuery("xxl")} {
    min-height: calc(100vh - ${navbar.height.xxl});
    padding: 3rem 3rem 4rem;
  }
`;

export const FormWrapper = styled(Container)`
  margin-top: 1rem;
  margin-bottom: 4rem;
  max-width: 960px;

  ${mediaQuery("sm")} {
    margin-bottom: 2rem;
  }
  ${mediaQuery("xxl")} {
    margin-bottom: 3rem;
    max-width: 1280px;
  }
`;

export const SharedFormStyle = css`
  width: 100%;
  border: 2px solid #253859;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: var(--page);
  position: relative;
  min-height: 24rem;
  padding: 4rem 0.5rem;

  ${mediaQuery("lg")} {
    min-height: 28rem;
  }
  ${mediaQuery("xxl")} {
    min-height: 35rem;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 0.5rem 0.5rem 0 0;
    background: var(--dark);
    margin: 0;
    top: 0.25rem;
    left: 0.25rem;
    width: calc(100% - 0.5rem);
    height: 1rem;

    ${mediaQuery("xxl")} {
      top: 0.25rem;
      left: 0.25rem;
      width: calc(100% - 0.5rem);
      height: 1.25rem;
    }
  }

  h4 {
    white-space: nowrap;

    font-size: 21px;
    line-height: 26px;
  }

  .instruction {
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--lightest);
    font-size: 0.65rem;
    margin: 0 0 0.5rem;

    ${mediaQuery("xxl")} {
      margin: 0 0 1rem;
    }
  }

  h3 {
    font-weight: 300;
    letter-spacing: normal;
    line-height: 1.65rem;
    margin: 0 0 2rem;
    font-size: 1.55rem;

    ${mediaQuery("xxl")} {
      margin: 0 0 3rem;
      font-size: 2rem;
    }
  }

  .input-container {
    margin: 0 auto;
    width: 250px;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  input[type="number"] {
    height: 50px;
  }
`;

// Using shared styles allows us to reuse form style without Formik an implicit dependency
export const StyledForm = styled.div`
  ${SharedFormStyle}
`;

export const Form = styled(FormikForm)`
  ${SharedFormStyle}
`;

export const Field = styled(FormikField).attrs({ as: "div" })``;

export const FieldArray = styled(FormikFieldArray)``;

export const BestFitQuestion = styled.div`
  display: block;
  ${mediaQuery("sm")} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.maturity-step {
    ${mediaQuery("sm")} {
      min-width: 300px;
    }
    ${mediaQuery("xxl")} {
      width: 500px;
    }
  }
`;

export const Option = styled.div.attrs({ role: "option" })`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  border-radius: 50%;
  color: var(--text);
  font-family: var(--font-secondary);
  font-weight: bold;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  background: var(--gradient);
  transition: all 300ms ease-out;
  box-shadow: ${props =>
    props.selected ? "0px 0px 50px rgba(1, 92, 255, 0.5)" : "none"};

  background: ${(props: Props) =>
    props.selected
      ? `linear-gradient(131.89deg, #015cff 3.2%, #015cff 3.21%, #0fd4ff 98.32%)`
      : undefined};

  height: 9rem;
  width: 9rem;
  font-size: 0.55rem;
  margin: 0 0.5rem 1rem;

  ${mediaQuery("lg")} {
    margin: 0 1.15rem;
  }

  ${mediaQuery("xxl")} {
    height: 11rem;
    width: 11rem;
    font-size: 0.85rem;
    margin: 0 1.65rem;
  }

  &:hover {
    background: var(--gradient);
    transition: all 300ms ease-out;
    &::before {
      border-color: transparent;
      transition: all 300ms ease-out;
    }
  }

  &::before {
    content: "";
    background: var(--page);
    border-radius: 100%;
    position: absolute;
    border: solid 1.15px white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 300ms ease-out;

    height: 8.9rem;
    width: 8.9rem;
    ${mediaQuery("xxl")} {
      height: 10.9rem;
      width: 10.9rem;
    }
  }

  ${props =>
    props.selected &&
    `
    box-shadow: 0 0 50px rgba(1, 92, 255, 0.5);
    transition: all 300ms ease-out;

    &::before {
      transition: all 300ms ease-out;
      background: rgba(0, 0, 0, 0);
      border-color: transparent;
    }
    `}

  b {
    width: 80%;
    display: block;
    font-family: var(--font-secondary);
    position: relative;
    z-index: 10;
    font-size: 0.785rem;
    margin: ${(props: Props) => (props.bondOption ? "none" : "0 5%;")};
    ${mediaQuery("xxl")} {
      font-size: 0.9rem;
      margin: ${(props: Props) => (props.bondOption ? "none" : "0.75rem 5%;")};
    }
  }
  strong {
    width: 80%;
    display: block;
    font-family: var(--font-secondary);
    position: relative;
    z-index: 10;
    font-size: 1.4rem;
    font-weight: normal;
    margin: 0 5%;
    ${mediaQuery("xxl")} {
      font-size: 1.75rem;
      margin: 0.75rem 5%;
    }
  }
  span {
    position: relative;
    z-index: 10;
    line-height: 1.45em;
    font-weight: bold;
    letter-spacing: 0.1em;
    font-size: 0.55rem;
    margin: 0.35rem 15% 0;
    padding: 0.5rem 0 0;

    ${mediaQuery("xxl")} {
      font-size: 0.7rem;
      margin: 0 20%;
      padding: 0.75rem 0 0;
    }

    &::before {
      display: block;
      content: "";
      width: 6rem;
      height: 1px;
      border-bottom: solid 1px rgba(255, 255, 255, 0.3);
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
`;

export const SectorQuestion = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${mediaQuery("sm")} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.maturity-step {
    ${mediaQuery("sm")} {
      min-width: 300px;
    }
    ${mediaQuery("xxl")} {
      width: 500px;
    }
  }
`;

export const SectorOption = styled.div.attrs({ role: "option" })`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  color: var(--text);
  font-family: var(--font-secondary);
  font-weight: bold;
  letter-spacing: 0.25em;
  border-radius: 10%;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  background: var(--gradient);
  transition: all 300ms ease-out;

  background: ${(props: Props) =>
    props.selected
      ? `linear-gradient(131.89deg, #015cff 3.2%, #015cff 3.21%, #0fd4ff 98.32%)`
      : undefined};

  height: 6rem;
  width: 9rem;
  font-size: 0.55rem;
  margin: 0 0.5rem 1rem;

  ${mediaQuery("lg")} {
    margin: 0 0.5rem 1.15rem;
  }

  ${mediaQuery("xxl")} {
    height: 10rem;
    width: 14rem;
    font-size: 0.85rem;
    margin: 0 0.5rem 1.65rem;
  }

  &:hover {
    background: var(--gradient);
    transition: all 300ms ease-out;
    &::before {
      border-color: transparent;
      transition: all 300ms ease-out;
    }
  }

  &::before {
    content: "";
    background: var(--page);
    position: absolute;
    border: solid 1.15px white;
    border-radius: 10%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 300ms ease-out;

    height: 5.9rem;
    width: 8.9rem;
    ${mediaQuery("xxl")} {
      height: 9.9rem;
      width: 13.9rem;
    }
  }

  ${props =>
    props.selected &&
    `
    &::before {
      transition: all 300ms ease-out;
      background: rgba(0, 0, 0, 0);
      border-color: transparent;
    }
    `}

  b {
    width: 80%;
    display: block;
    font-family: var(--font-secondary);
    position: relative;
    z-index: 10;
    font-size: 0.62rem;
    margin: 0 5%;
    ${mediaQuery("xxl")} {
      font-size: 0.8rem;
      margin: 0.75rem 5%;
    }
  }
  span {
    position: relative;
    z-index: 10;
    line-height: 1.45em;
    font-weight: bold;
    letter-spacing: 0.1em;
    font-size: 0.55rem;
    margin: 0.35rem 15% 0;
    padding: 0.5rem 0 0;

    ${mediaQuery("xxl")} {
      font-size: 0.7rem;
      margin: 0 20%;
      padding: 0.75rem 0 0;
    }

    &::before {
      display: block;
      content: "";
      width: 6rem;
      height: 1px;
      border-bottom: solid 1px rgba(255, 255, 255, 0.3);
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
`;

export const Toggle = styled.div`
  margin: 2rem auto 50px;
  width: 150px;
  border: 1px solid var(--border-new);
  border-radius: 100px;
  background: transparent;
  padding: 5px;
  display: flex;
`;

export const ToggleButton = styled.div`
  cursor: pointer;
  background: ${(props: Props) =>
    props.selected ? "var(--primary)" : "transparent"};
  border-radius: 30px;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  padding: 0 10px;
  margin-right: 5px;
`;

export const RadioButton = styled(BootStrapForm.Check).attrs({
  custom: true,
  inline: true,
  type: "radio"
})`
  margin-bottom: 1rem;

  .custom-control-label {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    ::before {
      display: block;
      border-width: 1.5px;
      border-color: var(--border-new);
      background: var(--page);
    }
  }
  .custom-control-input:checked ~ .custom-control-label::before {
    background: var(--page);
    border-color: var(--white);
  }
`;

export const ToggleSection = styled.div`
  display: flex;
  margin-top: 44px;
`;

type TogglCircleProps = {
  selected: boolean;
};

export const ToggleCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid;
  border-color: var(--border-new);
  background-color: ${(props: TogglCircleProps) =>
    props.selected ? `var(--white)` : `var(--page)`};
  opacity: 0.3;
  margin: 0 7px;
`;

export const ExclusionSelection = styled.div`
  display: flex;
  align-items: stretch;
  padding: 40px 0;
`;

interface ExclusionMethodProps {
  selection: string;
}

export const ExclusionMethod = styled.div`
  flex-grow: 10;
  width: -webkit-fill-available;
  padding: ${(props: ExclusionMethodProps) =>
    props.selection === "sector" ? "0 39px 0 60px;" : "0 60px 0 39px;"};
  ${mediaQuery("xxl")} {
    padding: ${(props: ExclusionMethodProps) =>
      props.selection === "sector" ? "0 40px 0 140px;" : "0 140px 0 40px;"};
  }

  > h4 {
    font-weight: bold;
    font-size: 21px;
  }
  > p {
    font-weight: normal;
    font-size: 16px;
    color: var(--lightest);
  }
  > button {
    background-image: none !important;
    :hover:enabled {
      border: 1px solid var(--subtext-3);
    }
    background: inherit;
    width: 200px;
    border-radius: 5px;
    height: 40px;
    border: 1px solid var(--border-new);
  }
`;

export const ExclusionDivider = styled.div`
  flex-grow: 1;
  .circle {
    width: 20px;
    height: 20px;
    background: var(--border-new);
    border-radius: 100px;
    position: relative;
    margin: 10px auto 10px auto;
  }

  h5 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    color: #fff;
  }

  .vertical-line {
    width: 1px;
    height: 52px;
    background: var(--border-new);
    margin: 0 auto 0 auto;
  }
`;
