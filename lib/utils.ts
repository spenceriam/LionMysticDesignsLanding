export function cn(...inputs: (string | undefined | null | boolean | number)[]) {
  return inputs
    .filter((input) => typeof input === "string" && input.length > 0)
    .join(" ")
    .trim()
}
