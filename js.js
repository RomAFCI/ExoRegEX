const input = document.querySelector(".input");

const info = document.querySelector(".info");

const regexMin = /[a-z]/;
const regexMaj = /[A-Z]/;
const regexChiffre = /[0-9]/;
const regexSpecial = /[^A-Za-z0-9]/;

function chekMDP(mdp) {
  if (mdp.length < 8) return false;
  if (!mdp.match(regexMin)) return false;
  if (!mdp.match(regexMaj)) return false;
  if (!mdp.match(regexChiffre)) return false;
  if (!mdp.match(regexSpecial)) return false;
  return true;
}

input.addEventListener("input", () => {
    if (chekMDP(input.value)) {
        info.textContent = "Mot de passe sécurisé";
        info.style.color = "green";
    } else {
        info.textContent = "Mot de passe faible";
        info.style.color = "red";
    }
});

// LISTE MDP VALIDE :

// Azerty1!,
// Bonjour2@,
// Test123#,
// P@ssword9,
// HelloWorld3!,
// JsDev2024*,
// ChocoCake7%,
// DragonFire8$,
// WebMaster4&,
// ValidMdp5?


console.log("Connect to JS");
