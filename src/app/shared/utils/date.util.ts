export function formatDate(value: Date): string {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(value);
}
