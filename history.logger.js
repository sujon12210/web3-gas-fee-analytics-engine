export const HISTORY = [];

export function logGasData(data) {
  HISTORY.push({ time: Date.now(), data });
}
