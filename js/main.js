const DEBUG = false;


const BUTTON = document.getElementById("submit");

BUTTON.addEventListener("click", (event) => {
    event.preventDefault();
    
});

for (let key in LISTES) {
    if (DEBUG) {
        console.log(key);
        console.log(INPUT_CONFIG[key]);
    };
    for (let cle in LISTES[key]) { 
        INPUT_CONFIG[key].DIV.appendChild(creerUnFileCell(LISTES[key][cle], INPUT_CONFIG[key].LISTE));
    };
};

// ============================
// Gestion des listes
// ============================

for (let cle in INPUT_CONFIG) {

    INPUT_CONFIG[cle].INPUT.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();  // Empêche la soumission du form
            
            
            let file = INPUT_CONFIG[cle].INPUT.value.replace(/\s+/g, ''); //le .replace supprime les espace inutile
            let currentListe = INPUT_CONFIG[cle].LISTE;
            let currentInput = INPUT_CONFIG[cle].INPUT;

            if (DEBUG) {
                console.log(file);
            };
            
            if (file !== "") {  // Vérifie que le champ n'est pas vide
                //on ajoute l'extension au file
                file = ajouterExtension(file, INPUT_CONFIG[cle].EXTENSION);

                //verif si doublon
                if (verifSiDoublon(file, currentListe)) {
                    //cacher le message de doublon s'il est affiché
                    INPUT_CONFIG[cle].DOUBLON_DIV.appendChild(afficherEreurDoublon(currentInput));
                    console.log("Doublon détecté : " + file);
                    currentInput.value = "";
                } else {
                    INPUT_CONFIG[cle].LISTE.push(file);
                
                    INPUT_CONFIG[cle].DIV.appendChild(creerUnFileCell(file, currentListe));
                    // Vider l'input
                    currentInput.value = "";
                };

                if (DEBUG) { 
                   console.log(file + " ajouté.");
                    console.log(LISTES.css);
                    console.log(LISTES.js);
                    console.log(LISTES.folder);
                };

                
                
            };
        };
    });
};

for (let cle in INPUT_CONFIG) {
    INPUT_CONFIG
};
if (DEBUG) {
    console.log(CLEAR_BTN);
};


// ============================
// Clear buttons
// ============================
for (let cle in CLEAR_BTN) {
    CLEAR_BTN[cle].button.addEventListener("click", () => {
        CLEAR_BTN[cle].liste.length = 0;
        console.log(CLEAR_BTN[cle].liste);

        if (CLEAR_BTN[cle].div) {
            CLEAR_BTN[cle].div.innerHTML = ""; //tout vider
        }; 
    });
};