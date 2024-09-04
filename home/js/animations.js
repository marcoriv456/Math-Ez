
const callback=(entries)=>{
    for(entry of entries){
        if (entry.isIntersecting) {
            entry.target.classList.add("animated")
        } else {
            entry.target.classList.remove("animated")
        }
    }
}
const observer= new IntersectionObserver(callback)

const animatedItems=document.querySelectorAll(".to_animate")
animatedItems.forEach((item)=>observer.observe(item))