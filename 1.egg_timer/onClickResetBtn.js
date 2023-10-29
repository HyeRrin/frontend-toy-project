// 초기화 버튼 클릭 시 실행되는 함수
const onClickResetBtn = () => {
  clearInterval(eggTimer);
  const zero = 0;
  $minute.textContent = "00";
  $second.textContent = "00";
  $button_start.innerText = "시작";
  $button_start.style.backgroundColor = BUTTON_GREEN;
  $button_halfBoiled.style.backgroundColor = BUTTON_GREEN;
  $button_fullyBoiled.style.backgroundColor = BUTTON_GREEN;
};
