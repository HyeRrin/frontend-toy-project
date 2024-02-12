// 스크롤바
let scrollTop = 0;
let progressbar = document.getElementsByClassName("progressbar")[0];

const calcHeight = () => {
  scrollTop = document.documentElement.scrollTop;

  let percentage = Math.ceil(
    (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
  );

  progressbar.style.width = percentage + "%";
};

window.addEventListener("scroll", calcHeight);

// 타이핑 효과
const $subtitle = document.querySelector(".subtitle-intro");
const content = `안녕하세요 👋`;
let contentIndex = 0;

const typingEffect = () => {
  $subtitle.innerHTML += content[contentIndex];
  contentIndex++;

  if (content[contentIndex] === "\n") {
    $subtitle.innerHTML += "<br />";
    contentIndex++;
  }

  if (contentIndex > content.length) {
    $subtitle.textContent = "";
    contentIndex = 0;
  }
};

// setInterval(typingEffect, 200);

// 이미지 슬라이드
let imgIndex = 0;
let position = 0;
const IMG_WIDTH = 438;
const $btnPrev = document.querySelector(".button-carousel-prev");
const $btnNext = document.querySelector(".button-carousel-next");
const $slideImgs = document.querySelector(".container-carousel-img ");

const prev = () => {
  if (imgIndex > 0) {
    $btnNext.removeAttribute("disabled");
    position += IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    imgIndex = imgIndex - 1;
  }

  if (imgIndex == 0) {
    $btnPrev.setAttribute("disabled", "true");
  }
};

const next = () => {
  if (imgIndex < 5) {
    $btnPrev.removeAttribute("disabled");
    position -= IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    $slideImgs.style.transition = "transform .5s ease-out";
    imgIndex = imgIndex + 1;
  }

  if (imgIndex == 4) {
    $btnNext.setAttribute("disabled", "true");
  }
};

$btnPrev.setAttribute("disabled", "true");
$btnPrev.addEventListener("click", prev);
$btnNext.addEventListener("click", next);

// 모달
const $modalBg = document.getElementsByClassName("container-modal");
const $btnOpen = document.getElementsByClassName("button-about");
const $btnClose = document.getElementsByClassName("button-about-close");

const modal = (num) => {
  $btnOpen[num].addEventListener("click", () => {
    $modalBg[num].style.display = "flex";
    document.body.style.overflow = "hidden";
  });
  $btnClose[num].addEventListener("click", () => {
    $modalBg[num].style.display = "none";
    document.body.style.overflow = "unset";
  });
};

for (let i = 0; i < $btnOpen.length; i++) {
  modal(i);
}

// 맨 위로 이동 버튼
const $btnToTop = document.querySelector(".button-totop");

const moveToTop = () => {
  document.body.scrollIntoView({ behavior: "smooth" });
};

$btnToTop.addEventListener("click", moveToTop);
