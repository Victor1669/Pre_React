const site = document.documentElement;

const btn1 = document.getElementById("btn1");

const ipt3 = document.getElementById("ipt3");
const btn2 = document.getElementById("show");

btn2.addEventListener("click", (button) => {
    if (btn2.hasAttribute("visivel", ``)) {
        
        btn2.removeAttribute("visivel", ``);
        btn2.setAttribute("invisivel", ``);

        ipt3.setAttribute("type", `password`);
    } else {
        btn2.removeAttribute("invisivel", ``);
        btn2.setAttribute("visivel", ``);

        ipt3.setAttribute("type", `text`);
    }

})

function mudaCor(){
    if (site.hasAttribute('dark')) {
        site.removeAttribute('dark', '');
        site.setAttribute('light', '');
        btn1.setAttribute("class", "btn btn-outline-dark");
    } else {
        site.removeAttribute('light', '');
        site.setAttribute('dark', '');
        btn1.setAttribute("class", "btn btn-outline-light");
    }
}