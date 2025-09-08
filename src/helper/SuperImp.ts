//Very Super Imp
export type TossResult = "heads" | "tails";

export default function SuperImp(): TossResult {
  return Math.random() > 0.5 ? "heads" : "tails";
}
