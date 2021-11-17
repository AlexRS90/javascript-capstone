import './style.css';
import * as rsvtn from './reservations.js';
import * as likeAPI from './likes_involment_api.js'

import apiCall from './marvel-api-call';//eslint-disable-line
import displayItem from './display-item.js';

let superHeroes = [];

const displaySHCards = (arraySuperH) => {
  superHeroes = arraySuperH;
  let newCard = '';
  superHeroes.forEach((heroes) => {
    newCard += `<div class="card-container d-flex">
    <img src="${heroes.thumbnail.path}/portrait_fantastic.${heroes.thumbnail.extension}" alt="${heroes.name} pincture">
    <div class="d-flex card-info">
        <h3>${heroes.name}</h3>
        <div class="likes-container d-flex">
            <i class="fas fa-heart" id="${heroes.id}"></i>
            <p>10 Likes</p>
        </div>
    </div>
    <input type="button" class="btn-comments main-btn" value="Comments" id="${heroes.id}">
    <input type="button" class="btn-reservation main-btn" value="Reservations" id="${heroes.id}">
    </div>`;
  });
  document.querySelector('.super-heroes-container').innerHTML = newCard;
};
apiCall();

window.onload = setTimeout(() => {
  document.querySelectorAll('.btn-reservation').forEach((el) => {
    el.addEventListener('click', () => {
      rsvtn.create(el.id);
    });
  });

  document.querySelectorAll('.btn-comments').forEach((el) => {
    el.addEventListener('click', () => {
      displayItem(el.id);
    });
  });

  document.querySelectorAll('.fa-heart').forEach((like) => {
    like.addEventListener('click', () => {
      likeAPI.giveLike(like.id);
    });
  });
}, 1000);

export default displaySHCards;
