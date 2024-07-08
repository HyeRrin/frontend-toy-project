const $button_halfBoiled = document.querySelector("#halfBoiled");
const $button_fullyBoiled = document.querySelector("#fullyBoiled");
const $button_start = document.querySelector("#start");
const $button_reset = document.querySelector("#reset");
const $minute = document.querySelector("#minute");
const $second = document.querySelector("#second");

let setTime = 0;
let eggTimer;

const BUTTON_ORANGE = "#FFC132";
const BUTTON_GREEN = "#223173";

const calcTime = () => {
  $minute.textContent = Math.floor(setTime / (60 * 1000))
    .toString()
    .padStart(2, "0");
  $second.textContent = ((setTime % (60 * 1000)) / 1000)
    .toString()
    .padStart(2, "0");
};

const onClickHalfBoiledBtn = () => {
  $button_halfBoiled.style.backgroundColor = BUTTON_ORANGE;
  $button_fullyBoiled.style.backgroundColor = BUTTON_GREEN;
  setTime = 6 * 60 * 1000;
  calcTime();
};
const onClickFullyBoiledBtn = () => {
  $button_fullyBoiled.style.backgroundColor = BUTTON_ORANGE;
  $button_halfBoiled.style.backgroundColor = BUTTON_GREEN;
  setTime = 9 * 60 * 1000;
  calcTime();
};

// 시작/재시작/중지 버튼 클릭 시 실행되는 함수
const onClickStartBtn = () => {
  if (setTime === 0) {
    alert("반숙, 완숙 중 하나를 선택해주세요!");
    return;
  }

  if ($button_start.innerText === "시작") {
    $button_start.innerText = "중지";
    $button_start.style.backgroundColor = BUTTON_ORANGE;
    eggTimer = setInterval(() => {
      setTime -= 1000;
      calcTime();

      if (setTime === 0) {
        $button_start.innerText = "시작";
        $button_start.style.backgroundColor = BUTTON_GREEN;
        clearInterval(eggTimer);
      }
    }, 1000);
  } else {
    $button_start.innerText = "시작";
    $button_start.style.backgroundColor = BUTTON_GREEN;
    clearInterval(eggTimer);
  }
};

// 초기화 버튼 클릭 시 실행되는 함수
const onClickResetBtn = () => {
  clearInterval(eggTimer);
  setTime = 0;
  $minute.textContent = "00";
  $second.textContent = "00";
  $button_start.innerText = "시작";
  $button_start.style.backgroundColor = BUTTON_GREEN;
  $button_halfBoiled.style.backgroundColor = BUTTON_GREEN;
  $button_fullyBoiled.style.backgroundColor = BUTTON_GREEN;
};

$button_halfBoiled.addEventListener("click", onClickHalfBoiledBtn);
$button_fullyBoiled.addEventListener("click", onClickFullyBoiledBtn);

$button_start.addEventListener("click", onClickStartBtn);
$button_reset.addEventListener("click", onClickResetBtn);
