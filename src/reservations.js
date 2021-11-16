export async function create(id) {
  const character = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&hash=cef440fde913b8756e1db19d5f18cd9e&apikey=580e7d5773a2965034fd7fcd3cad5f53`).then((response) => response.json());
  const charData = character.data.results[0];
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  const content = document.createElement('div');
  content.classList.add('content-rsvtn');
  const charName = document.createElement('h2');
  charName.innerText = charData.name;
  const charDesc = document.createElement('p');
  charDesc.innerText = charData.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu.' ;
  const charPicture = document.createElement('img');
  charPicture.src = `${charData.thumbnail.path}/standard_fantastic.${charData.thumbnail.extension}`;
  const closeBtn = document.createElement('button');
  closeBtn.innerText = 'X';
  closeBtn.classList.add('close-rsvtn');
  closeBtn.addEventListener('click', ()=> {
    
    document.body.removeChild(overlay);
  })
  content.append(charName, charPicture, charDesc, closeBtn);
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
