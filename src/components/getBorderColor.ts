export function getBorderColor(
  error?: string,
  isFocused?: boolean,
  value?: string | number
) {
  if (error) return 'border-red-30';
  else if (isFocused && !value) return 'border-primary-40';
  else if (isFocused && value) return 'border-primary-50';
  else return 'border-gray-20';
}
