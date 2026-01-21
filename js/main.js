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
        if (DEBUG) {
            console.log(CLEAR_BTN[cle].liste);
        }

        if (CLEAR_BTN[cle].div) {
            CLEAR_BTN[cle].div.innerHTML = ""; //tout vider
        };
    });
};

/* REACTIF.forEach(element => {
     element.addEventListener("input", (event) => {
         console.log("Valeur : " + event.target.value);
         console.log(event);

        
     });
});

for (let cle in REACTIF) {
    console.log(REACTIF[cle].src);

    let currentElement = REACTIF[cle].src;
    let currentLine = REACTIF[cle].line

    currentElement.addEventListener("change", (event) => {
        console.log(event)
    });
} */







//création du Zip Final
BUTTON.addEventListener("click", (event) => {
    event.preventDefault();
    
    const HTML = document.createElement('html');
    HTML.lang = META_INPUT.lang.value;

    const HEAD = document.createElement('head');
    HTML.appendChild(HEAD);

    // --------------------
    // META DATA
    // --------------------

    const TITLE = document.createElement('title');
    TITLE.textContent = META_INPUT.title.value
    HEAD.appendChild(TITLE);

    const CHARSET = document.createElement('meta');
    CHARSET.setAttribute('charset', META_INPUT.charset.value);
    HEAD.appendChild(CHARSET);

    const DESCRIPTION = document.createElement('meta');
    DESCRIPTION.setAttribute('name', 'description');
    DESCRIPTION.setAttribute('content', META_INPUT.description.value);
    HEAD.appendChild(DESCRIPTION);

    const AUTHOR = document.createElement('meta');
    AUTHOR.setAttribute('name', 'author');
    AUTHOR.setAttribute('content', META_INPUT.author.value)
    HEAD.appendChild(AUTHOR);
    
    const FAVICON = document.createElement('link');
    FAVICON.setAttribute('rel', 'icon');
    FAVICON.setAttribute('href', META_INPUT.favicon.value);
    HEAD.appendChild(FAVICON);

    if (DEBUG) {
        console.log(HTML);
        console.log(HEAD);
        console.log(TITLE);
        console.log(CHARSET);
        console.log(DESCRIPTION);
        console.log(AUTHOR);
        console.log(FAVICON);
    };

    let HTMLcontent = `
        <html lang="${META_INPUT.lang.value}">
            <head>
                <title>${META_INPUT.title.value}</title>
                <meta charset="${META_INPUT.charset.value}">
                <meta name="description" content="${META_INPUT.description.value}">
                <meta name="author" content="${META_INPUT.author.value}">

                <link rel="icon" href="${META_INPUT.favicon.value}">

                <!-- CSS -->
                
    `

    // --------------------
    // CSS & JS
    // --------------------
    for (let cle in LISTES) {

        switch (cle) {
            case 'css' :
                for (let file of LISTES['css']) {
                    let link = document.createElement('link');
                    link.setAttribute('rel', 'stylesheet');
                    link.setAttribute('type', 'text/css');
                    link.setAttribute('href', 'style/' + file);

                    HEAD.appendChild(link);

                    if (DEBUG) {
                        console.log(link);
                    };
                };
            break
            case 'js' :
                for (let file of LISTES['js']) {
                    let script = document.createElement('script');
                    script.setAttribute('src', 'js/' + file);

                    HEAD.appendChild(script);

                    if (DEBUG) {
                        console.log(script);
                    }
                }
            break
        }
    };
    
    console.log(HTML);
    console.log(HEAD);

    // --------------------
    // Création du zip
    // --------------------

    const zip = new JSZip();
    
    let folderStyle = zip.folder(LISTE_DOC[0]);
    let folderJs = zip.folder(LISTE_DOC[1]);
    let folderAssets = zip.folder(LISTE_DOC[2]);
    let folderFont = zip.folder(LISTE_DOC[3]);

    let HTMLfile = zip.file('index.html', HTML)

    for (let cle of LISTES.css) {
        folderStyle.file(LISTES[cle]);
    }
    for (let cle of LISTES.js) {
        folderJs.file(LISTES[cle])
    }

});