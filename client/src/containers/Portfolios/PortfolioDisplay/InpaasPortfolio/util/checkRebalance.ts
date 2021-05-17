function checkRebalance(
  targetValue: number,
  currentValue: number,
  rebalanceThreshold: number
) {
  const isNegative = targetValue - currentValue > 0;
  const diff = Math.round(Math.abs(targetValue - currentValue) * 1000) / 1000;
  return {
    isNegative,
    brokenBound: isNegative
      ? targetValue - rebalanceThreshold * targetValue
      : targetValue + rebalanceThreshold * targetValue,
    shouldAlert: diff > rebalanceThreshold * targetValue
  };
}

export default checkRebalance;
