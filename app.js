//Dynamic Header
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    header.style.backgroundColor = "powderblue";
  } else {
    header.style.backgroundColor = "ghostwhite";
  }
});
