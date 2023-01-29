const backgroundImgList = [
  "background-img1.jpg",
  "background-img2.jpg",
  "background-img3.jpg",
];

const body = document.querySelector("body");

const foreground = document.querySelector(".foreground");

const randomSelect = Math.floor(Math.random() * backgroundImgList.length);
const backgroundImg = backgroundImgList[randomSelect];

const background_wrapper = document.createElement("div");

body.style.backgroundImage = `url(img/${backgroundImg})`;
