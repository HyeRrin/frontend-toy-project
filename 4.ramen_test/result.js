document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const score = parseInt(params.get("score"), 10);
  const resultTitle = document.querySelector(".quiz-result-title");
  const resultDetail = document.querySelector(".quiz-description-text");

  if (!isNaN(score)) {
    if (score <= 2) {
      resultTitle.innerHTML = `#찐라면 순한맛<br />#안상탕면👼🏻`;
      resultDetail.innerHTML = ` 👼🏻지금 하고 싶은 것, 현재의 행복을 중요하게 생각하는 당신! 나를 위해
      어디든 떠나 새로운 것에 도전할 준비가 되어있어요. 특히 내가 좋아하는
      일에는 누구보다 열정적인 혁신가에요.<br /><br />
      지금 하고 싶은 것, 현재의 행복을 중요하게 생각하는 당신! 나를 위해
      어디든 떠나 새로운 것에 도전할 준비가 되어있어요. 특히 내가 좋아하는
      일에는 누구보다 열정적인 혁신가에요.<br /><br />
      지금 하고 싶은 것, 현재의 행복을 중요하게 생각하는 당신! 나를 위해
      어디든 떠나 새로운 것에 도전할 준비가 되어있어요. 특히 내가 좋아하는
      일에는 누구보다 열정적인 혁신가에요.`;
    } else if (score <= 3) {
      resultTitle.innerHTML = `#너굴이<br />#푸라면🔥`;
      resultDetail.innerHTML = ` 🔥지금 하고 싶은 것, 현재의 행복을 중요하게 생각하는 당신! 나를 위해
      어디든 떠나 새로운 것에 도전할 준비가 되어있어요. 특히 내가 좋아하는
      일에는 누구보다 열정적인 혁신가에요.<br /><br />
      지금 하고 싶은 것, 현재의 행복을 중요하게 생각하는 당신! 나를 위해
      어디든 떠나 새로운 것에 도전할 준비가 되어있어요. 특히 내가 좋아하는
      일에는 누구보다 열정적인 혁신가에요.<br /><br />
      지금 하고 싶은 것, 현재의 행복을 중요하게 생각하는 당신! 나를 위해
      어디든 떠나 새로운 것에 도전할 준비가 되어있어요. 특히 내가 좋아하는
      일에는 누구보다 열정적인 혁신가에요.`;
    } else {
      resultTitle.innerHTML = `#불닥볶음면<br />#틈쇠라면🌶️`;
      resultDetail.innerHTML = ` 🌶️지금 하고 싶은 것, 현재의 행복을 중요하게 생각하는 당신! 나를 위해
      어디든 떠나 새로운 것에 도전할 준비가 되어있어요. 특히 내가 좋아하는
      일에는 누구보다 열정적인 혁신가에요.<br /><br />
      지금 하고 싶은 것, 현재의 행복을 중요하게 생각하는 당신! 나를 위해
      어디든 떠나 새로운 것에 도전할 준비가 되어있어요. 특히 내가 좋아하는
      일에는 누구보다 열정적인 혁신가에요.<br /><br />
      지금 하고 싶은 것, 현재의 행복을 중요하게 생각하는 당신! 나를 위해
      어디든 떠나 새로운 것에 도전할 준비가 되어있어요. 특히 내가 좋아하는
      일에는 누구보다 열정적인 혁신가에요.`;
    }
  }
});

const restartButton = document.querySelector(".restart-button");

restartButton.addEventListener("click", () => {
  location.href = `index.html`;
});
