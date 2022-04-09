let switcherLis = document.querySelectorAll(".switcher li");
let switcher = document.querySelector(".switcher");
let btn = document.querySelector(".btn");
let imgs = Array.from(document.images);
let callOne = true;

//  the gallery filter
btn.onclick = () => {
  toggleFct();
};
// function that shows the list of categories
function displaySwitcherList() {
  switcher.style.opacity = 1;
  callOne = false;
  btn.innerText = "hide filter";
}
// function that hides the list of categories
function hideSwitcgerList() {
  switcher.style.opacity = 0;
  btn.innerText = "filter";
  callOne = true;
}
// function that toggle between showing and hiding the categories list
function toggleFct() {
  callOne ? displaySwitcherList() : hideSwitcgerList();
}

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// Manage Imgs
function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
