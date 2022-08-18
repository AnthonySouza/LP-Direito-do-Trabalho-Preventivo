const navbar = document.querySelector("#lp_navbar");
const header = document.querySelector("#lp_init__section");

//const forest = document.querySelector(".forest");
const silhouette = document.querySelector(".lp_face__container");
let forestInitPos = -300;

window.onscroll = () => {
  let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

  

  if (scrollPos - 100 <= window.innerHeight)
    header.style.visibility = header.style.visibility === "hidden" && "visible";
  else header.style.visibility = "hidden";

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
