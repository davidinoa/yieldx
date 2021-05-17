import styled from "styled-components";

export const Heading = styled.h2`
  font-size: 25px;
  font-weight: bold;
  line-height: 1.45;
  text-align: center;
`;

export const PrimaryButton = styled.button.attrs({
  type: "button"
})`
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  background: var(--primary);
`;

export const Message = styled.p`
  margin-bottom: 0;
  font-size: 16px;
  line-height: 165%;
  text-align: center;
  color: var(--lightest);
`;

export const Content = styled.div`
  padding: 50px 70px;
  ${PrimaryButton} {
    margin-top: 20px;
  }
`;
