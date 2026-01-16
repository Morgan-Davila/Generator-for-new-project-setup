
const BUTTON = document.getElementById("submit");

BUTTON.addEventListener("click", (event) => {
    event.preventDefault();
    
});




//on recup tout les fileCell déjà existant pour les dispatcher dans leur liste et leur donner leur addEventListener
for (let cle in LISTES) {
    console.log(cle);
    for (let key in LISTES[cle]) {
        INPUT[cle].DIV.appendChild(creerUnFileCell(LISTES[cle][key], INPUT[cle].LISTE));
    }
}


for (let cle in INPUT) {
    console.log(INPUT[cle].INPUT);//debug

    INPUT[cle].INPUT.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();  // Empêche la soumission du form
            
            
            let file = INPUT[cle].INPUT.value.replace(/\s+/g, ''); //le .replace supprime les espace inutile

            //security
            // verifExtension(file);

            console.log(file);
            if (file !== "") {  // Vérifie que le champ n'est pas vide
                INPUT[cle].LISTE.push(file);
                
                console.log(file + " ajouté.");
                console.log(LISTES[0]);
                console.log(LISTES[1]);
                console.log(LISTES[2]);

                INPUT[cle].DIV.appendChild(creerUnFileCell(file, INPUT[cle].LISTE));
                // Vider l'input
                INPUT[cle].INPUT.value = "";
            };
        };
    });
};



for (let cle in CLEAR_BTN) {
    CLEAR_BTN[cle].button.addEventListener("click", () => {
        CLEAR_BTN[cle].liste.length = 0;
        console.log(CLEAR_BTN[cle].liste);

        if (CLEAR_BTN[cle].div) {
            CLEAR_BTN[cle].div.innerHTML = ""; //tout vider
        }; 
    });
}