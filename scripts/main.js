const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');
const todaysDate = new Date(document.lastModified);
const date = new Date();
const year = todaysDate.getFullYear();
const fullDate = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
}).format(date);


document.querySelector("#year").innerHTML = year;
document.getElementById("currentdate").innerHTML = todaysDate.toLocaleString('en-GB');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};