export function convertNumberToPrice(num: number) {
  const formatted = num.toLocaleString("fa-IR", {
    style: "decimal",
    maximumFractionDigits: 0,
  });
  return formatted.replace(/٬/g, ",");
}
