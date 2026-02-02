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
    }
];

const REGEX_INPUT = /^[A-Za-z0-9_-]+$/;

const BUTTON = document.getElementById("submit");

const LISTE_FONT = {
    Bodoni_Classic : {
        class : 'Bodoni-Classic',
        url : '../font/Bodoni_Moda/BodoniModa-VariableFont_opsz\,wght.ttf',
        folder : '../font/Bodoni_Moda/',
        name : 'Bodoni Classic'
    },
    Gotham_Black : {
        class : 'Gotham-Black',
        url : '../font/Gotham Fonts Family/GOTHAM-BOLD.TTF',
        folder : '../font/Gotham Fonts Family/',
        name : 'Gotham Black'
    },
    Gotham_Medium : {
        class : 'Gotham-Medium',
        url : '../font/Gotham Fonts Family/Gotham-Medium.otf',
        folder : '../Gotham Font Family/',
        name : 'Gotham Medium'
    },
    Frick_Regular : {
        class : 'Frick-Regular',
        url : '../font/Frick/Frick0.3-Regular.otf',
        folder : '../font/Frick/',
        name : 'Frick'
    },
    OpeningHours : {
        class : 'OpeningHours',
        url : '../font/OpeningHours/OpeningHoursSans-Regular.otf',
        folder : '../font/OpeningHours/',
        name : 'Opening Hours'
    },
    Stardom_Regular : {
        class : 'Stardom-Regular',
        url : '../font/Stardom/Stardom-Regular.otf',
        folder : '../font/Stardom/',
        name : 'Stardom'
    },
    DM_Serif_Text : {
        class : 'DM-Serif-Text',
        url : '../font/DM_Serif_Text/DMSerifText-Regular.tt',
        folder : '../font/DM_Serif_Text/',
        name : 'DM Serif Text'
    },
    Inter : {
        class : 'Inter',
        url : '../font/Inter/Inter-VariableFont_opsz\,wght.ttf',
        folder : '../font/Inter/',
        name : 'Inter'
    },
    Orbitron : {
        class : 'Orbitron',
        url : '../font/Orbitron/Orbitron-VariableFont_wght.ttf',
        folder : '../font/O', //à terminer 
        name : 'Orbitron'
    }
};

