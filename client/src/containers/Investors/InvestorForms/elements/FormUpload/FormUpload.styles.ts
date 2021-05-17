import styled from "styled-components";

export const InputContainer = styled.div`
  height: 40px;
  :focus {
    outline-style: none;
    border-color: var(--white);
  }
  border-radius: 4px;
  text-align: end;
  border: solid 1px var(--border-new);
  span{
      display: inline-block;
      text-align: left;
      width: calc(100% - 85px);
  }
`;

export const Error = styled.p`
  color: var(--issue);
`;

export const BrowseButton = styled.button`
  background: var(--dark);
  border-radius: 0px 3px 3px 0px;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  height: 100%;
  width: 78px;

`;
