import popUp from './pop-up.js';

const appID = 'bJg0BJIh3l3Fd7AaCJp1';

export const countRsvtns = (rsvtns) => `${rsvtns.length} ${rsvtns.length === 1 ? 'person' : 'people'} is being rescued by this Hero in the next days`;

export const fillRsrvtns = async (id) => {
  let rsvtns = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/reservations?item_id=${id}`).then((response) => response.json()).catch(() => []);
  if (rsvtns.error) {
    rsvtns = [];
  }
  const futureRsvtns = document.querySelector('.rsvtns-list');
  futureRsvtns.innerHTML = '';
  const rsvtnsCount = document.createElement('h2');
  rsvtnsCount.innerText = countRsvtns(rsvtns);
  futureRsvtns.appendChild(rsvtnsCount);
  rsvtns.forEach((reservation) => {
    const card = document.createElement('li');
    card.innerHTML = `<p>${reservation.username}</p>
    <p>From: ${reservation.date_start}</p>
    <p>To: ${reservation.date_end}</p>`;
    futureRsvtns.appendChild(card);
  });
};

export const create = async (id) => {
  const character = await fetch(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&hash=cef440fde913b8756e1db19d5f18cd9e&apikey=580e7d5773a2965034fd7fcd3cad5f53`).then((response) => response.json());
  const charData = character.data.results[0];
  popUp(charData);
  const content = document.querySelector('.content-rsvtn');
  const futureRsvtns = document.createElement('ul');
  futureRsvtns.classList.add('rsvtns-list');
  content.appendChild(futureRsvtns);
  fillRsrvtns(id);
  const rsvtnForm = document.createElement('form');
  rsvtnForm.innerHTML = `<h2>Get rescued by this hero, Reserve Now!</h2>
                          <label for="rsvtn-name" class="rsvtn-label label-name">
                            <input class="rsvtn-input" type="text" placeholder="Your name" required id="rsvtn-name">
                          </label>
                          <label for="dateStart" class="rsvtn-label">
                            <input class="rsvtn-input" type="date" min="2021-11-17" required id="dateStart">
                          </label>
                          <label for="dateEnd" class="rsvtn-label">
                            <input class="rsvtn-input" type="date" min="2021-11-17" required id="dateEnd">
                          </label>
                          <button type="submit">Rescue Me!</button>`;
  rsvtnForm.classList.add('rsvtn-form');
  rsvtnForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/reservations`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: document.querySelector('#rsvtn-name').value,
        date_start: document.querySelector('#dateStart').value,
        date_end: document.querySelector('#dateEnd').value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => {
      document.querySelector('#rsvtn-name').value = '';
      document.querySelector('#dateStart').value = '';
      document.querySelector('#dateEnd').value = '';
      fillRsrvtns(id);
    });
  });
  content.appendChild(rsvtnForm);
};
