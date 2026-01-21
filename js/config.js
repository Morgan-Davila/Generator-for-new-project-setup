const META_INPUT = {
    title: document.getElementById("titleInput"),

    charset: document.getElementById("charsetInput"),

    description: document.getElementById("inputDescription"),

    author : document.getElementById('inputAuthor'),

    lang : document.getElementById('inputLang'),

    favicon: document.getElementById("faviconInput")
};   


const LISTES = {
    css : [
        'style.css',
        'font.css'
    ],
    js : [
        'script.js'
    ]
    /* folder :[
         'style',
         'js',
         'assets',
         'font'
    ]*/
};
const LISTE_DOC = [
    'style',
    'js',
    'assets',
    'font'
];

const MESSAGE_EROR = {
    doublon : " existe déjà dans la liste.",
    regex : "Seul les lettres en majuscules et minuscules ainsi que les chiffres sont autorisés."
};
const EROR_DESIGN = {
    className : 'erorMessage',
    redShadowClass : 'redShadow' 
}

const INPUT_CONFIG = {
    css : {
        INPUT : document.getElementById("inputCSS"), //input style
        DIV : document.getElementById('divInputCSS'), //div style
        LISTE : LISTES.css,
        EXTENSION : ".css",
        DOUBLON_DIV : document.getElementById('doublonCSS'),
        REGEX_CONTAINER : document.getElementById('regexCSS')
    },
    js :{
        INPUT : document.getElementById('inputJS'), //input js
        DIV : document.getElementById('divInputJS'), //div js
        LISTE : LISTES.js,
        EXTENSION : ".js",
        DOUBLON_DIV : document.getElementById('doublonJS'),
        REGEX_CONTAINER : document.getElementById('regexJS')
    },
    /*folder : {
        INPUT : document.getElementById('folderInput'),
        DIV : document.getElementById('divFolder'),
        LISTE : LISTES.folder,
        EXTENSION : "",
        DOUBLON_DIV : document.getElementById('doublonFolder'),
        REGEX_CONTAINER : document.getElementById('regexFolder')
    }*/
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
    /*{
        value : 'folder',
        button : document.getElementById('clearFolder'),
        liste : LISTES.folder,
        div : INPUT_CONFIG.folder.DIV
    }*/
];

const REGEX_INPUT = /^[A-Za-z0-9_-]+$/;

const BUTTON = document.getElementById("submit");

const REACTIF = {
    titre : {
        src : META_INPUT.title,
        line : document.createElement('title')
    },
    charset : {
        src : META_INPUT.charset,
        line : document.createElement('meta')
    },
    description : {
        src : META_INPUT.description,
        line : document.createElement('meta')
    },
    author : {
        src : META_INPUT.author,
        line : document.createElement('meta')
    },
    favicon : {
        src : META_INPUT.favicon,
        line : document.createElement('link')
    }
}