import React from "react";
import { ReactComponent as MoreIcon } from "../../assets/svg/ellipsis.svg";
import { ReactComponent as BackIcon } from "../../assets/svg/left.svg";
import { ReactComponent as NextIcon } from "../../assets/svg/right.svg";
import {
  ArrowButton,
  Button,
  Container,
  MoreButton
} from "./Pagination.styles";

interface Props {
  total: number;
  current: number;
  handleChange: (number: number) => void;
}

function Pagination({ total, current, handleChange }: Props) {
  return (
    <Container data-testid="pagination" hidden={total < 2}>
      <ArrowButton
        disabled={current === 1}
        data-testid="Pagination-ArrowButton-Back"
        onClick={() => handleChange(current - 1)}
      >
        <BackIcon />
      </ArrowButton>
      {Array(3)
        .fill(null)
        .map((_, i) => {
          const number = i + 1;
          return (
            <Button
              key={number}
              active={current === number}
              data-testid={`Pagination-Button-${number}`}
              onClick={() => handleChange(number)}
              hidden={
                total < number || (total > 5 && current > 3 && number !== 1)
              }
            >
              {number}
            </Button>
          );
        })}
      <MoreButton hidden={total <= 5 || current <= 3}>
        <MoreIcon />
      </MoreButton>
      {Array(3)
        .fill(null)
        .map((_, i) => {
          const number = current + i - 1;
          return (
            <Button
              key={number}
              onClick={() => handleChange(number)}
              data-testid={`Pagination-Button-${number}`}
              active={current === number}
              hidden={total <= 5 || current <= 3 || current > total - 3}
            >
              {number}
            </Button>
          );
        })}
      <MoreButton hidden={total <= 5 || current > total - 3}>
        <MoreIcon />
      </MoreButton>
      {Array(3)
        .fill(null)
        .map((_, i) => {
          const number = total - i;
          if (number <= 3) {
            return null;
          }
          return (
            <Button
              key={number}
              onClick={() => handleChange(number)}
              data-testid={`Pagination-Button-${number}`}
              active={current === number}
              hidden={
                total <= 3 ||
                (total > 5 && current < total - 2 && number !== total)
              }
            >
              {number}
            </Button>
          );
        })
        .reverse()}
      <ArrowButton
        disabled={current === total}
        data-testid="Pagination-ArrowButton-Next"
        onClick={() => handleChange(current + 1)}
      >
        <NextIcon />
      </ArrowButton>
    </Container>
  );
}

export default Pagination;
