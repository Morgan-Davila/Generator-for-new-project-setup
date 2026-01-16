function creerUnFileCell(file, currentListe) {
    let button = document.createElement('button');
    button.className = 'fileCell';  // Propriété, pas fonction
    button.type = 'button';  // Important pour éviter la soumission du form
    
    button.innerHTML = `
        <svg class="crossInFileCell" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <p class="textInFileCell">${file}</p>
    `;
    //set la croix pour suprimer le button
    button.addEventListener("click", (event) => {
        event.preventDefault();

        button.remove(); //suprimme le button du DOM
        const i = currentListe.indexOf(file); //suprime le fichier de sa liste
        i !== -1 && currentListe.splice(i, 1);

        console.log(currentListe);

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
        return false;
    } else {
        return true;
    };
};

function afficherEreurDoublon() {
    let messageEreur = document.createElement('p');
    messageEreur.className = DOUBLON.className;
    messageEreur.textContent = DOUBLON.message;

    return messageEreur;
};