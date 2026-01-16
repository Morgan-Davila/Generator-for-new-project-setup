const META_INPUT = {
    title: document.getElementById("titleInput"),

    charset: document.getElementById("charsetInput"),

    description: document.getElementById("inputDescription"),

    favicon: document.getElementById("faviconInput")
};   


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
        LISTE : LISTES[0],
        EXTENSION : "css"
    },
    {
        INPUT : document.getElementById('inputJS'), //input js
        DIV : document.getElementById('divInputJS'), //div js
        LISTE : LISTES[1],
        EXTENSION : "js"
    },
    {
        INPUT : document.getElementById('folderInput'),
        DIV : document.getElementById('divFolder'),
        LISTE : LISTES[2],
        EXTENSION : ""
    }
];

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