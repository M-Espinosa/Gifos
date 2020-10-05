/*--------------Constantes API-----------------*/

/*----API GHIPY----*/
const apyKey = '?api_key=Dbd2UiqlgYCm8ccKQSpaxCyFipue5XTt';
const urlApi = 'https://api.giphy.com/v1/';

/*----Endpoint-----*/
const search = 'gifs/search';
const trending = 'gifs/trending';
const random = 'gifs/random';

/*----Parametros----*/
const query = '?q=';
const limit = '&limit=';
const tag = '&tag='
const rating = '&rating='
/*-----Hardcode--------*/
const cantidadGif = "12";
/*-----URL----*/
const urlTrending = urlApi + trending + apyKey + limit + cantidadGif;
const urlrandom = urlApi + random + apyKey + rating;
const urlSearch = urlApi + search + apyKey + query + limit;

/*---DOM---*/
const botonBuscar = document.querySelector('.boton-lupa');
const gifosTendencias = document.querySelector('.gifos-tendencias');
const gifosSugerencias = document.querySelector('.gifos-sugerencias')
const dropDown = document.querySelector('.dropdown');
const tema = document.querySelector('#select-tema');
const botonNight = document.querySelector('.boton-night');
const botonDay = document.querySelector('.boton-day');
const linkTema = document.querySelector('#link-tema');
const logo = document.querySelector('.logo');
const favicon = document.querySelector('#favicon')
const conteinerSugerimos = document.querySelector('.conteiner-sugerimos')
let selecttheme = localStorage.getItem("theme")


/*-----Fetch a Gifos Buscados*/
// let fetchSearch = async () => {
//     try {
//         const respuesta = await fetch('https://api.giphy.com/v1/gifs/search?api_key=Dbd2UiqlgYCm8ccKQSpaxCyFipue5XTt&q=homer&limit=12');
//         const datos = await respuesta.json();
//         gifosTendencias.innerHTML = "";
//         conteinerSugerimos.style.display = 'none'
//         console.log(datos);

//         for (const gifos of datos.data) {
//             let contGifos = document.createElement('div');
//             let img = document.createElement('img');
//             let tag = document.createElement('div');
//             let pTag = document.createElement('p');

//             contGifos.className = 'container-gif';
//             tag.className = 'tag-gifos';
//             pTag.className = 'hashtag';
//             img.className = 'img-gifos';


//             gifosTendencias.appendChild(contGifos);
//             contGifos.appendChild(img);
//             contGifos.appendChild(tag);
//             tag.appendChild(pTag);

//             img.setAttribute('src', gifos.images.original.url);
//             img.setAttribute('alt', gifos.title);

//             let hashtag = gifos.title.split(' ');

//             for (stringtag of hashtag) {
//                 pTag.innerHTML += '#' + stringtag;
//             }
//             if (gifos % 5 == 0) {
//                 contGifos.style.width = '47%';
//                 tag.style.width = '97%';
//             }

//             img.addEventListener('mouseover', () => {
//                 tag.style.display = 'block';
//             })
//             img.addEventListener('mouseout', () => {
//                 tag.style.display = 'none';
//             })
//         }
//     }
//     catch (err) {
//         console.log('Fallo el fetch', (err));
//     }
// }
// fetchSearch();
// botonBuscar.addEventListener('click', fetchSearch);



