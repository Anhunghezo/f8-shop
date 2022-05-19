console.log("hello world!");

const $ = document.querySelector.bind(document);

// Action like
let likeElement = $(".home-product-item__like");
likeElement.onclick = function () {
  if (this.classList.contains("home-product-item__like--liked")) {
    this.classList.remove("home-product-item__like--liked");
  } else {
    this.classList.add("home-product-item__like--liked");
  }
};
