export function Result() {
  const randomValue = Math.random();
  if (randomValue >= 0.50) return "heads";
  else return "tails";
}
