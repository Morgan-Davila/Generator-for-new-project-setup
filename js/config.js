const META_INPUT = {
    title: document.getElementById("titleInput"),

    charset: document.getElementById("charsetInput"),

    description: document.getElementById("inputDescription"),

    favicon: document.getElementById("faviconInput")
};   


const LISTES = {
    css : [
        'style.css',
        'font.css'
    ],
    js : [
        'script.js'
    ],
    folder :[
        'style',
        'js',
        'assets',
        'font'
    ]
};
const DOUBLON = {
    message : "Ceci existe déjà dans la liste.",
    className : "doublonMessage"
};

const INPUT_CONFIG = {
    css : {
        INPUT : document.getElementById("inputCSS"), //input style
        DIV : document.getElementById('divInputCSS'), //div style
        LISTE : LISTES.css,
        EXTENSION : ".css",
        DOUBLON_DIV : document.getElementById('doublonCSS')
    },
    js :{
        INPUT : document.getElementById('inputJS'), //input js
        DIV : document.getElementById('divInputJS'), //div js
        LISTE : LISTES.js,
        EXTENSION : ".js",
        DOUBLON_DIV : document.getElementById('doublonJS')
    },
    folder : {
        INPUT : document.getElementById('folderInput'),
        DIV : document.getElementById('divFolder'),
        LISTE : LISTES.folder,
        EXTENSION : "",
        DOUBLON_DIV : document.getElementById('doublonFolder')
    }
};

const CLEAR_BTN = [
    {
        value: 'CSS',
        button: document.getElementById('clearCSS'),
        liste: LISTES.css,
        div : INPUT_CONFIG.css.DIV
    },
    {
        value: 'JS',
        button: document.getElementById('clearJS'),
        liste: LISTES.js,
        div: INPUT_CONFIG.js.DIV
    },
    {
        value : 'folder',
        button : document.getElementById('clearFolder'),
        liste : LISTES.folder,
        div : INPUT_CONFIG.folder.DIV
    }
];