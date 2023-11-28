import sortCharacters from '../characters.js';

test.each([
  [{
    inputMassive: [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
  },
  {
    outputMassive: [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  }],
])('testing sortCharacters func ', ({ inputMassive, outputMassive }) => {
  const result = sortCharacters(inputMassive);
  expect(result).toEqual(outputMassive);
});
