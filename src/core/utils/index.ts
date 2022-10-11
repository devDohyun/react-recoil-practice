export function getDateString(timestamp: number) {
  return new Date(timestamp).toLocaleDateString('ko')
}

export function formatNumber(number: number) {
  return number.toLocaleString('ko')
}
