export function renderDate(params: { value: Date }): string {
  const date = params.value;
  if (date == null) {
    return "";
  }
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const monthText = month < 10 ? `0${month}` : month.toString();
  const dayText = day < 10 ? `0${day}` : day.toString();
  return `${year}-${monthText}-${dayText}`;
}
