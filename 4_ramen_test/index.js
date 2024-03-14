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

        calculateAndShowScore();
      }
    });
  });
};

const calculateAndShowScore = () => {
  let totalScore = 0;

  for (let questionId in userAnswers) {
    totalScore += userAnswers[questionId];
  }

  console.log(`현재 사용자 점수: ${totalScore}`);
};

setupQuizEventListeners();
