export function estimateFee(gasPrice, gasLimit) {
  const fee = gasPrice * gasLimit;
  return fee.toFixed(0);
}
