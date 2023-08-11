const d = document, w = window;
export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener("scroll", e=>{

        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if(scrollTop > 800){
            $scrollBtn.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        }
        // console.log(w.pageYOffset);
    });

    d.addEventListener("click", e=>{

        if(e.target.matches(btn)){
            w.pageYOffset = 0;
            w.scrollTo({
                behavior: "smooth",
                top: 0
            });
        }
    })



}
