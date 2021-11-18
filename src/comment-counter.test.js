import { displayComments } from "./display-comments";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{creation_date: '2021-11-17', username: 'Jim ', comment: "This is a mocked comment for A-Bomb"}]),
  })
)

describe("Comment Test", () => {
  test("comment function", async () => {
    const result = await displayComments(1017100);
    expect(result[0].comment).toBe("This is a mocked comment for A-Bomb")
  });
});
