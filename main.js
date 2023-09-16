$(document).ready(function(){

    // For the Navbar to appear on Scroll
    $(window).scroll(function(){
        if(this.scrollY >200){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }

        // Scrolling Button Btn
        if(this.scrollY >500){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    });

    // Slide up Script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    var typed = new Typed(".typing-1",{
    strings:[
        "Student", "Designer", "Developer"
    ],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
    });

    var typed = new Typed(".typing-2",{
        strings:[
            "Student", "Designer", "Developer"
        ],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
        });
});

// function responsive_menu(){
//     var e = document.getElementById('menu-small');
//     if(e.className === 'menu'){
//         e.className += ' responsive';
//     }
//     else{
//         e.className = 'menu';
//     }
// }

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}