const navbar = document.querySelector("#lp_navbar");
const header = document.querySelector("#lp_init__section");
const top_button = document.querySelector(".btn_top");

top_button.style.visibility = "hidden";

//const forest = document.querySelector(".forest");
const silhouette = document.querySelector(".lp_face__container");
let forestInitPos = -300;

window.onscroll = () => {
  let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

  

  if (scrollPos - 100 <= window.innerHeight) {

    top_button.style.visibility = "hidden";

  } else {

    top_button.style.visibility = "visible";

  }

  if (scrollPos + 100 >= window.innerHeight) navbar.classList.add("nav__active");
  else navbar.classList.remove("nav__active");
};

(function navSmoothScrolling() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  for (let i in internalLinks) {
    if (internalLinks.hasOwnProperty(i)) {
      internalLinks[i].addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(internalLinks[i].hash).scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      });
    }
  }
})();
