function creerUnFileCell(file, currentListe) {
    let button = document.createElement('button');
    button.className = 'fileCell';  // Propriété, pas fonction
    button.type = 'button';  // Important pour éviter la soumission du form

    let p = document.createElement('p');
    p.textContent = file;
    
    let svg = `
        <svg class="crossInFileCell" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
    `
    button.innerHTML = svg;
    button.appendChild(p);

    //set la croix pour suprimer le button
    button.addEventListener("click", (event) => {
        event.preventDefault();

        button.remove(); //suprimme le button du DOM
        const i = currentListe.indexOf(file); //suprime le fichier de sa liste
        i !== -1 && currentListe.splice(i, 1);

        if (DEBUG) {
            console.log(currentListe);
        }
    });
    if (DEBUG) {
        console.log(button + " créé");
    };

    return button;
};

function ajouterExtension (file, extension) { 
    return file + extension;
};

function verifSiDoublon (file, liste) {
    if (liste.includes(file)) { 
        return true;
    } else {
        return false; 
    };
};

function afficherEreurDoublon(file, currentInput) {
    //creation du message d'erreur
    let messageEreur = document.createElement('p');
    messageEreur.className = EROR_DESIGN.className;
    messageEreur.textContent = file + MESSAGE_EROR.doublon;

    if (DEBUG) {
        console.log(messageEreur);
    };

    //ajout d'une shadow rouge vif autour de l'inpuit pour alerter l'user
    currentInput.classList.add(EROR_DESIGN.redShadowClass);

    //creation d'une fonction pour suprimer le message d'erreur et l'ombre rouge au bout de 3 secondes
    setTimeout(() => {
        messageEreur.remove();
        currentInput.classList.remove(EROR_DESIGN.redShadowClass);
    }, 3000);

    

    return messageEreur;
};

function verifCaractereInterdit(file) { 
    if (REGEX_INPUT.test(file)) {
        return true
    } else {
        return false
    }
};

function afficherEreurRegex (currentInput) {
    let messageEreur = document.createElement('p');
    messageEreur.innerText = MESSAGE_EROR.regex;
    messageEreur.className = EROR_DESIGN.className;

    currentInput.classList.add(EROR_DESIGN.redShadowClass);

    setTimeout(() => {
        messageEreur.remove();
        currentInput.classList.remove(EROR_DESIGN.redShadowClass);
    }, 5000);

    return messageEreur;
};

function creerUnFontCell (fontClass, fontName) {
    let fontCellContent = `
        <label class="container">
            <input checked="checked" type="checkbox">
            <div class="checkmark"></div>
        </label>
        <div class="fontPlace ${fontClass}">
            <span class="nameFont">${fontName}</span>
            <span> | </span>
            <span>Portez ce vieux whisky au juge blond qui fume. 1234567890</span>
        </div>
    `;
    let fontCell = document.createElement('div');
    fontCell.classList.add('fontCell');
    fontCell.innerHTML = fontCellContent;

    return fontCell;
}