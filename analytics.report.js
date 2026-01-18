export function generateReport(gas, fee, trends) {
  console.log("----- Gas Analytics Report -----");
  console.log("Slow:", gas.slow, "gwei");
  console.log("Standard:", gas.standard, "gwei");
  console.log("Fast:", gas.fast, "gwei");
  console.log("Estimated Tx Fee:", fee);
  console.log("Congestion Level:", trends.congestion);
  console.log("--------------------------------");
}
