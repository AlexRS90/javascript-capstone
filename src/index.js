import './style.css';
import apiCall from './marvel-api-call';//eslint-disable-line

let superHeroes = [];

const displaySHCards = (arraySuperH) => {
  superHeroes = arraySuperH;
  let newCard = '';
  superHeroes.forEach((heroes) => {
    newCard += `<div class="card-container d-flex">
    <img src="${heroes.thumbnail.path}/portrait_fantastic.${heroes.thumbnail.extension}" alt="${heroes.name} pincture">
    <div class="d-flex card-info">
        <h3>${heroes.name}</h3>
        <div>
            <a href="#"><img src="" alt="Like super hero"></a>
            <p>10 Likes</p>
        </div>
    </div>
    <input type="button" class="btn-comments main-btn" value="Comments">
    <input type="button" class="btn-reservation main-btn"value="Reservations">
    </div>`;
  });
  document.querySelector('.super-heroes-container').innerHTML = newCard;
};

apiCall();

export default displaySHCards;