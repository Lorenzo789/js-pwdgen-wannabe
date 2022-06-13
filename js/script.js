const userName = prompt('inserisci il tuo nome');
document.getElementById('user-name').innerHTML = userName;

const userSurName = prompt('inserisci il tuo cognome');
document.getElementById('user-surname').innerHTML = userSurName;

const userFavoriteColor = prompt('inserisci il tuo colore preferito');
document.getElementById('user-fav-color').innerHTML = userFavoriteColor;

let userInfo = userName + userSurName + userFavoriteColor + 22;
document.getElementById('user-info').innerHTML = userInfo