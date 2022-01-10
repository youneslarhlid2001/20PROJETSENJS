const emailConnecion = document.querySelector('.email-connection');
const mdpInscription = document.querySelector('.mdp-connection');
const formConnection = document.querySelector('.form-connection');


formConnection.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValeur = emailConnection.value;
    const mdpConnectionValeur = mdpConnection.value;

    auth.signInWithEmailAndPassword(mailValeur, mdpConnectionValeur).then(cred => {
        console.log("CONNEXION !", cred.user);
        formConnection.reset();
        formConnection.classList.toggle('apparition');
    })
    window.open('https://github.com/youneslarhlid2001/20PROJETSENJS/tree/master/Authentification')
}) 