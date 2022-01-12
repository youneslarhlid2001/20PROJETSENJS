const container = document.querySelector('.grille');
const affichage = document.querySelector('h3');
let resultats = 0;
let toutesLesDivs;
let alienInvaders = [];
let tireurPosition = 563;
let direction = 1;
let width = 20;


function creationGrilleEtAliens() {
    let indexAttr = 0;
    for (i = 0; i < 576; i++){
        if (indexAttr === 0) {
            const bloc = document.createElement('div');
            bloc.setAttribute('data-left', 'true');
            container.appendChild(bloc);
            indexAttr++;
        }
        else if (indexAttr === 23) {
            const bloc = document.createElement('div');
            bloc.setAttribute('data-right', 'true');
            container.appendChild(bloc);
            indexAttr = 0;
        }
        else {
            const bloc = document.createElement('div');
            container.appendChild(bloc);
            indexAttr++;
        }
    }
    for (i = 1; i < 66; i++){
        if (i === 18) {
            i = 25;
            alienInvaders.push(i);
        }
        else if (i === 42) {
            i = 49;
            alienInvaders.push(i);
        }
        else {
            alienInvaders.push(i);
        }
    }
    console.log(alienInvaders);

    toutesLesDivs = document.querySelectorAll('.grille div');
    alienInvaders.forEach(invader => {
        toutesLesDivs[invader].classList.add('alien');
    })

    toutesLesDivs[tireurPosition].classList.add('tireur');

}

creationGrilleEtAliens();


function deplacerLeTireur(e) {
    toutesLesDivs[tireurPosition].classList.remove('tireur');

    if (e.keyCode === 37) {
        if (tireurPosition > 1) {
            tireurPosition -= 1;
        }
    }
    // else if (e.keyCode === 38) {
    //     tireurPosition -= 24;
    // }
    else if (e.keyCode === 39) {
        if (tireurPosition < 575) {
            tireurPosition += 1;
        }
    }
    // else if (e.keyCode === 40) {
    //     tireurPosition += 24;
    // }
    toutesLesDivs[tireurPosition].classList.add('tireur');
}

document.addEventListener('keydown', deplacerLeTireur);


let descendreRight = true;
let descendreLeft = true;

function bougerLesAliens() {
    for (let i = 0; i < alienInvaders.length; i++){
        if (toutesLesDivs[alienInvaders[i]].getAttribute('data-right') === 'true') {
            if (descendreRight) {
                direction = 24;
                setTimeout(() => {
                    descendreRight = false;
                }, 50);
            }
            else if (descendreRight === false) {
                direction = -1;
            }
            descendreLeft = true;
        }
        else if (toutesLesDivs[alienInvaders[i]].getAttribute('data-left') === 'true') {
            if (descendreLeft) {
                direction = 24;
                setTimeout(() => {
                    descendreLeft = false;
                }, 50);
            }
            else if (descendreLeft === false) {
                direction = 1;
            }
            descendreRight = true;
        }
    }



    for(let i = 0; i < alienInvaders.length; i++){
        toutesLesDivs[alienInvaders[i]].classList.remove('alien');
    }
    for(let i = 0; i < alienInvaders.length; i++){
        alienInvaders[i] += direction;
    }
    for(let i = 0; i < alienInvaders.length; i++){
        toutesLesDivs[alienInvaders[i]].classList.add('alien');
    }
}

invaderId = setInterval(bougerLesAliens, 500);