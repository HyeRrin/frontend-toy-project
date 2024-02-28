// 스크롤바
const progressbar = document.querySelector(".progressbar");

const calcHeight = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  const scrolledPercentage = Math.ceil(
    (scrollTop / (scrollHeight - clientHeight)) * 100
  );

  progressbar.style.width = `${scrolledPercentage}%`;
};

let scrollAnimationFrame;

const handleScrollEvent = () => {
  window.cancelAnimationFrame(scrollAnimationFrame);
  scrollAnimationFrame = window.requestAnimationFrame(calcHeight);
};

window.addEventListener("scroll", handleScrollEvent);

// 이미지 슬라이드
let imgIndex = 0;
const IMG_WIDTH = 438;
const totalImages = 5;
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");
const imageAlbum = document.querySelector(".carousel-images");

const updateCarouselPosition = () => {
  imageAlbum.style.transform = `translateX(${-imgIndex * IMG_WIDTH}px)`;
  imageAlbum.style.transition = "transform .5s ease-out";
};

const updateButtonStates = () => {
  prevButton.disabled = imgIndex === 0;
  nextButton.disabled = imgIndex === totalImages - 1;
};

const moveToPrevImage = () => {
  if (imgIndex > 0) {
    imgIndex -= 1;
    updateCarouselPosition();
    updateButtonStates();
  }
};

const moveToNextImage = () => {
  if (imgIndex < totalImages - 1) {
    imgIndex += 1;
    updateCarouselPosition();
    updateButtonStates();
  }
};

prevButton.addEventListener("click", moveToPrevImage);
nextButton.addEventListener("click", moveToNextImage);

updateButtonStates();

// 모달
const modalContainers = document.querySelectorAll(".modal-container");
const openButtons = document.querySelectorAll(".about-button");
const closeButtons = document.querySelectorAll(".modal-close-button");

const toggleModal = (index, isOpen) => {
  modalContainers[index].style.display = isOpen ? "flex" : "none";
  document.body.style.overflow = isOpen ? "hidden" : "unset";
};

openButtons.forEach((button, index) => {
  button.addEventListener("click", () => toggleModal(index, true));
});

closeButtons.forEach((button, index) => {
  button.addEventListener("click", () => toggleModal(index, false));
});

// 맨 위로 이동 버튼
const $btnToTop = document.querySelector(".button-totop");

const moveToTop = () => {
  document.body.scrollIntoView({ behavior: "smooth" });
};

$btnToTop.addEventListener("click", moveToTop);
