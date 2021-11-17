const postComment = async (characterId, username, comment) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bJg0BJIh3l3Fd7AaCJp1/comments';
  const sendObj = {
    item_id: characterId,
    username,
    comment,
  };
  const postComment = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(sendObj),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });

  return postComment;
};

const displayComments = async (characterId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bJg0BJIh3l3Fd7AaCJp1/comments?item_id=${characterId}`;
  const comments = await fetch(url);
  return comments.status === 400 ? [] : comments.json();
};

const commentCounter = async (characterId) => {
  const data = await displayComments(characterId);
  return data;
};

const comments = async (characterData) => {
  const content = document.querySelector('.content-rsvtn');

  const commentSection = document.createElement('div');
  commentSection.id = 'comment-input';

  const commentSecHeading = document.createElement('h3');
  commentSecHeading.id = 'comment-heading';
  commentSecHeading.innerHTML = `Write your comments/reviews of ${characterData.name}`;

  const usernameInput = document.createElement('input');
  usernameInput.placeholder = 'Your Name';
  const commentInput = document.createElement('textarea');
  commentInput.placeholder = 'Your Comment';

  usernameInput.value = '';
  commentInput.value = '';

  const submitComment = document.createElement('button');
  submitComment.innerHTML = 'Submit Comment';
  submitComment.addEventListener('click', () => postComment(characterData.id, usernameInput.value, commentInput.value));

  const comments = await displayComments(characterData.id);
  const commentNumber = await commentCounter(characterData.id);

  const commentContainer = document.createElement('div');
  const commentsHeading = document.createElement('h4');
  commentsHeading.innerHTML = `${commentNumber.length} Comment(s)`;
  commentContainer.appendChild(commentsHeading);

  if (comments.length === 0) {
    const noComment = document.createElement('p');
    noComment.innerHTML = 'No Comments Yet';
    commentContainer.appendChild(noComment);
  }

  comments.forEach((comment) => {
    const singleComment = document.createElement('div');
    singleComment.classList = 'single-comment';

    const commentHeader = document.createElement('p');
    commentHeader.innerHTML = `"${comment.comment}"`;

    const commenter = document.createElement('h4');
    commenter.innerHTML = `~ ${comment.username}`;

    singleComment.appendChild(commentHeader);
    singleComment.appendChild(commenter);
    commentContainer.appendChild(singleComment);
  });

  commentSection.appendChild(commentSecHeading);
  commentSection.appendChild(usernameInput);
  commentSection.appendChild(commentInput);
  commentSection.appendChild(submitComment);
  commentSection.appendChild(commentContainer);
  content.appendChild(commentSection);
};

export default comments;
