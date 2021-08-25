
// .hamburger
const hamburger = document.querySelector(".hamburger")

// .mainnav ul
const navList = document.querySelector(".mainnav ul")

hamburger.setAttribute("onclick", "showHamburger()")

const showHamburger = () => {
    if (hamburger.classList.contains("hamburger--open")) {
        hamburger.classList.remove("hamburger--open")
        navList.classList.remove(
            "navlist--open"
        )
    } else {
        {
            hamburger.classList.add("hamburger--open")
            navList.classList.add(
                "navlist--open"
            )
        }
    }
}











































/* Nytt för torsdag börjar här: 
const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".mainnav ul")

console.log(hamburger);
console.log(nav);

hamburger.setAttribute("onclick", "openHamburger()")

const openHamburger = () => {
    if (hamburger.classList.contains("hamburger--open")){
        hamburger.classList.remove("hamburger--open")
        nav.classList.remove("mainnav--open")
    } else {
        hamburger.classList.add("hamburger--open")
        nav.classList.add("mainnav--open")
    }
} /* */