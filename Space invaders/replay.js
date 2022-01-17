function replay() {
    resultats = 0;
    toutesLesDivs;
    alienInvaders = [];
    tireurPosition = 563;
    direction = 1;
    width = 24;
    // descendreRight = true;
    // descendreLeft = true;
    clearInterval(invaderId);
    play();
}
affichage.addEventListener('click', replay);

window.reload();
