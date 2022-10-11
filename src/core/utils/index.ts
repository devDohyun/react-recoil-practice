export function getDateString(timestamp: number) {
  return new Date(timestamp).toLocaleDateString('ko')
}
