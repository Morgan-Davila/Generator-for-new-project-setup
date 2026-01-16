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

const INPUT = {
    css : {
        INPUT : document.getElementById("inputCSS"), //input style
        DIV : document.getElementById('divInputCSS'), //div style
        LISTE : LISTES.css,
        EXTENSION : ".css"
    },
    js :{
        INPUT : document.getElementById('inputJS'), //input js
        DIV : document.getElementById('divInputJS'), //div js
        LISTE : LISTES.js,
        EXTENSION : ".js"
    },
    folder :{
        INPUT : document.getElementById('folderInput'),
        DIV : document.getElementById('divFolder'),
        LISTE : LISTES.folder,
        EXTENSION : ""
    }
};

const CLEAR_BTN = [
    {
        value: 'CSS',
        button: document.getElementById('clearCSS'),
        liste: LISTES.css,
        div : INPUT.css.DIV
    },
    {
        value: 'JS',
        button: document.getElementById('clearJS'),
        liste: LISTES.js,
        div: INPUT.js.DIV
    },
    {
        value : 'folder',
        button : document.getElementById('clearFolder'),
        liste : LISTES.folder,
        div : INPUT.folder.DIV
    }
];