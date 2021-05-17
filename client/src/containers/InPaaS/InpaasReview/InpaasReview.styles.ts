import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.main`
  margin-top: 100px;
  max-width: 1400px;
  border: 1px solid var(--border-1);
  border-radius: 15px;
  padding: 80px;
  .review {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .title {
    font-weight: 300;
    font-size: 35px;
    line-height: 43px;
    text-align: center;
    padding-bottom: 20px;
  }
  .buttonContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    button:first-child {
      margin-right: 12px;
    }
  }
  .saveButton {
    padding: 15px 25px;
    background: transparent;
    border: 1px solid var(--border-2);
    color: var(--text);
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }
  .executeButton {
    width: 166px;
    height: 50px;
    background: var(--primary);
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: var(--white);
  }
  .backButton {
    display: flex;
    justify-content: left;
    align-items: center;
    position: absolute;
    top: -2rem;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    background: none;
    border: none;
  }
`;

export const InpaasPositions = styled.div`
  margin-top: 3rem;
`;
