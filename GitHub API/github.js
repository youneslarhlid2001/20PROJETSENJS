const APICALL = `https://api.github.com/users/`;
const affichage = document.querySelector('.affichage');
const form = document.querySelector('.form-github-recherche');
const inpRecherche = document.querySelector('.inp-recherche');

async function dataGitHub(utilisataur) {
    const reponse = await fetch(`${APICALL}${utilisataur}`);
    const data = await reponse.json();

    console.log(data);
    creationCarte(data);
}

dataGitHub("youneslarhlid2001");

function creationCarte(user) {
    const carteHTML = `
    <div class="carte">
        <img src = "${user.avatar_url}" alt = "icone avatar" class = "avatar">
        <h2>${user.name}</h2>
        <ul class="cont-infos">
            <li class="followers"> User ID : ${user.id}</li>
            <li class="followers"> Followers : ${user.followers}</li>
            <li class="etoiles"> Public repos : ${user.public_repos}</li>
            <li class="bio"> Bio : ${user.bio}</li>
            <li class="bio"> Date of creation : ${user.created_at}</li>
            <li class="bio"> Profile Url : <a class = "link-infos" href="${user.html_url}">${user.html_url}</a></li>
        </ul>
    </div>
    `;
    // affichage.innerHTML = carteHTML;
    if (user.id === undefined) {
        alert("Utilisateur introuvable");
    }
    else {
        affichage.innerHTML = carteHTML;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inpRecherche.value.length > 0) {
        dataGitHub(inpRecherche.value);
        inpRecherche.value = "";
    }
})