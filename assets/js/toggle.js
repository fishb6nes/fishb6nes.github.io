function setAppearance(mode) {
    sessionStorage.setItem('a', mode);
    mode = !mode ? 'auto' : mode;
    document.body.setAttribute('a', mode);
}

window.onload = function () {
    let configuredAppearance = sessionStorage.getItem('a');
    setAppearance(configuredAppearance);
}
