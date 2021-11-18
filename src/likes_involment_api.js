import { displayLike } from './index.js';//eslint-disable-line

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bJg0BJIh3l3Fd7AaCJp1/likes';

const getLike = async () => {
    const checkLikes = await fetch(url);
    const allLikes = await checkLikes.json();
    displayLike(allLikes);
};

const giveLike = async (newLike) => {
  await fetch(url, {
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

export { giveLike, getLike };