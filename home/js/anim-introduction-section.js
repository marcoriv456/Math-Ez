export  default  function anim_init_introduction_section(){
    console.log("importado")

    const callback=(entries)=>{
        for (let entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated")
            }
        }
    }
    const observer= new IntersectionObserver(callback, {rootMargin:"0px 10000px 0px 10000px"}   )

    const animatedItems=document.querySelectorAll("#introduction-section .to_animate")
    animatedItems.forEach((item)=>observer.observe(item))
}

