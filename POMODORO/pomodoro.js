const affichageDuTravail = document.querySelector('.affichageT');
const affichageDuRepos = document.querySelector('.affichageR');
const btnDepart = document.querySelector('.b1');
const btnStop = document.querySelector('.b2');
const btnReset = document.querySelector('.b3');
const cycles = document.querySelector('h2');
const couleurTravail_30s = document.querySelector('.travail');
const couleurRepos_30s = document.querySelector('.repos');
var audio = new Audio('son1.mp3');

let checkInterval = false;
let pause = false;
let tempsInitial = 1800;
let tempsRepos =300;
let nbDeCycles = 0;
cycles.innerText = `Le nombre de cycles est : ${nbDeCycles}`;

affichageDuTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${(tempsInitial % 60) < 10 ? `0${tempsInitial % 60}` : `${tempsInitial % 60}`}`;
affichageDuRepos.innerText = `${Math.trunc(tempsRepos / 60)} : ${(tempsRepos % 60) < 10 ? `0${tempsRepos % 60}` : `${tempsRepos % 60}`}`;

btnDepart.addEventListener('click', () => {
    if (checkInterval === false) {
        checkInterval = true;
        tempsInitial--;
        affichageDuTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${(tempsInitial % 60) < 10 ? `0${tempsInitial % 60}` : `${tempsInitial % 60}`}`;

        let timer = setInterval(() => {
            if (pause === false && tempsInitial > 0) {
                couleurRepos_30s.style.background = 'transparent';
                tempsInitial--;
                affichageDuTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${(tempsInitial % 60) < 10 ? `0${tempsInitial % 60}` : `${tempsInitial % 60}`}`;
                if (tempsInitial <= 60) {
                    couleurTravail_30s.style.background = 'red';
                    audio.play();
                }
  
            }
            
            else if (pause === false && tempsInitial === 0 && tempsRepos === 0) {
                audio.pause();
                couleurTravail_30s.style.background = 'transparent';
                couleurRepos_30s.style.background = 'transparent';
                tempsInitial = 1800;
                tempsRepos = 300;
                nbDeCycles++;
                cycles.innerText = `Le nombre de cycles est : ${nbDeCycles}`;
                affichageDuTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${(tempsInitial % 60) < 10 ? `0${tempsInitial % 60}` : `${tempsInitial % 60}`}`;
                affichageDuRepos.innerText = `${Math.trunc(tempsRepos / 60)} : ${(tempsRepos % 60) < 10 ? `0${tempsRepos % 60}` : `${tempsRepos % 60}`}`;

            }
            else if (pause === false && tempsInitial === 0) {
                couleurTravail_30s.style.background = 'transparent';
                tempsRepos--;
                audio.pause();
                affichageDuRepos.innerText = `${Math.trunc(tempsRepos / 60)} : ${(tempsRepos % 60) < 10 ? `0${tempsRepos % 60}` : `${tempsRepos % 60}`}`;
                if(tempsRepos <= 30) {
                    couleurRepos_30s.style.background = 'red';
                    audio.play();

                }
            }
        }, 1000)

        btnReset.addEventListener('click', () => {
            couleurTravail_30s.style.background = 'transparent';
            couleurRepos_30s.style.background = 'transparent';
            audio.pause();
            clearInterval(timer);
            checkInterval = false;
            tempsInitial = 1800;
            tempsRepos = 300;
            affichageDuTravail.innerText = `${Math.trunc(tempsInitial / 60)} : ${(tempsInitial % 60) < 10 ? `0${tempsInitial % 60}` : `${tempsInitial % 60}`}`;
            affichageDuRepos.innerText = `${Math.trunc(tempsRepos / 60)} : ${(tempsRepos % 60) < 10 ? `0${tempsRepos % 60}` : `${tempsRepos % 60}`}`;
            btnStop.innerText = 'Stop';
            pause = false;
        })
    }
    else {
        return;
    }
})


btnStop.addEventListener('click', () => {
    if (pause === false) {
        btnStop.innerText = 'Play';
        audio.pause();
        
    }
    else {
        btnStop.innerText = 'Stop';
    }
    pause = !pause;
})


// cycles.addEventListener('click', () => {
//     audio.pause();
// })