const META_INPUT = {
    title: document.getElementById("titleInput"),
    charset: document.getElementById("charsetInput"),
    description: document.getElementById("inputDescription"),
    favicon: document.getElementById("faviconInput")
};   

const BUTTON = document.getElementById("submit");

BUTTON.addEventListener("click", (event) => {
    event.preventDefault();
    
});
const LISTES = [
    [
        'style.css',
        'font.css'
    ],
    [
        'script.js'
    ],
    [
        'style',
        'js',
        'assets',
        'font'
    ]
]

const INPUT = [
    {
        INPUT : document.getElementById("inputCSS"), //input style
        DIV : document.getElementById('divInputCSS'), //div style
        LISTE : LISTES[0]
    },
    {
        INPUT : document.getElementById('inputJS'), //input js
        DIV : document.getElementById('divInputJS'), //div js
        LISTE : LISTES[1]
    },
    {
        INPUT : document.getElementById('folderInput'),
        DIV : document.getElementById('divFolder'),
        LISTE : LISTES[2]
    }
];


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
    console.log("creerUnFileCell Etape 1 passé");

    //set la croix pour suprimer le button
    button.addEventListener("click", (event) => {
        event.preventDefault();

        button.remove(); //suprimme le button du DOM
        const i = currentListe.indexOf(file); //suprime le fichier de sa liste
        i !== -1 && currentListe.splice(i, 1);

        console.log(currentListe);

    });
    console.log("creerUnFileCell Etape 2 passé");


    return button;
}
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
        console.log("Enter pressed");
        if (event.key === "Enter") {
            event.preventDefault();  // Empêche la soumission du form
            
            let file = INPUT[cle].INPUT.value.trim(); //le .trim supprime les espace inutile
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

//les btn clear pour vider toute une liste
const CLEAR_BTN = [
    {
        value: 'CSS',
        button: document.getElementById('clearCSS'),
        liste: LISTES[0],
        div : INPUT[0].DIV
    },
    {
        value: 'JS',
        button: document.getElementById('clearJS'),
        liste: LISTES[1],
        div: INPUT[1].DIV
    },
    {
        value : 'folder',
        button : document.getElementById('clearFolder'),
        liste : LISTES[2],
        div : INPUT[2].DIV
    }
];

for (let cle in CLEAR_BTN) {
    CLEAR_BTN[cle].button.addEventListener("click", () => {
        CLEAR_BTN[cle].liste.length = 0;
        console.log(CLEAR_BTN[cle].liste);

        if (CLEAR_BTN[cle].div) {
            CLEAR_BTN[cle].div.innerHTML = ""; //tout vider
        }; 
    });
}