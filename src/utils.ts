export function getImageUrl(path: string) {
  const url = new URL('/src/assets', location.origin)
  return `${url}${path}`
}
