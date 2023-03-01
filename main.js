const thumbnail = document.querySelectorAll(".project-tumbnail");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");
let logoSpan2 = document.querySelectorAll(".logo2");


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
    
})
