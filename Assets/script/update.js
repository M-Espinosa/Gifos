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