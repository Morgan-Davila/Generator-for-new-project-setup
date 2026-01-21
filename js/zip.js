/* let listeDoc = [
    "style",
    "js",
    "assets",
    "font"
];
let HTMLcontent = `
    <!DOCTYPE html>
    <html lang="fr">
        <head>
            <title>Title</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="author" content="">
            <meta name="description" content="">
        </head>
        <body>

        </body>
    </html>
`;

const zip = new JSZip();

for (let cle in listeDoc) {
    zip.folder(listeDoc[cle]);
};

zip.file('index.html', HTMLcontent);

let btn = document.getElementById('btn');


btn.addEventListener('click', (event) => {

    event.preventDefault();

    zip.generateAsync({type: 'blob'}).then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');

        a.href = url;
        a.download = 'site.zip'
        a.click();
        URL.revokeObjectURL(url);
    })
}); */