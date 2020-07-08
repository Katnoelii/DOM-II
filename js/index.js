// Your code goes here
//Add 10 selectors to manipulate
const header = document.querySelector('.main-navigation');
const aLinks = document.querySelectorAll('.nav-link');
const funBus = document.querySelector('.intro img');
const title = document.querySelector('.intro h2');
const letsGo = document.querySelector('.img-content img');
const adventure = document.querySelector('.inverse-content .img-content');
const advText = document.querySelector('.content-section .text-content');
const fun = document.querySelector('.inverse-content .text-content');
// const button = document.querySelectorAll('.btn');
const footer = document.querySelector('footer');

//Event Listeners below:

//changes background header blue upon hover
header.addEventListener('mouseover', (e) => {
    header.style.backgroundColor = "orange";
    header.style.color = "yellow";
    e.stopPropagation();
});

//Reverts back when mouse leaves 
header.addEventListener('mouseleave', (e) => {
    header.style.backgroundColor = "white";
    header.style.color = "black";
    e.stopPropagation();
});

//Changes nav Link color when clicked
aLinks.forEach((link) => {
    link.addEventListener('click',(e) => {
        link.style.color = 'purple';
        e.preventDefault();
        e.stopPropagation();
    })
})

//Removes bus image on dbl click
funBus.addEventListener('dblclick', (e) => {
    funBus.style.display = "none"
    e.stopPropagation();
})

//changes welcome color upon scroll
document.addEventListener('scroll', () => {
    title.style.color = "orange";
    title.style.textDecoration = "underline"
});


//hitting any key strikes through footer dd
document.addEventListener('keydown', () => {
    footer.style.textDecoration = "line-through";
});

//lifting key back up removes strike
document.addEventListener('keyup', () => {
    footer.style.textDecoration = "none"
});

//copying anything in "Adventure Awaits" changes the whole font
fun.addEventListener('copy', () => {
    fun.style.fontFamily = "Verdana";
});

//adds border to destination image on wheel scroll
document.addEventListener('wheel',()=> {
    letsGo.style.border = "3px dotted orange";
});

//dragging removes the adventure image!
adventure.addEventListener('drag', () =>{
    adventure.style.display = "none";
    advText.style.width = "100%";


});

//ended up not changing buttons.