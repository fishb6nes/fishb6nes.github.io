let systemAppearanceDark = window.matchMedia('(prefers-color-scheme: dark)');
let configuredAppearance = sessionStorage.getItem('appearance');

function setAppearance(mode) {
    sessionStorage.setItem('appearance', mode);
    if (!mode) {
        mode = systemAppearanceDark.matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-appearance', mode);
}

function onSystemAppearanceChange(systemAppearanceDark) {
    let configuredAppearance = sessionStorage.getItem('theme');
    if (!configuredAppearance) {
        let mode = systemAppearanceDark.matches ? 'dark' : 'light';
        setAppearance(mode);
    }
}
systemAppearanceDark.addListener(onSystemAppearanceChange);

setAppearance(configuredAppearance);
