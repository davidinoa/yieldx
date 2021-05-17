import React from "react";
import {
  Col as BootstrapCol,
  ColProps as BootstrapColProps
} from "react-bootstrap";
import getCurrPageData from "util/getCurrPageData";
import Pagination from "elements/Pagination/Pagination";
import usePagination from "hooks/usePagination";
import clsx from "clsx";
import { ListContainer, ListRow, ColVal, ColLabel } from "./ListPages.styles";

export enum ColAlign {
  Center = "CENTER",
  End = "END"
}

interface ColProps {
  value?: string;
  label?: string;
  children?: JSX.Element | null | (JSX.Element | null)[];
  align?: ColAlign;
  xs?: BootstrapColProps["xs"];
  sm?: BootstrapColProps["sm"];
  md?: BootstrapColProps["md"];
  lg?: BootstrapColProps["lg"];
  xl?: BootstrapColProps["xl"];
  className?: string;
}

function Col({ value, label, children, className, align, xs }: ColProps) {
  const combinedClasses = clsx("d-flex flex-column justify-content-center", {
    [className || ""]: className !== undefined,
    "align-items-center": align === "CENTER",
    "align-items-end": align === "END"
  });
  if (value || label) {
    return (
      <BootstrapCol xs={xs} className={combinedClasses}>
        {value && <ColVal>{value}</ColVal>}
        {label && <ColLabel>{label}</ColLabel>}
      </BootstrapCol>
    );
  }
  if (children !== undefined)
    return (
      <BootstrapCol xs={xs} className={combinedClasses}>
        {children}
      </BootstrapCol>
    );
  return null;
}

interface RowProps {
  children: JSX.Element | JSX.Element[];
}

function Row({ children }: RowProps) {
  return <ListRow>{children}</ListRow>;
}

interface ListProps {
  listItems?: ColProps[][];
  itemsPerPage?: number;
  children?: (JSX.Element | JSX.Element[])[] | JSX.Element;
}

export function List({ listItems, itemsPerPage, children }: ListProps) {
  const [page, totalPages, setPage] = usePagination(
    listItems ?? [],
    itemsPerPage || 15
  );
  if (listItems) {
    return (
      <ListContainer>
        {itemsPerPage ? (
          <>
            {getCurrPageData(listItems, itemsPerPage, page).map(cols => (
              <Row key={JSON.stringify(cols)}>
                {cols?.map(it => (
                  <Col key={JSON.stringify(it)} {...it} />
                ))}
              </Row>
            ))}
            <div className="row">
              <BootstrapCol>
                <Pagination
                  current={page}
                  total={totalPages}
                  handleChange={setPage}
                />
              </BootstrapCol>
            </div>
          </>
        ) : (
          listItems.map(cols => (
            <Row key={JSON.stringify(cols)}>
              {cols?.map(it => (
                <Col key={JSON.stringify(it)} {...it} />
              ))}
            </Row>
          ))
        )}
      </ListContainer>
    );
  }
  if (children && Array.isArray(children))
    return (
      <ListContainer>
        {itemsPerPage ? (
          <>
            {getCurrPageData(children, itemsPerPage, page).map(child => child)}
            <div className="row">
              <BootstrapCol>
                <Pagination
                  current={page}
                  total={totalPages}
                  handleChange={setPage}
                />
              </BootstrapCol>
            </div>
          </>
        ) : (
          children.map(child => child)
        )}
        <div className="row">
          <BootstrapCol>
            <Pagination
              current={page}
              total={totalPages}
              handleChange={setPage}
            />
          </BootstrapCol>
        </div>
      </ListContainer>
    );
  if (children) return <ListContainer>{children}</ListContainer>;
  throw Error("listItems or children prop required");
}

List.Row = Row;
List.Col = Col;
