export default class TriviaClass {
  constructor(_quest, _ansA, _ansB, _ansC, _ansD, _correct) {
    this.question = _quest;
    this.answers = {
      a: _ansA,
      b: _ansB,
      c: _ansC,
      d: _ansD
    };
    this.correctAnswer = _correct
  }
}
