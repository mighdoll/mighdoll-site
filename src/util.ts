export function prettyDate(date: Date): string {
  return date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
  });
}
