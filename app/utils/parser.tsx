export function toNormalSpacing(params: string) {
  return params.replace(/-/g, " ");
}

export function toKebabCase(params: string) {
  return decodeURIComponent(params).toLowerCase().replace(/\s/g, "-");
}
