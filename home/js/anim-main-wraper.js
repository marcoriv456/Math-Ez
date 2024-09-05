export default function anim_init_main_wraper(){
    const callback=(entries)=>{
        for (let entry of entries) {
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.style.opacity = "1";
                entry.target.style.transform="translateX(0)"
            }
            else{
                entry.target.style.opacity = "0";
                entry.target.style.transform="translateX(-50%)"

            }
        }
    }
    const observer= new IntersectionObserver(callback, {rootMargin:"-70% 10000px 0px 10000px"})

    const items=document.querySelectorAll("#main-wrapper> .to_animate")
    console.log(items)

    items.forEach(item=>observer.observe(item))
}