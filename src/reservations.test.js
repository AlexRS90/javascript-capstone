import { countRsvtns } from './reservations.js';

test('count total of reservations', () => {
  expect(countRsvtns('000')).toBe('3 people is being rescued by this Hero in the next days');
});

test('count total of reservations', () => {
  expect(countRsvtns('')).toBe('0 people is being rescued by this Hero in the next days');
});

test('count total of reservations', () => {
  expect(countRsvtns('a')).toBe('1 person is being rescued by this Hero in the next days');
});