const popUp = (characterData) => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  const content = document.createElement('div');
  content.classList.add('content-rsvtn');
  const charName = document.createElement('h2');
  charName.innerText = characterData.name;
  const charDesc = document.createElement('p');
  charDesc.innerText = characterData.description
    || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu.';
  const charPicture = document.createElement('img');
  charPicture.src = `${characterData.thumbnail.path}/standard_fantastic.${characterData.thumbnail.extension}`;
  const closeBtn = document.createElement('button');
  closeBtn.innerText = 'X';
  closeBtn.classList.add('close-rsvtn');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });

  content.append(charName, charPicture, charDesc, closeBtn);

  overlay.appendChild(content);
  overlay.addEventListener('click', (e) => {
    if (overlay !== e.target) return;
    document.body.removeChild(overlay);
  });
  document.body.appendChild(overlay);
};

export default popUp;
