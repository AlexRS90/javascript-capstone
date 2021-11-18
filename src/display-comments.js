const commentSection = document.createElement('div');
commentSection.id = 'comment-input';
const commentContainer = document.createElement('div');
const commentsHeading = document.createElement('h4');
let singleComment = document.createElement('div');
let commentHeader = document.createElement('p');
let commenter = document.createElement('h4');
commentContainer.classList = 'comment-container';

const listComments = (data) => {
  commentContainer.innerHTML = '';

  let comments;

  comments = data;
  commentsHeading.innerHTML = `${comments.length !== undefined ? comments.length : '0'} Comment(s)`;

  if (comments.error !== undefined) {
    comments = [];
    const noComment = document.createElement('p');
    noComment.innerHTML = 'No Comments Yet';
    commentContainer.appendChild(noComment);
  }

  commentContainer.appendChild(commentsHeading);

  comments.forEach((comment) => {
    singleComment = document.createElement('div');
    singleComment.classList = 'single-comment';
    commentHeader = document.createElement('p');
    commenter = document.createElement('h4');

    commentHeader.innerHTML = `"${comment.comment}"`;
    commenter.innerHTML = `~ ${comment.username}`;

    singleComment.appendChild(commentHeader);
    singleComment.appendChild(commenter);
    commentContainer.appendChild(singleComment);
  });
};

const displayComments = async (characterId) => {
  try {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bJg0BJIh3l3Fd7AaCJp1/comments?item_id=${characterId}`;
    const comments = await fetch(url);
    const result = await comments.json();
    return result;
  } catch (e) {
    return e;
  }
};

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

  const getUpdatedComments = await displayComments(characterId);
  await listComments(getUpdatedComments);
  return postComment;
};

const comments = async (characterData) => {
  const content = document.querySelector('.content-rsvtn');
  commentSection.innerHTML = '';

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
  submitComment.addEventListener('click', () => {
    postComment(characterData.id, usernameInput.value, commentInput.value);
    usernameInput.value = '';
    commentInput.value = '';
  });

  const comments = await displayComments(characterData.id);

  listComments(comments);

  commentSection.appendChild(commentSecHeading);
  commentSection.appendChild(usernameInput);
  commentSection.appendChild(commentInput);
  commentSection.appendChild(submitComment);
  commentSection.appendChild(commentContainer);
  content.appendChild(commentSection);
};

export { comments, displayComments };
