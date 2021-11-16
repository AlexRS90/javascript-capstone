import displaySHCards from './index';//eslint-disable-line

const url = 'https://gateway.marvel.com/v1/public/characters?ts=1&hash=cef440fde913b8756e1db19d5f18cd9e&apikey=580e7d5773a2965034fd7fcd3cad5f53';
const apiCall = async () => {
  console.log("Entre a la funcion");
  const call = await fetch(url);
  const arr = await call.json();
  console.log(arr.data.results);
  displaySHCards(arr.data.results);
};

export default apiCall;