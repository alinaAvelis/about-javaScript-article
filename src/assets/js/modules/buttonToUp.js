
function btnToUp() {
    const btn = document.querySelector(".btn_to_upp");
    const container = document.querySelector("body");

    function hideBtn(button) {
        button.classList.add('hide');
    }
   

    hideBtn(btn);

    window.addEventListener('scroll', () => {
          
        if(scrollY < 100) {
            hideBtn(btn);
        } else {
            btn.classList.remove('hide');
        }
      })


    btn.addEventListener("click", () => {
        container.scrollIntoView({block:"start", behavior: "smooth"});
    })
}

export default btnToUp;