// get nav 
let myNavBar = document.querySelector("header nav");
let imgsLight = document.querySelector("header nav .navbar-brand .img-white");
let imgsDark = document.querySelector("header nav .navbar-brand .img-dark");
let links = document.querySelectorAll("header nav .navbar-nav .nav-item .nav-link");
let Bars = document.querySelector("header nav .Bars");

window.onscroll = function(){
    if(window.scrollY > 50){

        // change background navBar 
        myNavBar.classList.add("bg-light");
        
        // change color of links 
        links.forEach((a)=>{
            a.classList.remove("text-light");
            a.classList.add("text-black-50");
        })
        
        // remove class hide form img dark 
        imgsDark.classList.remove("hide");
        
        // add class hide to img light 
        imgsLight.classList.add("hide");

        // change color bars 
            Bars.classList.remove("text-light");
            
        }else{
            
            // change background navBar 
            myNavBar.classList.remove("bg-light");
            
            // change color of links 
            links.forEach((a)=>{
                a.classList.remove("text-black-50");
                a.classList.add("text-light");
            })
            
            // remove class hide form img light 
            imgsLight.classList.remove("hide");
            
            // add class hide to img dark 
            imgsDark.classList.add("hide");
            
            // change color bars 
            Bars.classList.add("text-light");
    }
}