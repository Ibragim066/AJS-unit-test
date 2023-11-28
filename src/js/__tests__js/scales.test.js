import getScale from '../scales.js';

test.each([
  [55, 'Маг', 'healthy'],
  [30, 'Эльф', 'wounded'],
  [10, 'Дварф', 'critical'],
])('testing scale func with %i health and %s name', (health, name, expectedLabel) => {
  const result = getScale({ health, name });
  expect(result).toBe(expectedLabel);
});
