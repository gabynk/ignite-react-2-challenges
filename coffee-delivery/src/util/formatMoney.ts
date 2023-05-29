export function formatMoney(value: number) {
  if (!value || value === 0) {
    return '0,00';
  }

  const [real, cents] = (value).toString().split('.');

  let cent = cents;
  if (cents && cents.length > 2) {
    cent = cents.slice(0, 2);
  }

  return `${real},${cent.padEnd(2, '0')}`;
}