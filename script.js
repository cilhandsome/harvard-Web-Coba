// LOADING
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// NAVBAR EFFECT
window.addEventListener("scroll", () => {

    const navbar = document.querySelector("nav");

    if(!navbar) return;

    if(window.scrollY > 50){
        navbar.classList.add(
            "bg-black/90",
            "backdrop-blur-lg",
            "shadow-2xl"
        );
    }else{
        navbar.classList.remove(
            "bg-black/90",
            "backdrop-blur-lg",
            "shadow-2xl"
        );
    }
});

// SCROLL ANIMATION
const observer = new IntersectionObserver((entries)=>{
    
    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".hidden-section").forEach((el)=>{
    observer.observe(el);
});