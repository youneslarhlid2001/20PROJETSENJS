const btnInscription = document.querySelector('.btn-inscription');
const btnConnection = document.querySelector('.btn-connection');
var objBody = document.body;
const deco = document.querySelector('.btn-deco');

const formInscription = document.querySelector('.form-inscription');
const emailInscription = document.querySelector('.email-inscription');
const mdpInscription = document.querySelector('.mdp-inscription');

const formConnection = document.querySelector('.form-connection');


deco.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('Déconnecté');
    })
})

const h1 = document.querySelector('h1');
const info = document.querySelector('.info');

auth.onAuthStateChanged(utilisateur => {
    if (utilisateur) {
        info.innerText = "Voici le contenu privé !"
        h1.innerText = "Vous voilà de retour !"
    }
    else {
        console.log("Utilisateur s'est déconnecté");
        info.innerText = "Contenu public.";
        h1.innerText = "Bienvenue, inscrivez-vous ou connectez-vous";
    }
})



