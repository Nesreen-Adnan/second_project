let overs = [...document.querySelectorAll(".over")],
    cog = document.querySelector(".cog"),
    cogIcon = document.querySelector(".cog .icon"),
    options = [...document.querySelectorAll(".cog .option")],
    filterImages = [...document.querySelectorAll(".filter")], 
    navbar = document.querySelector(".navbar"), 
    navLis = [...document.querySelectorAll(".navbar li")],
    landing = document.querySelector(".landing > .container"), 
    angleUp = document.querySelector(".angle-up"), 
    landingBackground = document.querySelector(".landing .background"),
    landingAnimation = document.querySelector(".landing .box.animation"),
    largeScreen = "992px",
    minHeight = "670px"
// start global function
navBack();
angleApear();
window.addEventListener("scroll", navBack);
function navBack() {
    if (window.scrollY >= (landing.offsetTop / 3)) {
        navbar.classList.add("background")
    } else {
        navbar.classList.remove("background")
    }
}
function showHide(show, hide) {
    show.onclick = (() => {
        show.classList.add("hide");
        hide.classList.remove("hide");
    })
    hide.onclick = (() => {
        hide.classList.add("hide");
        show.classList.remove("hide");
    })
}
function removeAllActive(siblings) {
    siblings.forEach((el) => {
        el.classList.remove("active");
    })
}	
// start over text
overs.forEach((over) => {
    let read = over.nextElementSibling;
    showHide(read, over);
})
// start options
cogIcon.onclick = (() =>  {
    cogIcon.children[0].classList.toggle("fa-spin");
    cog.classList.toggle("translate-x")
})
options.forEach((opt) => {
    let lis = [...opt.children];
    lis.forEach((li) => {
        if (opt.classList.contains("colors-opt")) {
            li.style.backgroundImage = `linear-gradient(to right, ${li.dataset.main} 0% 50%, ${li.dataset.color} 50%)`;
        }
        li.onclick = (() => {
            removeAllActive(lis);
            li.classList.add("active");
            if (opt.classList.contains("colors-opt")) {
                document.documentElement.style.setProperty("--mainColor", li.dataset.main);
                document.documentElement.style.setProperty("--secondaryColor", li.dataset.second);
                document.documentElement.style.setProperty("--mainColor-2", li.dataset.color);
                filterImages.forEach((img) => {
                    img.src = `images/${li.dataset.name}/${img.dataset.name}`;
                })
            }
            if (opt.classList.contains("nav-opt")) {
                if (li.textContent == "no") {
                    navbar.classList.remove("fixed");
                } else if (li.textContent == "yes") {
                    navbar.classList.add("fixed");
                }
            }
        })
    })
})
// start angle-up 
angleUp.onclick = (() => {
    window.scrollTo(0);
    if (window.scrollY == 0) {
        angleUp.classList.remove("active")
    }
})
window.addEventListener("scroll", angleApear);
function angleApear() {
    if (window.scrollY >= screen.availHeight) {
        if (screen.availHeight < 400) {
            angleUp.classList.add("active");
        } else if (window.scrollY >= screen.availHeight - 100) {
            angleUp.classList.add("active");
        }
    } else {
        angleUp.classList.remove("active");
    }
}
// start animation
landingAddAnimation();
function landingAddAnimation() {
    if (landingBackground.offsetHeight < screen.availHeight) {
        landingAnimation.classList.add("animate__animated", "animate__pulse", "wow")
    }
}
// hide navbar board
navLis.forEach((li) => {
    li.onclick = () => {
        if (window.innerWidth <= 991) {
            li.parentElement.parentElement.classList.remove("show");
        }
    }
})
















