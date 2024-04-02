// 답변 버튼 클릭 이벤트
let userAnswers = {};
const answerButtons = document.querySelectorAll(".answer-button");

answerButtons.forEach((answerButton) => {
  answerButton.addEventListener("click", () => {
    // 질문 ID
    const questionId = answerButton.getAttribute("data-question");
    // 질문 ID에 해당되는 모든 답변 (총 2개)
    const answersForOneQuestion = document.querySelectorAll(
      `.answer-button[data-question="${questionId}"]`
    );
    // 사용자가 선택한 답변의 점수 (0점 or 1점)
    const selectedScore = parseInt(answerButton.getAttribute("data-score"));

    if (userAnswers[questionId] !== selectedScore) {
      // 선택한 답변 버튼의 스타일 조작
      answersForOneQuestion.forEach((answer) => {
        answer.classList.remove("clicked");
      });
      answerButton.classList.add("clicked");

      // 선택한 답변의 점수 저장
      userAnswers[questionId] = selectedScore;
    } else {
      alert("이미 선택된 답변입니다.");
    }
  });
});

// 결과 버튼 클릭 이벤트
const resultButton = document.querySelector(".result-button");

resultButton.addEventListener("click", () => {
  // 전체 질문의 개수
  const totalQuestions =
    document.querySelectorAll(".answer-button[data-question]").length / 2;
  // 답변을 마친 질문의 개수
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
