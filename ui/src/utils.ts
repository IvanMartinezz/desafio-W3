export function truncateString(string: string): string {
  const number: number = parseFloat(string);
  if (isNaN(number)) throw new Error("Invalid number format");

  const truncatedNumber: number = Math.trunc(number * 1000) / 1000;
  return truncatedNumber.toString();
}

export function formatString(string: string): string {
  const number: number = parseFloat(string.replace(/,/g, ""));
  if (isNaN(number)) throw new Error("Invalid number format");
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
