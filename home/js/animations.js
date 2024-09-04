
const callback=(entries)=>{
    for(entry of entries){
        if (entry.isIntersecting) {
            entry.target.classList.add("animated")
        }
    }
}
const observer= new IntersectionObserver(callback, {rootMargin:"0px 10000px 0px 10000px"}   )

const animatedItems=document.querySelectorAll(".to_animate")
animatedItems.forEach((item)=>observer.observe(item))