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
  const arr = await addLike.json();
  console.log(arr);
};

export { giveLike };