/*-----Fetch a gifos sugeridos-----*/
let fetchRandom = async () => {
    for (let i = 0; i < 4; i++) {
        const respuesta = await fetch(urlrandom);
        const datos = await respuesta.json();
        console.log(datos);

        let conteiner = document.createElement('div');
        let gifos = document.createElement('img');
        let conteinerhashtag = document.createElement('div');
        let hashtagSugeridos = document.createElement('p');
        let botonMas = document.createElement('button');
        let iconoCierre = document.createElement('img')

        gifosSugerencias.appendChild(conteiner);
        conteiner.appendChild(gifos);
        conteiner.appendChild(conteinerhashtag);
        conteinerhashtag.appendChild(hashtagSugeridos)
        conteiner.appendChild(botonMas)
        conteiner.appendChild(iconoCierre)

        conteiner.className = 'cont-gifos-sugeridos'
        gifos.className = 'img-gifos-sugeridos'
        conteinerhashtag.className = 'conteiner-hastag'
        hashtagSugeridos.className = 'hashtag-sugeridos-title'
        botonMas.className = 'boton-mas'
        botonMas.innerText = 'Ver más…'
        iconoCierre.className = 'icono-cierre'


        gifos.setAttribute('src', datos.data.images.original.url)
        gifos.setAttribute('alt', datos.data.title)
        iconoCierre.setAttribute('src', './Assets/SVG/button3.svg')

        hashtagSugeridos.innerText = '#' + datos.data.title
        if (datos.data.title == "") {
            hashtagSugeridos.innerText = '#' + 'Animated GIF'
        }
    }

}

fetchRandom();

/*-----Fetch a Gifos trending-----*/
let api = async () => {
    try {
        const respuesta = await fetch(urlTrending);
        const datos = await respuesta.json();
        console.log(datos);
        return datos
    }
    catch (err) {
        console.log('Fallo el fetch', (err));
    }
}

api()
    .then((response) => {
        for (let i = 0; i < 12; i++) {

            let contGifos = document.createElement('div');
            let img = document.createElement('img');
            let tag = document.createElement('div');
            let pTag = document.createElement('p');

            contGifos.className = 'container-gif';
            tag.className = 'tag-gifos';
            pTag.className = 'hashtag';
            img.className = 'img-gifos';


            gifosTendencias.appendChild(contGifos);
            contGifos.appendChild(img);
            contGifos.appendChild(tag);
            tag.appendChild(pTag);

            img.setAttribute('src', response.data[i].images.original.url);
            img.setAttribute('alt', response.data[i].title);

            let hashtag = response.data[i].title.split(' ');
            for (stringtag of hashtag) {
                pTag.innerHTML += '#' + stringtag;
            }
            if (i % 5 == 0) {
                contGifos.style.width = '47%';
                tag.style.width = '97%';
            }

            img.addEventListener('mouseover', () => {
                tag.style.display = 'block';
            })
            img.addEventListener('mouseout', () => {
                tag.style.display = 'none';
            })

        }
    })

/*-----Cambiar Tema----*/

let selectTema = () => {
    tema.classList.toggle('day-night');
}

dropDown.addEventListener('click', selectTema);

botonNight.addEventListener('click', () => {
    linkTema.setAttribute('href', './Assets/style/stylenigh.css')
    logo.setAttribute('src', './Assets/Fotos/gifOF_logo_dark.png');
    favicon.setAttribute('href', './Assets/Fotos/gifOF_logo_dark.png');
    tema.classList.toggle('day-night');
    selectTema = localStorage.setItem('theme', 'night')
});

botonDay.addEventListener('click', () => {
    linkTema.setAttribute('href', './Assets/style/style.css');
    logo.setAttribute('src', './Assets/Fotos/gifOF_logo.png');
    favicon.setAttribute('href', './Assets/Fotos/gifOF_logo.png')
    tema.classList.toggle('day-night');
    selectTema = localStorage.setItem('theme', 'day')
})

function validatetheme() {
    let theme = localStorage.getItem('theme')

    if (theme == 'day') {
        linkTema.setAttribute('href', './Assets/style/style.css');
        logo.setAttribute('src', './Assets/Fotos/gifOF_logo.png');
        favicon.setAttribute('href', './Assets/Fotos/gifOF_logo.png')
    } else if (theme == 'night') {
        linkTema.setAttribute('href', './Assets/style/stylenigh.css')
        logo.setAttribute('src', './Assets/Fotos/gifOF_logo_dark.png');
        favicon.setAttribute('href', './Assets/Fotos/gifOF_logo_dark.png');
    } else {
        linkTema.setAttribute('href', './Assets/style/style.css');
        logo.setAttribute('src', './Assets/Fotos/gifOF_logo.png');
        favicon.setAttribute('href', './Assets/Fotos/gifOF_logo.png')
    }
}
validatetheme();