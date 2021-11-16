export async function create() {
  const character = await fetch('https://gateway.marvel.com/v1/public/characters/1017100?ts=1&hash=cef440fde913b8756e1db19d5f18cd9e&apikey=580e7d5773a2965034fd7fcd3cad5f53').then((response) => response.json());
  const charData = character.data.results[0];
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  const content = document.createElement('div');
  content.classList.add('content');
  const charName = document.createElement('h2');
  charName.innerText = charData.name;
  const charDesc = document.createElement('p');
  charDesc.innerText = charData.description;
  const charPicture = document.createElement('img');
  charPicture.src = `${charData.thumbnail.path}/standard_fantastic.${charData.thumbnail.extension}`;
  content.append(charName, charDesc, charPicture);
  overlay.appendChild(content);
  overlay.addEventListener('click', (e) => {
    if (overlay !== e.target) return;
    document.body.removeChild(overlay);
  });
  document.body.appendChild(overlay);
}

export function getReservation() {
  console.log('getting reservation');
}
