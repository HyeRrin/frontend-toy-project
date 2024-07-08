const $input_container = document.querySelector(".container-input");
const $input_date = document.querySelector("#input-date");
const $input_name_me = document.querySelector("#input-name-me");
const $input_name_partner = document.querySelector("#input-name-partner");
const $button_calc = document.querySelector(".button-calc");

const $result_container = document.querySelector(".container-result");
const $result_name_me = document.querySelector("#result-name-me");
const $result_name_partner = document.querySelector("#result-name-partner");
const $result_dday = document.querySelector("#result-dday");
const $result_firstday = document.querySelector("#result-firstday");
const $btn_refresh = document.querySelector("#btn-refresh");

const calculateDate = () => {
  if (
    !$input_date.value.length ||
    !$input_name_me.value ||
    !$input_name_partner.value
  ) {
    alert("입력란을 모두 채워주세요!");
  } else {
    const today = new Date().getTime();
    const inputDay = new Date($input_date.value).getTime();
    const day = 1000 * 60 * 60 * 24;

    $result_dday.innerText = Math.round((today - inputDay) / day);

    $input_container.style.display = "none";
    $result_container.style.display = "block";

    $result_name_me.innerText = $input_name_me.value;
    $result_name_partner.innerText = $input_name_partner.value;
    $result_firstday.innerText = $input_date.value;
  }
};

const refreshDate = () => {
  $input_container.style.display = "block";
  $result_container.style.display = "none";

  $input_name_me.value = "";
  $input_name_partner.value = "";
  $input_date.value = "";
};

$button_calc.addEventListener("click", calculateDate);
$btn_refresh.addEventListener("click", refreshDate);
