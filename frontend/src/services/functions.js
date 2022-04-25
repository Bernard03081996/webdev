export function toCapitalize(str) {
  const lower = str.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export function isInteger(num) {
  return Number.isInteger(num);
}
