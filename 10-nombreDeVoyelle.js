/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
  // Exercice non implémenté : doit compter les voyelles
  // Placeholder neutre : retourne 0 pour indiquer non-implémentation
  const voyelles = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y', 'é', 'à', 'è'];

  let compteur = 0;

 for (let i = 0; i < phrase.length; i++) {

  if (voyelles.includes(phrase[i])) {
    compteur++;
  }
 }
 return compteur;
}

console.log(nombreDeVoyelles("hello"))
// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles }
