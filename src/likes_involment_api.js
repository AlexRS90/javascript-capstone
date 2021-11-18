import { displayLike } from "./index.js";

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bJg0BJIh3l3Fd7AaCJp1/likes';

const giveLike = async (newLike) => {
  const addLike = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: newLike,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
  });
  getLike();
};

const getLike = async () => {
  const checkLikes = await fetch(url);
  const allLikes = await checkLikes.json();
  displayLike(allLikes);
};

export { giveLike, getLike };