import { countRsvtns } from './reservations.js';

describe('Reservations Tests', () => {
  test('count multiple reservations', () => {
    const reservations = [1, 2, 3];
    const reservationsMessage = countRsvtns(reservations);
    expect(reservationsMessage).toBe('3 people is being rescued by this Hero in the next days');
  });

  test('count zero reservations', () => {
    const reservations = [];
    const reservationsMessage = countRsvtns(reservations);
    expect(reservationsMessage).toBe('0 people is being rescued by this Hero in the next days');
  });

  test('count aunique reservation', () => {
    const reservations = [1];
    const reservationsMessage = countRsvtns(reservations);
    expect(reservationsMessage).toBe('1 person is being rescued by this Hero in the next days');
  });
});