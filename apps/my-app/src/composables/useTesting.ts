export default function () {
  return useState<number>('useTestingKey', () => 0);
}
