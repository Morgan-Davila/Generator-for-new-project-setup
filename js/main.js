const DEBUG = false;


const BUTTON = document.getElementById("submit");

BUTTON.addEventListener("click", (event) => {
    event.preventDefault();
    
});

for (let key in LISTES) {
    console.log(key);
    console.log(INPUT[key]);
    for (let cle in LISTES[key]) { 
        INPUT[key].DIV.appendChild(creerUnFileCell(LISTES[key][cle], INPUT[key].LISTE));
    };
};

// ============================
// Gestion des listes
// ============================

for (let cle in INPUT) {

    INPUT[cle].INPUT.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();  // Empêche la soumission du form
            
            
            let file = INPUT[cle].INPUT.value.replace(/\s+/g, ''); //le .replace supprime les espace inutile
            let currentListe = INPUT[cle].LISTE;

            if (DEBUG) {
                console.log(file);
            };
            
            if (file !== "") {  // Vérifie que le champ n'est pas vide
                //on ajoute l'extension au file
                file = ajouterExtension(file, INPUT[cle].EXTENSION);

                //verif si doublon
                if (verifSiDoublon(file, currentListe)) {
                    //cacher le message de doublon s'il est affiché
                    INPUT[cle].DOUBLON_DIV.innerHTML = afficherEreurDoublon();
                };

                INPUT[cle].LISTE.push(file);
                
                if (DEBUG) { 
                   console.log(file + " ajouté.");
                    console.log(LISTES.css);
                    console.log(LISTES.js);
                    console.log(LISTES.folder);
                };

                
                INPUT[cle].DIV.appendChild(creerUnFileCell(file, currentListe));
                // Vider l'input
                INPUT[cle].INPUT.value = "";
            };
        };
    });
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