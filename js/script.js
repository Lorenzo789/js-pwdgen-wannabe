
// Name //
const userName = prompt('inserisci il tuo nome');
document.getElementById('user-name').innerHTML = userName;

// Surname //
const userSurName = prompt('inserisci il tuo cognome');
document.getElementById('user-surname').innerHTML = userSurName;

// Favorite Color //
const userFavoriteColor = prompt('inserisci il tuo colore preferito');
document.getElementById('user-fav-color').innerHTML = userFavoriteColor;


// Name + Surname + Favorite Color //
let userPassword = userName + userSurName + userFavoriteColor + 22;
document.getElementById('user-password').innerHTML = userPassword