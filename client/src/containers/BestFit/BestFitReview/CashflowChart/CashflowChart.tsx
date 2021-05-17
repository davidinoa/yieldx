import React, { useEffect } from "react";
import { CashFlow } from "@bondhouse/rover-portfolio-analyzer";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
  ResponsiveContainer,
  LabelList,
  Tooltip
} from "recharts";
import styled from "styled-components";
import dayjs from "dayjs";
import html2canvas from "html2canvas";
import { Card } from "elements/Card/Card";
import { currencyFormatter } from "containers/Investors/InvestorAccount/InvestorPortfolios/InvestorPortfolios";

type Props = { cashflows: Array<CashFlow> };

const Root = styled.div`
  padding: 2rem;

  * {
    font-family: var(--font-primary);
    font-size: 11px;
    font-weight: bold;
    font-feature-settings: "pnum" on, "lnum" on;
    text-transform: uppercase;
    font-size: 11px;
    line-height: 13px;
    & .recharts-default-tooltip {
      background-color: var(--dark) !important;
      :hover {
        background: red !important;
      }
    }
    & .recharts-text {
      fill: white;
      color: white;
      font-family: var(--font-secondary);
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #ffffff;
    }
  }
`;

export default function CashflowChart({ cashflows }: Props) {
  useEffect(() => {
    if (cashflows.length && document.querySelector("#cashflow-chart")) {
      html2canvas(
        document.querySelector("#cashflow-chart") as HTMLElement
      ).then(canvas => {
        (document.querySelector("#cashflow-chart") as HTMLElement).replaceWith(
          canvas
        );
      });
    }
  }, [cashflows]);

  return (
    <div style={{ flexGrow: 1 }}>
      <Card title="Portfolio Growth / Cash Flow">
        <Root>
          <ResponsiveContainer height={350}>
            <BarChart
              maxBarSize={80}
              data={transformDataForChart(cashflows)}
              margin={{ top: 10 }}
            >
              <Legend />
              <Tooltip
                cursor={{ fill: "none" }}
                formatter={value => currencyFormatter.format(Number(value))}
              />
              <CartesianGrid vertical={false} stroke="#253859" />
              <XAxis
                dataKey="date"
                tickLine={false}
                tick={{
                  fill: "white",
                  fontFamily: "var(--font-primary)"
                }}
              />
              <YAxis
                allowDecimals={false}
                tickLine={false}
                unit="k"
                tick={{
                  fill: "white",
                  letterSpacing: "0.2em"
                }}
                tickFormatter={value => `$${value / 1000}`}
              />
              <Bar
                dataKey="principal"
                stackId="cashflow"
                fill="#0FD4FF"
                isAnimationActive={false}
              />
              <Bar
                dataKey="interest"
                stackId="cashflow"
                fill="#3C7AEB"
                isAnimationActive={false}
              >
                <LabelList
                  formatter={value => {
                    return currencyFormatter.format(Number(value));
                  }}
                  dataKey="cashFlow"
                  position="top"
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Root>
      </Card>
    </div>
  );
}

function transformDataForChart(cashflows: Array<CashFlow>) {
  const now = dayjs(Date.now());
  const totalsDefault = { interest: 0, principal: 0, cashFlow: 0 };

  const getAggregate: (
    previousValue: CashFlow,
    currentValue: CashFlow,
    currentIndex: number,
    array: CashFlow[]
  ) => CashFlow = (acc, val) => ({
    ...acc,
    interest: acc.interest + val.interest,
    principal: acc.principal + val.principal,
    cashFlow: acc.cashFlow + val.cashFlow
  });

  const oneYear = cashflows
    .filter(cashflow => {
      const date = dayjs(cashflow.date);
      return date.isBefore(dayjs(now).add(1, "year"));
    })
    .reduce(getAggregate, {
      date: "0-1 YEAR",
      ...totalsDefault
    });

  const oneToTwoYears = cashflows
    .filter(cashflow => {
      const date = dayjs(cashflow.date);
      return (
        date.isAfter(dayjs(now).add(1, "year")) &&
        date.isBefore(dayjs(now).add(2, "year"))
      );
    })
    .reduce(getAggregate, {
      date: "1-2 YEARS",
      ...totalsDefault
    });

  const twoToThreeYears = cashflows
    .filter(cashflow => {
      const date = dayjs(cashflow.date);
      return (
        date.isAfter(dayjs(now).add(2, "year")) &&
        date.isBefore(dayjs(now).add(3, "year"))
      );
    })
    .reduce(getAggregate, {
      date: "2-3 YEARS",
      ...totalsDefault
    });

  const threeToFiveYears = cashflows
    .filter(cashflow => {
      const date = dayjs(cashflow.date);
      return (
        date.isAfter(dayjs(now).add(3, "year")) &&
        date.isBefore(dayjs(now).add(5, "year"))
      );
    })
    .reduce(getAggregate, {
      date: "3-5 YEARS",
      ...totalsDefault
    });

  const fiveToSevenYears = cashflows
    .filter(cashflow => {
      const date = dayjs(cashflow.date);
      return (
        date.isAfter(dayjs(now).add(5, "year")) &&
        date.isBefore(dayjs(now).add(7, "year"))
      );
    })
    .reduce(getAggregate, {
      date: "5-7 YEARs",
      ...totalsDefault
    });

  const sevenYearsPlus = cashflows
    .filter(cashflow => {
      const date = dayjs(cashflow.date);
      return date.isAfter(dayjs(now).add(7, "year"));
    })
    .reduce(getAggregate, {
      ...totalsDefault,
      date: "7+ YEARS"
    });

  return [
    oneYear,
    oneToTwoYears,
    twoToThreeYears,
    threeToFiveYears.cashFlow > 0 ? threeToFiveYears : undefined,
    fiveToSevenYears.cashFlow > 0 ? fiveToSevenYears : undefined,
    sevenYearsPlus.cashFlow > 0 ? sevenYearsPlus : undefined
  ].filter(item => item !== undefined) as CashFlow[];
}
