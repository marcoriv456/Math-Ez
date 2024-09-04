export  default  function anim_init_tool_section(){

    function anim_init__common(){
        const callback=(entries)=> {
            for (let entry of entries) {
                if (entry.isIntersecting)
                    entry.target.classList.add("animated")
            }
        }
        const observer= new IntersectionObserver(callback, {rootMargin:"0px 10000px 0px 10000px"}   )
        const items=document.querySelectorAll("#tool-section .to_animate")
        items.forEach((item)=>observer.observe(item))
    }

    function anim_init__title_color_change(){
        const title=document.querySelector("#tool-section .title");

        const callback=(entries)=>{
            for(let entry of entries){
                const color=getComputedStyle(entry.target.querySelector(".panel")).getPropertyValue("--panel-theme-color");
                if (entry.isIntersecting)
                    title.style.backgroundColor=color
            }
        }

        const observer=new IntersectionObserver(callback,{threshold:.4});

        const items=document.querySelectorAll("#tool-section .panel-container")
        for(let container of items){
            observer.observe(container)
        }
    }

    anim_init__common()
    anim_init__title_color_change()
}




