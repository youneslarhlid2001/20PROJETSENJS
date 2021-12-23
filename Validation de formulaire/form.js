const inputUtilisateur = document.querySelector('.form-groupe:nth-child(1) input');
const inputEmail = document.querySelector('.form-groupe:nth-child(2) input');
const inputMdp = document.querySelector('.form-groupe:nth-child(3) input');
const inputConfMdp = document.querySelector('.form-groupe:nth-child(4) input');
const allImages = document.querySelectorAll('.icone-verif');
const allSpan = document.querySelectorAll('span');
const allLignes = document.querySelectorAll('.ligne div');



inputUtilisateur.addEventListener('input', (e) => {
    if (e.target.value.length >=3) {
        allImages[0].style.display = "inline";
        allImages[0].src = "ressources/check.svg";
        allSpan[0].style.display = "none";
    }
    else {
        allImages[0].style.display = "inline";
        allImages[0].src = "ressources/error.svg";
        allSpan[0].style.display = "inline";
    }
})


inputEmail.addEventListener('input', (e) => {
    const regexEmail = /\S+@\S+\.\S+/;

    if (e.target.value.search(regexEmail) === 0) {
        allImages[1].style.display = "inline";
        allImages[1].src = "ressources/check.svg";
        allSpan[1].style.display = "none";
    }
    else if (e.target.value.search(regexEmail) === -1) {
        allImages[1].style.display = "inline";
        allImages[1].src = "ressources/error.svg";
        allSpan[1].style.display = "inline";
    }
})





let valeurInput;
const specialCar = /[^a-zA-z0-9]/;
const alphabet = /[a-z]/i;
const chiffres = /[0-9]/;

let objValidation = {
    symbol : 0,
    alphabet : 0,
    chiffres : 0
}

inputMdp.addEventListener('input', (e) => {
    valeurInput = e.target.value;

    if (valeurInput.search(specialCar) !== -1) {
        objValidation.symbol=1;
    }
    if (valeurInput.search(alphabet) !== -1) {
        objValidation.alphabet=1;
    }
    if (valeurInput.search(chiffres) !== -1) {
        objValidation.chiffres=1;
    }
    console.log(objValidation);

    if (e.inputType = 'deleteContentBackward') {
        if (valeurInput.search(specialCar) === -1) {
            objValidation.symbol=0;
        }
        if (valeurInput.search(alphabet) === -1) {
            objValidation.alphabet=0;
        }
        if (valeurInput.search(chiffres) === -1) {
            objValidation.chiffres=0;
        } 
    }
    console.log(objValidation);


    let testAll = 0;
    for (const property in objValidation) {
        if (objValidation[property] > 0) {
            testAll++;
        }
    }
    if (testAll<3) {
        allSpan[2].style.display = 'inline';
        allImages[2].style.display = 'inline';
        allImages[2].src = "ressources/error.svg";
    }
    else {
        allSpan[2].style.display = 'none';
        allImages[2].src = "ressources/check.svg"
    }

    if (valeurInput.length > 0 && valeurInput.length <= 6) {
        allLignes[0].style.display = 'block';
        allLignes[1].style.display = 'none';
        allLignes[2].style.display = 'none';
    }
    else if (valeurInput.length > 6 && valeurInput.length <= 9) {
        allLignes[0].style.display = 'block';
        allLignes[1].style.display = 'block';
        allLignes[2].style.display = 'none';
    }
    else if (valeurInput.length > 9) {
        allLignes[0].style.display = 'block';
        allLignes[1].style.display = 'block';
        allLignes[2].style.display = 'block';
    }
    else {
        allLignes[0].style.display = 'none';
        allLignes[1].style.display = 'none';
        allLignes[2].style.display = 'none';
    }

})



inputConfMdp.addEventListener('input', (e) => {
    if (e.target.value.length === 0) {
        allImages[3].style.display = 'inline';
        allImages[3].src = "ressources/error.svg";
    }
    else if (e.target.value === valeurInput) {
        allImages[3].style.display = 'inline';
        allImages[3].src = "ressources/check.svg";
    }
    else {
        allImages[3].style.display = 'inline';
        allImages[3].src = "ressources/error.svg";
    }
})



