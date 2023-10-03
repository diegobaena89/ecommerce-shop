export function nameShortener(productName: string, charLimit: number) {
  if (productName.length > charLimit) {
    return productName.slice(0, charLimit) + "...";
  }
  return productName;
}
