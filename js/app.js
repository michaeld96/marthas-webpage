const nav_slide = () =>{
    const burger = document.querySelector('#hamburger');
    const nav = document.querySelector('.nav-links');
    const nav_links = document.querySelectorAll('.navlinks li');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });
    // nav_links.forEach((link,index) =>
    //     {
    //         link.style.animation = 'nav_link_fase 0.5s ease forward ${index/7}s';
    //     });
}
nav_slide();

// console.log('Click');