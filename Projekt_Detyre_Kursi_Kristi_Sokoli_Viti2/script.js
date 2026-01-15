const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 0);
})
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal ({
distance: '60px',
duration: 2500,
delay: 400,
reset : true

})
sr.reveal('.home-text', {delay:200, origin:'top'});
sr.reveal('.home-img',{delay:300, origin:'top'});
sr.reveal('.feature, .product, .cta-content, .contact', {delay:200, origin:'top'});
