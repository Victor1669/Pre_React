const site = document.documentElement;
function mudaCor(){
    if (site.hasAttribute('dark')) {
        site.removeAttribute('dark', '');
        site.setAttribute('light', '');
    } else {
        site.removeAttribute('light', '');
        site.setAttribute('dark', '');
    }
}