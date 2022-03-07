
function btnToUp(btnSelector, contsinerSelector) {
    const btn = document.querySelector(btnSelector);
    const container = document.querySelector(contsinerSelector);

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