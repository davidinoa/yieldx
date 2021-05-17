export default function calculateBpsSaved(
  averageExp: number,
  inpaasExp: number
) {
  return (averageExp - inpaasExp) * 100;
}
