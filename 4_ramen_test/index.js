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

// // 사용자의 선택을 저장하는 객체 초기화
// let userAnswers = {};

// // 퀴즈 질문에 대한 이벤트 리스너 설정
// function setupQuizEventListeners() {
//   document.querySelectorAll(".quiz-question-button").forEach(function (button) {
//     button.addEventListener("click", function () {
//       // 질문 ID와 선택된 점수 추출
//       const questionId = button.getAttribute("data-question");
//       const selectedScore = parseInt(button.getAttribute("data-score"));

//       // 사용자의 새로운 선택 처리
//       if (userAnswers[questionId] !== selectedScore) {
//         // 이전 선택 해제 및 새로운 선택 표시
//         updateSelections(questionId);
//         button.classList.add("clicked");

//         // 사용자 선택 업데이트
//         userAnswers[questionId] = selectedScore;
//       }
//     });
//   });
// }

// // 사용자가 버튼을 클릭했을 때 이전 선택을 해제하는 함수
// function updateSelections(questionId) {
//   const allAnswers = document.querySelectorAll(`.quiz-question-button[data-question="${questionId}"]`);
//   allAnswers.forEach(function (answer) {
//     answer.classList.remove("clicked");
//   });
// }

// // 결과 보기 버튼 이벤트 리스너 설정
// function setupResultButtonEventListener() {
//   const resultButton = document.querySelector(".result-button");

//   resultButton.addEventListener("click", function () {
//     // 모든 질문이 답변됐는지 확인
//     if (isAllQuestionsAnswered()) {
//       // 결과 페이지로 이동
//       showResults();
//     } else {
//       alert("모든 질문에 답해야 결과를 볼 수 있습니다.");
//     }
//   });
// }

// // 모든 질문에 답변되었는지 확인하는 함수
// function isAllQuestionsAnswered() {
//   const totalQuestions = document.querySelectorAll(".quiz-question-button[data-question]").length / 2;
//   return Object.keys(userAnswers).length === totalQuestions;
// }

// // 결과 페이지로 이동하는 함수
// function showResults() {
//   let totalScore = Object.values(userAnswers).reduce((acc, score) => acc + score, 0);
//   location.href = `result.html?score=${totalScore}`;
// }

// // 초기 설정 함수 실행
// setupQuizEventListeners();
// setupResultButtonEventListener();
