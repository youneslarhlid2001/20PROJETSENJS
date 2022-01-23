const APICALL = `http://api.quotable.io/random`;

const tempsAffichage = document.querySelector('.temps');
const scoreAffichage = document.querySelector('.score');

const phraseAEcrire = document.querySelector('.phraseAEcrire');
const phraseTest = document.querySelector('.phrase-test');

let temps = 60;
let score = 0;
let phrasePourScore;

tempsAffichage.innerText = `Temps : ${temps}`;
scoreAffichage.innerText = `Score : ${score}`;

let timer = setInterval(time, 1000);
function askToReplay() {
    let text = `Votre score est de ${score} points. Voulez-vous rejouer ?`;
    if (confirm(text) == true) {
        window.location.reload();
    }
}

function time() {
    temps--;
    tempsAffichage.innerText = `Temps : ${temps}`;
    scoreAffichage.innerText = `Score : ${score}`;
    if (temps === 0) {
        clearInterval(timer);
        phraseTest.disabled = true;
        askToReplay();
        
    }
    
}

// Prendre une phrase de l'API
async function afficherNvPhrase() {
    const appel = await fetch(APICALL);
    const resultats = await appel.json();
    const phrase = resultats.content;
    // console.log(phrase);
    phrasePourScore = phrase.length;
    // console.log(phrasePourScore);
    phraseAEcrire.innerHTML = '';

    phrase.split('').forEach(carac => {
        const caracSpan = document.createElement('span');
        caracSpan.innerText = carac;
        phraseAEcrire.appendChild(caracSpan);
    })
    phraseTest.value = null;
}

afficherNvPhrase();


phraseTest.addEventListener('input', () => {
    const tableauPhrase = phraseAEcrire.querySelectorAll('span');
    const tableauTest = phraseTest.value.split('');
    let correct = true;

    tableauPhrase.forEach((caracSpan, index) => {
        console.log(caracSpan);
        const caractere = tableauTest[index];

        if (caractere == undefined) {
            caracSpan.classList.remove('correct');
            caracSpan.classList.remove('incorrect');
            correct = false;
        }
        else if (caractere === caracSpan.innerText) {
            caracSpan.classList.add('correct');
            caracSpan.classList.remove('incorrect');
        }
        else {
            caracSpan.classList.remove('correct');
            caracSpan.classList.add('incorrect');
            correct = false;
        }
    })
    if (correct) {
        afficherNvPhrase();
        score++;
    }
})