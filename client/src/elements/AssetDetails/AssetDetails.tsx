import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { startCase } from "lodash";
import {
  Asset,
  AssetAssetTypeEnum,
  AssetAssetSubtypeEnum
} from "@bondhouse/rover-universe";
import ModalBase from "components/ModalBase/ModalBase";
import {
  AssetDetails as StyledAssetDetails,
  AssetDetailsLabel,
  AssetDetailsValue,
  AssetDetailsItem
} from "components/ModalBase/ModalBase.styles";
import { currencyFormatter } from "containers/Investors/InvestorAccount/InvestorPortfolios/InvestorPortfolios";
import { assetsService } from "services";
import { Spinner } from "elements/Spinner/Spinner";
import { Description } from "./AssetDetails.styles";

type Props = {
  asset: Asset;
  onHide: () => void;
};

export default function AssetDetails({ asset: { id }, onHide }: Props) {
  const [asset, setAsset] = useState<Asset>();
  useEffect(() => {
    let mounted = true;

    assetsService.getAsset(id).then(nextAsset => {
      if (mounted) {
        setAsset(nextAsset);
      }
    });

    return () => {
      mounted = false;
    };
  }, [id, setAsset]);
  if (asset == null) {
    return (
      <ModalBase show onHide={onHide} nopadding>
        <StyledAssetDetails>
          <Spinner />
        </StyledAssetDetails>
      </ModalBase>
    );
  }
  const isBond = asset.assetType === AssetAssetTypeEnum.Bond;
  const ticker = asset.ticker ?? "N/A";
  const name = asset.name ?? "N/A";
  const description = asset.description ?? "N/A";

  const fund = {
    exchange: asset.primaryExchange ?? "N/A",
    netAssets: currencyFormatter.format(asset.fund?.netAssets ?? 0),
    inception: asset.fund?.inceptionDate ?? "N/A",
    price: currencyFormatter.format(asset.price ?? 0),
    nav: currencyFormatter.format(asset.fund?.netAssetValuePerShare ?? 0),
    "premium-Discount": "",
    classification: asset.fund?.classification,
    secYield: asset.fund?.yields?.secYield ?? "N/A",
    distributionYield:
      `${asset.fund?.yields?.distributionYield?.toFixed(2)}%` ?? "N/A",
    expenseRatio: `${(asset.fund?.fees?.fundExpenseRatio ?? 0).toFixed(2)}%`,
    managementFee: `${(asset.fund?.fees?.managementFee ?? 0).toFixed(2)}%`,
    maturityLessThanOneYear:
      `${(asset.fund?.allocation?.maturity?.lessThanOneYear ?? 0).toFixed(
        2
      )}%` ?? "N/A",
    maturityOneToThreeYears:
      `${(asset.fund?.allocation?.maturity?.oneToThreeYears ?? 0).toFixed(
        2
      )}%` ?? "N/A",
    maturityThreeToFiveYears:
      `${(asset.fund?.allocation?.maturity?.threeToFiveYears ?? 0).toFixed(
        2
      )}%` ?? "N/A",
    maturityFiveToTenYears:
      `${(asset.fund?.allocation?.maturity?.fiveToTenYears ?? 0).toFixed(
        2
      )}%` ?? "N/A",
    maturityTenToTwentyYears:
      `${(asset.fund?.allocation?.maturity?.tenToTwentyYears ?? 0).toFixed(
        2
      )}%` ?? "N/A",
    maturityTwentyToThirtyYears:
      `${(asset.fund?.allocation?.maturity?.twentyToThirtyYears ?? 0).toFixed(
        2
      )}%` ?? "N/A",
    maturityGreaterThanThirtyYears:
      `${(
        asset.fund?.allocation?.maturity?.greaterThanThirtyYears ?? 0
      ).toFixed(2)}%` ?? "N/A",
    ratingsAAA: `${asset.fund?.allocation?.rating?.aaa?.toFixed(2) ?? "N/A"}%`,
    ratingsAA: `${asset.fund?.allocation?.rating?.aa?.toFixed(2) ?? "N/A"}%`,
    ratingsA: `${asset.fund?.allocation?.rating?.a?.toFixed(2) ?? "N/A"}%`,
    ratingsBBB: `${asset.fund?.allocation?.rating?.bbb?.toFixed(2) ?? "N/A"}%`,
    ratingsBB: `${asset.fund?.allocation?.rating?.bb?.toFixed(2) ?? "N/A"}%`,
    ratingsB: `${asset.fund?.allocation?.rating?.b?.toFixed(2) ?? "N/A"}%`,
    ratingsCCC: `${asset.fund?.allocation?.rating?.ccc?.toFixed(2) ?? "N/A"}%`,
    ratingsCC: `${asset.fund?.allocation?.rating?.cc?.toFixed(2) ?? "N/A"}%`,
    ratingsC: `${asset.fund?.allocation?.rating?.c?.toFixed(2) ?? "N/A"}%`,
    ratingsD: `${(asset.fund?.allocation?.rating?.d ?? 0).toFixed(2) ?? "N/A"}%`
  };

  let bond = {
    type: asset.assetSubtype ?? "N/A",
    currentCoupon: `${(asset.bond?.currentCoupon ?? 0).toFixed(2)}%`,
    couponClass: asset.bond?.couponClass ?? "N/A",
    couponPaymentFrequency: asset.bond?.couponSchedule
      ? asset.bond?.couponSchedule[0]?.paymentFrequency
      : "N/A",
    couponFormula: "n/a",
    corporateIssuer:
      asset.bond?.issuer?.legalName ?? asset.bond?.issuer?.shortName,
    corporateSubsector: asset.bond?.issuer?.subsector ?? "N/A",
    issueDate: asset.bond?.issueDate ?? "N/A",
    maturityDate: asset.bond?.maturityDate ?? "N/A",
    callable: String(asset.bond?.callable) ?? "N/A",
    ...(asset.bond?.callable && {
      callOptionType: asset.bond?.callType ?? "N/A",
      nearestCallPeriodStartDate:
        asset.bond?.nearestCallPeriodStartDate ?? "N/A",
      nearestCallPeriodEndDate: asset.bond?.nearestCallPeriodEndDate ?? "N/A",
      nearestCallPrice: currencyFormatter.format(
        asset.bond?.nearestCallPrice ?? 0
      )
    }),
    privatePlacement: String(asset.bond?.privatePlacement) ?? "N/A",
    amountOutstanding: currencyFormatter.format(
      asset.bond?.amountOutstanding ?? 0
    ),
    cusip: asset.identifiers?.cusip ?? "N/A",
    isin: asset.identifiers?.isin ?? "N/A",
    rating: asset.rating ?? "N/A",
    price: currencyFormatter.format(asset.price ?? 0),
    accruedInterest: currencyFormatter.format(asset.bond?.accruedInterest ?? 0),
    yield: `${((asset.analytics as { yield?: number })?.yield ?? 0).toFixed(
      2
    )}%`,
    yieldToWorst: `${(
      (asset.analytics as { yieldToWorst?: number })?.yieldToWorst ?? 0
    ).toFixed(2)}%`,
    duration: (asset.analytics?.duration ?? 0).toFixed(2),
    convexity: (asset.analytics?.convexity ?? 0).toFixed(2),
    optionAdjustedSpread: (asset.analytics?.optionAdjustedSpread ?? 0).toFixed(
      2
    )
  };

  const muniDetails = {
    muniState: asset.bond?.state ?? "N/A",
    muniDebtServiceType: asset.bond?.debtServiceType ?? "N/A",
    muniUseOfProceeds: asset.bond?.useOfProceeds ?? "N/A"
  };

  if (asset.assetSubtype !== AssetAssetSubtypeEnum.Corporate) {
    bond = {
      ...bond,
      ...muniDetails
    };
  }

  return (
    <ModalBase show onHide={onHide} nopadding>
      <StyledAssetDetails>
        <Row>
          <Col>
            <h2>
              <small>
                Ticker: <b>{ticker}</b>
              </small>
              {name}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Description>{description}</Description>
          </Col>
        </Row>
        <Row>
          <Col>
            {Object.entries(isBond ? bond : fund).map(([key, value]) => {
              return (
                <AssetDetailsItem key={key}>
                  <AssetDetailsLabel>
                    <b>{startCase(key)}</b>
                  </AssetDetailsLabel>
                  <AssetDetailsValue>
                    <p>{value}</p>
                  </AssetDetailsValue>
                </AssetDetailsItem>
              );
            })}
          </Col>
        </Row>
      </StyledAssetDetails>
    </ModalBase>
  );
}
