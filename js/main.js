const DEBUG = false;

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
            let currentDiv = INPUT_CONFIG[cle].DIV;
            let currentRegex = INPUT_CONFIG[cle].REGEX_CONTAINER;

            if (DEBUG) {
                console.log(file);
            };
            
            if (file !== "") {  // Vérifie que le champ n'est pas vide

                //on verifi qu'il n'y a pas de caractère interdit (histoire d'eviter les <script></script>)
                if (!verifCaractereInterdit(file)) {
                    currentRegex.appendChild(afficherEreurRegex(currentInput));
                } else {

                    //on ajoute l'extension au file
                    file = ajouterExtension(file, INPUT_CONFIG[cle].EXTENSION);

                    //verif si doublon
                    if (verifSiDoublon(file, currentListe)) {
                        //cacher le message de doublon s'il est affiché
                        INPUT_CONFIG[cle].DOUBLON_DIV.appendChild(afficherEreurDoublon(file, currentInput));
                        console.log("Doublon détecté : " + file);
                        currentInput.value = "";
                    } else {
                        currentListe.push(file);
                    
                        currentDiv.appendChild(creerUnFileCell(file, currentListe));
                        // Vider l'input
                        currentInput.value = "";
                    };
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

if (DEBUG) {
    console.log(CLEAR_BTN);
};


// ============================
// Clear buttons
// ============================
for (let cle in CLEAR_BTN) {
    CLEAR_BTN[cle].button.addEventListener("click", () => {
        CLEAR_BTN[cle].liste.length = 0;
        if (DEBUG) {
            console.log(CLEAR_BTN[cle].liste);
        }

        if (CLEAR_BTN[cle].div) {
            CLEAR_BTN[cle].div.innerHTML = ""; //tout vider
        };
    });
};

// ============================
// Gestion des font Cell
// ============================

//Création
for (let cle in LISTE_FONT) {
    const fontCellContainer = document.getElementById('fontCellContainer');
    fontCellContainer.appendChild(creerUnFontCell(LISTE_FONT[cle].class, LISTE_FONT[cle].name))
}


// ============================
// Création du zip final
// ============================
BUTTON.addEventListener("click", (event) => {
    event.preventDefault();
    
    let CSSplace = ""; //l'endroit où seront ajouté le txt des link
    let JSplace = ""; //pareil avec avec script

    // --------------------
    // CSS & JS
    // --------------------

    for (let cle in LISTES) {
        switch (cle) {
            case 'css' : 
                for (let file of LISTES[cle]) {
                    let CSSline = `<link rel="stylesheet" type="text/css" href="style/${file}">\n`
                    CSSplace += CSSline;
                }
            break
            case 'js' :
                for (let file of LISTES[cle]) {
                    let JSline = `<script src="js/${file}" defer></script>\n`
                    JSplace += JSline;
                }
            break
        }
    };

    console.log(CSSplace);
    console.log(JSplace);

    let HTMLcontent = `
        <!DOCTYPE html>
        <html lang="${META_INPUT.lang.value}">
            <head>
                <title>${META_INPUT.title.value}</title>
                <meta charset="${META_INPUT.charset.value}">
                <meta name="description" content="${META_INPUT.description.value}">
                <meta name="author" content="${META_INPUT.author.value}">

                <link rel="icon" href="${META_INPUT.favicon.value}">

                <!-- CSS -->
                ${CSSplace}

                <!-- JS -->
                ${JSplace}

            </head
            <body>


            </body>
        </html>      
    `;

    // --------------------
    // Création du zip
    // --------------------

    const zip = new JSZip();
    
    let folderStyle = zip.folder(LISTE_DOC[0]);
    let folderJs = zip.folder(LISTE_DOC[1]);
    let folderAssets = zip.folder(LISTE_DOC[2]);
    let folderFont = zip.folder(LISTE_DOC[3]);

    let HTMLfile = zip.file('index.html', HTMLcontent)
    console.log(HTMLcontent)

    
    // Ajouter les fichiers CSS dans folderStyle
    for (let fileName of LISTES.css) {
        // Ici fileName est le nom du fichier CSS
        folderStyle.file(fileName, LISTES.css[fileName]); // si tu as le contenu dans LISTES.css[fileName]
    }

    // Ajouter les fichiers JS dans folderJs
    for (let fileName of LISTES.js) {
        folderJs.file(fileName, LISTES.js[fileName]); // pareil
    }


    zip.generateAsync({type: 'blob'}).then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');

        a.href = url;
        a.download = META_INPUT.title.value + '.zip'
        a.click();
        URL.revokeObjectURL(url);
    })
});