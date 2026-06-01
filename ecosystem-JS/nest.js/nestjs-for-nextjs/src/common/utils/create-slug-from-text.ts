export function createSlugFromText(text: string) {
  const slug = text
    .normalize("NFKD")
    .toLocaleLowerCase()
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, "-");

  const randomSuffix = Math.random().toString(36).substring(2, 8);

  return `${slug}-${randomSuffix}`;
}
