const DEBUG = true;


const BUTTON = document.getElementById("submit");

BUTTON.addEventListener("click", (event) => {
    event.preventDefault();
    
});




//on recup tout les fileCell déjà existant pour les dispatcher dans leur liste et leur donner leur addEventListener
/*for (let cle in LISTES) {
    console.log(cle);
    console.log(INPUT[cle]);
    for (let key in LISTES[cle]) {
        INPUT[cle].DIV.appendChild(creerUnFileCell(LISTES[cle][key], INPUT[cle].LISTE));
    }
}*/
let lenghtLISTES = Object.keys(LISTES).length;

for (let key in LISTES) {
    console.log(key);
    console.log(INPUT[key]);
    for (let cle in LISTES[key]) { 
        INPUT[key].DIV.appendChild(creerUnFileCell(LISTES[key][cle], INPUT[key].LISTE));
    };
};

for (let cle in INPUT) {

    INPUT[cle].INPUT.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();  // Empêche la soumission du form
            
            
            let file = INPUT[cle].INPUT.value.replace(/\s+/g, ''); //le .replace supprime les espace inutile

            console.log(file);
            if (file !== "") {  // Vérifie que le champ n'est pas vide
                //on ajoute l'extension au file
                file = ajouterExtension(file, INPUT[cle].EXTENSION);



                INPUT[cle].LISTE.push(file);
                
                if (DEBUG) { 
                   console.log(file + " ajouté.");
                    console.log(LISTES.css);
                    console.log(LISTES.js);
                    console.log(LISTES.folder);
                };

                
                INPUT[cle].DIV.appendChild(creerUnFileCell(file, INPUT[cle].LISTE));
                // Vider l'input
                INPUT[cle].INPUT.value = "";
            };
        };
    });
};

if (DEBUG) {
    console.log(CLEAR_BTN);
};


for (let cle in CLEAR_BTN) {
    CLEAR_BTN[cle].button.addEventListener("click", () => {
        CLEAR_BTN[cle].liste.length = 0;
        console.log(CLEAR_BTN[cle].liste);

        if (CLEAR_BTN[cle].div) {
            CLEAR_BTN[cle].div.innerHTML = ""; //tout vider
        }; 
    });
};