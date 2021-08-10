const showResult = () => {

  const answerContainers = quizApp.querySelectorAll('.answers');

  triviaQuestions.forEach((_quest, _index) => {
    const answerContainer = answerContainers[_index];
    const selector = `input[name="Q${_index + 1}"]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    console.log(_quest.correctAnswer)
    if (userAnswer !== _quest.correctAnswer) {
      currentRank -= 10;
    }
  })

  result.ranker(currentRank);
  renderResult(quizCard, result);

  click.backBtnHndlr()

}

export default showResult;