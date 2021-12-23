const affichage = document.querySelector('.affichage');
const btns = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input');
const infoTxt = document.querySelector('.info-txt');
let alreadyDone = false;

const today = new Date();
const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
// console.log(nextWeek);

let day = ('0' + nextWeek).slice(9, 11);
let month = ('0' + (today.getMonth() + 1)).slice(-2);
let year = today.getFullYear();
document.querySelector('input[type=date]').value = `${year}-${month}-${day}`;


btns.forEach(btn => {
    btn.addEventListener('click', btnAction)
});


function btnAction(e) {
    let newObj = {};
    inputs.forEach(input => {
        let attrName = input.getAttribute('name');
        let attrValeur = attrName !== "cookieExpire" ? input.value : input.valueAsDate;
        newObj[attrName] = attrValeur;
    })
    // console.log(newObj);

    let description = e.target.getAttribute('data-cookie');
    if (description === "creer") {
        creerCookie(newObj.cookieName, newObj.cookieValue,newObj.cookieExpire);
    }
    else if (description === "toutAfficher") {
        listeCookies();
    }
}


function creerCookie(name, value, expire) {

    infoTxt.innerText = null;
    affichage.childNodes.forEach(child => {
        child.remove();
    });
    affichage.innerHTML = "";

    let cookies = document.cookie.split(";");
    cookies.forEach(cookie => {
        cookie = cookie.trim();
        // console.log(cookie);
        let formatCookie = cookie.split("=");
        // console.log(formatCookie);
        if (formatCookie[0] === encodeURIComponent(name)) {
            alreadyDone = true;
        }
    })


        if (alreadyDone) {
            infoTxt.innerText = `Un cookie possède déjà ce nom !`;
            alreadyDone = false;
            return;
        }


    if (name.length === 0) {
        infoTxt.innerText = `Impossible de créer un cookie sans nom`;
        return;
    }


    document.cookie = `${encodeURIComponent(name)} = ${encodeURIComponent(value)};expires = ${expire.toUTCString()}`;
    let info = document.createElement('li');
    info.innerText = `Cookie ${name} créé`;
    affichage.appendChild(info);
    setTimeout(() => {
        info.remove();
    },1500)
}

function listeCookies() {
    let cookies = document.cookie.split(';');
    if (cookies.join() === "") {
        infoTxt.innerText = `Pas de cookies à afficher`;
        return;
    }

    cookies.forEach(cookie => {
        cookie = cookie.trim();
        infoTxt.innerText = `Cliquez sur un cookie dans la liste pour le supprimer`;
        let formatCookie = cookie.split('=');
        let item = document.createElement('li');
        item.innerText = `Nom : ${decodeURIComponent(formatCookie[0])}, valeur : ${decodeURIComponent(formatCookie[1])}`+"\n";
        affichage.appendChild(item);


        item.addEventListener('click', () => {
            document.cookie = `${formatCookie[0]}=; expires= ${new Date(0)}`;
            item.innerText = `Cookie ${formatCookie[0]} supprimé`;
            setTimeout(() => {
                item.remove();
            },1000)
        })
    })
}