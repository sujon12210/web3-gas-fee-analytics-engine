import { connectRPC } from "./rpc.client.js";
import { simulateGasFeed } from "./gas.feed.js";
import { estimateFee } from "./fee.estimator.js";
import { analyzeTrends } from "./trend.analyzer.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Gas Fee Analytics Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const gasData = simulateGasFeed();

const estimatedFee = estimateFee(gasData.fast, 21000);
const trends = analyzeTrends(gasData);

generateReport(gasData, estimatedFee, trends);
