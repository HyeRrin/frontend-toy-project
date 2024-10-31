const $button_halfBoiled = document.getElementById("halfBoiled");
const $button_fullyBoiled = document.getElementById("fullyBoiled");
const $minute = document.getElementById("minute");
const $second = document.getElementById("second");
const $button_start = document.getElementById("start");
const $button_reset = document.getElementById("reset");

let setTime = 0;
let eggTimer;

const BUTTON_ORANGE = "#FFC132";
const BUTTON_GREEN = "#223173";

const calcTime = () => {
  $minute.textContent = Math.floor(setTime / (60 * 1000))
    .toString()
    .padStart(2, "0");
  $second.textContent = Math.floor((setTime % (60 * 1000)) / 1000)
    .toString()
    .padStart(2, "0");
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

$button_halfBoiled.addEventListener("click", () => {
  $button_halfBoiled.style.backgroundColor = BUTTON_ORANGE;
  $button_fullyBoiled.style.backgroundColor = BUTTON_GREEN;
  setTime = 6 * 60 * 1000;
  calcTime();
});

$button_fullyBoiled.addEventListener("click", () => {
  $button_fullyBoiled.style.backgroundColor = BUTTON_ORANGE;
  $button_halfBoiled.style.backgroundColor = BUTTON_GREEN;
  setTime = 9 * 60 * 1000;
  calcTime();
});

$button_start.addEventListener("click", onClickStartBtn);
$button_reset.addEventListener("click", onClickResetBtn);
