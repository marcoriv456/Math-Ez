export default function anim_init_tool_section(){
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
        items.forEach(item=>observer.observe(item))
    }

    anim_init__title_color_change()
}




