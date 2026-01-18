export function analyzeTrends(data) {
  const avg = (data.slow + data.standard + data.fast) / 3;

  return {
    average: avg.toFixed(2),
    congestion: avg > 50 ? "High" : "Normal"
  };
}
