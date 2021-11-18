describe('Counting all showing cards', () => {
  test('Count cards', () => {
    const heroArray = [{
      comics: 2,
      events: 5,
      id: 84738,
    }, {
      comics: 2,
      events: 5,
      id: 84738,
    }, {
      comics: 2,
      events: 5,
      id: 84738,
    }];
    const counter = heroArray.length;
    expect(counter).toBe(3);
  });
});