let userAnswers = {};

const setupQuizEventListeners = () => {
  document.querySelectorAll(".quiz-question-button").forEach(function (button) {
    button.addEventListener("click", function () {
      const questionId = button.getAttribute("data-question");
      const allAnswers = document.querySelectorAll(
        `.quiz-question-button[data-question="${questionId}"]`
      );
      const selectedScore = parseInt(button.getAttribute("data-score"));

      if (userAnswers[questionId] !== selectedScore) {
        allAnswers.forEach(function (answer) {
          answer.classList.remove("clicked");
        });
        button.classList.add("clicked");

        userAnswers[questionId] = selectedScore;

        console.log(`질문 ${questionId}에 대한 새로운 선택: ${selectedScore}`);
      }
    });
  });
};

setupQuizEventListeners();

const resultButton = document.querySelector(".result-button");

resultButton.addEventListener("click", () => {
  const totalQuestions =
    document.querySelectorAll(".quiz-question-button[data-question]").length /
    2;
  const answeredQuestions = Object.keys(userAnswers).length;

  if (answeredQuestions < totalQuestions) {
    alert("모든 질문에 답해야 결과를 볼 수 있습니다.");
  } else {
    let totalScore = 0;
    for (let questionId in userAnswers) {
      totalScore += userAnswers[questionId];
    }
    location.href = `result.html?score=${totalScore}`;
  }
});
