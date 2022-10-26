function open_info_site() {
    var info_site_paragraph_container = document.getElementById('info_site_paragraph_container_identifier') 
    info_site_paragraph_container.getAttribute='class'
    info_site_paragraph_container.style.display ="block"
    info_site_paragraph_container.style.transition ="0.5s"
    setTimeout( function objetivo_site_sair() {
        info_site_paragraph_container.style.opacity= "1"  
        }, 300);
}

function close_info_site() {
    var info_site_paragraph_container = document.getElementById('info_site_paragraph_container_identifier') 
    info_site_paragraph_container.getAttribute='class'
    info_site_paragraph_container.style.opacity= "0" 
    setTimeout( function objetivo_site_sair() {
        info_site_paragraph_container.style.display =""
        }, 300);
}

function responsive_navbar() {
    var responsive_navbar = document.getElementById('responsive_navbar_identifier')
    if (responsive_navbar.className =='responsive_navbar_closed') {
        responsive_navbar.className = 'responsive_navbar_opened'
    } else {
        responsive_navbar.className = 'responsive_navbar_closed'
    }
}

function open_title_animation() {
    var title_animation = document.getElementById('title_identifier')
    title_animation.getAttribute='class'
    title_animation.className='title_hovering'

    setTimeout(function titleanimation () {
        title_animation.innerText ='j '
    }, 100);
    setTimeout(function titleanimation () {
        title_animation.innerText ='Ja'
    }, 120);
    setTimeout(function titleanimation () {
        title_animation.innerText ='Jav'
    }, 140);    
    setTimeout(function titleanimation () {
        title_animation.innerText ='Java '
    }, 160);
    setTimeout(function titleanimation () {
        title_animation.innerText ='Java S'
    }, 180);
    
    setTimeout(function titleanimation () {
        title_animation.innerText ='Java Sc'
    }, 200);
    
    setTimeout(function titleanimation () {
        title_animation.innerText ='Java Scri '
    }, 210);

    setTimeout(function titleanimation () {
        title_animation.innerText ='Java Scrip'
    }, 230);

    setTimeout(function titleanimation () {
        title_animation.innerText ='Java Script'
    },240);
}

function close_title_animation() {
    var title_animation = document.getElementById('title_identifier')

    title_animation.getAttribute='class'

    setTimeout(function()  {
        title_animation.innerText ='Js'
    setTimeout(function()  {
            title_animation.className='title'  
    }, 400); 

    }, 800);
}

window.addEventListener("scroll", function() {
    var header = document.getElementById('header_identfier')
    header.classList.toggle('header_scroling', window.scrollY > 150)
})