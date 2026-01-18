export function simulateGasFeed() {
  console.log("Simulating gas feed...");

  return {
    slow: Math.floor(Math.random() * 20) + 5,
    standard: Math.floor(Math.random() * 40) + 20,
    fast: Math.floor(Math.random() * 80) + 50
  };
}
