window.onload = afterClick;

function afterClick() {
    let linkClass = document.querySelectorAll(".navigation__link");
    linkClass.forEach((originalLink) =>
        originalLink.addEventListener("click", function () {
            let linkElems = document.querySelectorAll(".navigation__link");
            linkElems.forEach((linkElem)=>{
                if (linkElem.classList.contains("active")) {
                    linkElem.classList.remove("active");
                }
            });
            originalLink.classList.add("active");    
        })
    );
}