const thumbnail = document.querySelectorAll(".project-tumbnail");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");
let logoSpan2 = document.querySelectorAll(".logo2");
let hamburgerMenu = document.querySelector(".hamburger");
let navBar = document.querySelector(".main-navbar");
let views = document.querySelectorAll(".view");
let allLinks = document.querySelectorAll(".link-btn");
let projectsPage = document.querySelector("#projects");
let homePage = document.querySelectorAll("#home");


for(i=0; i<thumbnail.length; i++){
    thumbnail[i].addEventListener('click', function(){
        popup.classList.toggle('active');
    })
}
//// thumbnail.addEventListener('click', function(){
////    popup.classList.toggle('active');
////});
////
close.addEventListener('click', function(){
    popup.classList.remove('active');
});
////
////for (i = 0; i<fabs.length; i++){
////   fabs[i].addEventListener('click', function(){
////                             this.classList.toggle('active')
////                             })
////}
//
//


window.addEventListener('DOMContentLoaded', ()=>{
    
    setTimeout(()=>{
        logoSpan.forEach((span, solo)=>{
        setTimeout(()=>{
            span.classList.add('active');
        }, (solo + 1) * 400)
    });
    
       
    
    setTimeout(()=>{
        logoSpan.forEach((span, solo)=>{
            setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fade');
            }, (solo + 1) * 50)
        })
    }, 1800);
        
        
   
        
    setTimeout(()=>{
        intro.style.top = '-100vh';
    }, 6500);
    })
    
});


window.addEventListener('DOMContentLoaded', ()=>{
    
    setTimeout(()=>{
        logoSpan2.forEach((span, idx)=>{
        setTimeout(()=>{
            span.classList.add('active');
        }, (idx + 1) * 2000)
    });
    
       
    
    setTimeout(()=>{
        logoSpan2.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50)
        })
    }, 5000);
        
    setTimeout(()=>{
        intro.style.top = '-100vh';
    }, 6500);
    })
    
});


hamburgerMenu.addEventListener('click', function(){
    navBar.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
    
});


for(let i = 0; i < allLinks.length; i++){
    allLinks[i].addEventListener('click',showView);
}

//for(let i = 0; i < allLinks.length; i++){
//    allLinks[i].addEventListener('click',function(){
//        navBar.classList.remove('active');
//});

function showView(e){
    e.preventDefault();
    for(let i=0; i < views.length; i++){
        views[i].style.display = "none";
    }
    let id = `#${this.getAttribute("href")}`;
    document.querySelector(id).style.display = "block";
    navBar.classList.remove('active');
    hamburgerMenu.classList.remove('active');
}