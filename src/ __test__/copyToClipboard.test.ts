import { copyToClipboard } from '../index';

test('Copy to ClipBoard', () => {
  expect(copyToClipboard('Text')).toBe(true);
});