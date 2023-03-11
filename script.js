const form = document.querySelector('form');
const resultatDiv = document.getElementById('resultat');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const age = parseInt(document.getElementById('age').value);
  const sexe = document.getElementById('sexe').value;

  let impot;

  if (sexe === 'homme' && age > 20) {
    impot = 'Vous etes imposable.';
  } else if (sexe === 'femme' && age >= 18 && age <= 35) {
    impot = 'Vous etes imposable.';
  } else {
    impot = 'Vous n etes pas imposables';
  }

  resultatDiv.innerHTML = impot;
});