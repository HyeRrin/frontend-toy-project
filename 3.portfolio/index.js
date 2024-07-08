// 스크롤 진행바
const progressbar = document.querySelector(".progressbar");

const calculateScrollDistance = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  const scrolledPercentage = Math.ceil(
    (scrollTop / (scrollHeight - clientHeight)) * 100
  );

  progressbar.style.width = `${scrolledPercentage}%`;
};

// let scrollAnimationFrame;

// const handleScrollEvent = () => {
//   window.cancelAnimationFrame(scrollAnimationFrame);
//   scrollAnimationFrame = window.requestAnimationFrame(calculateScrollDistance);
// };

// window.addEventListener("scroll", handleScrollEvent);
window.addEventListener("scroll", calculateScrollDistance);

// 이미지 슬라이드
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");
const imageAlbum = document.querySelector(".carousel-images");

let imgIndex = 0;

const moveToPrevImage = () => {
  if (imgIndex > 0) {
    imgIndex -= 1;
    imageAlbum.style.transform = `translateX(${-imgIndex * 438}px)`;
  }
};

const moveToNextImage = () => {
  if (imgIndex < 4) {
    imgIndex += 1;
    imageAlbum.style.transform = `translateX(${-imgIndex * 438}px)`;
  }
};

prevButton.addEventListener("click", moveToPrevImage);
nextButton.addEventListener("click", moveToNextImage);

// 모달
const modalContainers = document.querySelectorAll(".modal-container");
const openButtons = document.querySelectorAll(".about-button");
const closeButtons = document.querySelectorAll(".modal-close-button");

const toggleModal = (index, isOpen) => {
  modalContainers[index].style.display = isOpen ? "flex" : "none";
  document.body.style.overflow = isOpen ? "hidden" : "unset";
};

console.log(modalContainers);

openButtons[0].addEventListener("click", () => toggleModal(0, true));
openButtons[1].addEventListener("click", () => toggleModal(1, true));
// for (let i = 0; i < openButtons.length; i++) {
//   openButtons[i].addEventListener("click", function() {
//     toggleModal(i, true);
//   });
// }

closeButtons[0].addEventListener("click", () => toggleModal(0, false));
closeButtons[1].addEventListener("click", () => toggleModal(1, false));
// for (let i = 0; i < closeButtons.length; i += 1) {
//   closeButtons[i].addEventListener("click", function () {
//     toggleModal(i, false);
//   });
// }

// 맨 위로 이동 버튼
// const $btnToTop = document.querySelector(".button-totop");

// const moveToTop = () => {
//   document.body.scrollIntoView({ behavior: "smooth" });
// };

// $btnToTop.addEventListener("click", moveToTop);
