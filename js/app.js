const nav_slide = () =>{
    const burger = document.querySelector('#hamburger');
    const nav = document.querySelector('.nav-links');
    const nav_links = document.querySelectorAll('.navlinks li');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });
}
nav_slide();