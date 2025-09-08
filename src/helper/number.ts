// Number formatting helpers

/**
 * Format a number with thousands separators and optional zero-padding width.
 * If `totalForWidth` is provided, the formatted string is left-padded with zeros
 * to match the digit length of `totalForWidth` before comma-grouping.
 *
 * Examples:
 *  - formatCount(1234567) => "1,234,567"
 *  - formatCount(23, 10000) => "00,023" (matching width of 10000 => 5 digits)
 *  - formatCount(-89, 1000) => "-0,089"
 */
export function formatCount(value: number, totalForWidth?: number): string {
  if (!Number.isFinite(value)) return String(value);
  const isNegative = value < 0;
  const absValue = Math.abs(Math.trunc(value));

  const minWidth =
    totalForWidth && Number.isFinite(totalForWidth)
      ? String(Math.abs(Math.trunc(totalForWidth as number))).length
      : 0;

  let digits = String(absValue);
  if (minWidth > 0 && digits.length < minWidth) {
    digits = digits.padStart(minWidth, "0");
  }

  // Insert commas every 3 digits from the right
  const withCommas = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return isNegative ? `-${withCommas}` : withCommas;
}

/**
 * Format a number with thousands separators (no zero-padding).
 */
export function formatWithCommas(value: number): string {
  if (!Number.isFinite(value)) return String(value);
  const isNegative = value < 0;
  const absValue = Math.abs(Math.trunc(value));
  const withCommas = String(absValue).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return isNegative ? `-${withCommas}` : withCommas;
}
