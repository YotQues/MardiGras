import { triviaQuestions } from './triviaQuestions.js';


export default window.onload = async () => {
  body.innerHTML += `<div id="quiz" class="inactive"></div>`;

  const quizApp = document.querySelector('#quiz');
  const activate = document.querySelector("#triviaActivate");

  let crtAns = [];

  let currentRank = 100;

  renderQuestions(quizApp, crtAns, triviaQuestions, currentRank);

  let quizForm = document.querySelector('#triviaForm')

  activateQuiz(quizApp, activate);

}


const renderQuestions = (_app, _arr, _data, _num) => {

  _app.innerHTML = `
  <div id="quizCard" class="mx-auto border rounded col-12 col-sm-6 col-lg-5 col-xl-4 bg-light">
      <form id="triviaForm" method="post" class="mt-3 "></form>
  </div>
   <div class="escRow">
     <div id="esc" class="escElement"><img src="./css/Images/vectorObjects/EscBtn.png" alt="Escape Button"></div>
  </div>`;

  const quizCard = document.querySelector('#quizCard');
  const quizForm = document.querySelector('#triviaForm');

  _data.forEach((_quest, _index, _ar) => {

    quizForm.innerHTML += `
      <div id="Q${_index + 1}" class="form-group border-bottom pb-4">
      <h4 class="mb-3">${_index + 1}. ${_quest.question} </h4>
      <ul class="answers list-group list-unstyled mt-2">
        <li class="list-group-item">
          <label for="Q${_index + 1}A"
            class="mb-0 ml-2"><input type="radio" name="Q${_index + 1}" id="Q${_index + 1}A" value="A"> A : ${_quest.answers.a}</label>
        </li>
        <li class="list-group-item">
          <label for="Q${_index + 1}B"
            class="mb-0 ml-2"><input type="radio" name="Q${_index + 1}" id="Q${_index + 1}B" value="B"> B : ${_quest.answers.b}</label>
        </li>
        <li class="list-group-item">
          <label for="Q${_index + 1}C"
            class="mb-0 ml-2"><input type="radio" name="Q${_index + 1}" id="Q${_index + 1}C" value="C"> C : ${_quest.answers.c}</label>
        </li>
        <li class="list-group-item">
          <label for="Q${_index + 1}D"
            class="mb-0 ml-2"><input type="radio" name="Q${_index + 1}" id="Q${_index + 1}D" value="D"> D : ${_quest.answers.d}</label>
        </li>
      </ul>
    </div>`;

    _arr.push(document.querySelector(`#Q${_index + 1}${_quest.correctAnswer}`));

  });

  quizCard.innerHTML += `<div class= "my-2 text-center">
  <button id="submit" class="btn btn-success">Submit Quiz!</button>
  </div>`;

  const esc = document.querySelector("#quiz #esc");
  esc.addEventListener("click", () => {
    _app.classList.replace('active', 'inactive');
    _app.innerHTML = '';
    renderQuestions(_app, _arr, _data);
  })

  const subQuiz = document.querySelector('#submit');
  showResult(subQuiz, _app, _data, _num, _arr);
};


const showResult = (_btn, _app, _data, _num, _arr) => {

  _btn.onclick = () => {
    const answerContainers = _app.querySelectorAll('.answers');

    _data.forEach((_quest, _index) => {
      const answerContainer = answerContainers[_index];
      const selector = `input[name="Q${_index + 1}"]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer !== _quest.correctAnswer) {
        _num -= 10;
      }
    })

    result.ranker(_num);
    renderResult(quizCard, result, _num,);
    let back = document.querySelector('#back')
    backBtnHandler(_app, back, _arr, _data)
  }
  _num = 100;

};

const result = {
  ranker(_num) {
    if (_num < 50) {

      this.header = 'Awwww You Failed...';
      this.sub = "Try again next Time!";
      this.rank = _num;
      this.bgc = "danger";

    } else if (_num < 70) {

      this.header = "Passed by a Notch!";
      this.sub = "You can do better!";
      this.rank = _num;
      this.bgc = "warning";

    } else if (_num < 80) {

      this.header = "Ok, Cool!";
      this.sub = "You know stuff don't you..";
      this.rank = _num;
      this.bgc = "info";

    } else if (_num < 90) {

      this.header = "Not Bad!";
      this.sub = "You know the materia mon ami";
      this.rank = _num;
      this.bgc = "info";

    } else if (_num < 100) {

      this.header = "Very Good!";
      this.sub = "How many Goolges did you do??";
      this.rank = _num;
      this.bgc = "success";

    } else if (_num = 100) {

      this.header = "Douze Points!! (Actually 100)";
      this.sub = "You are our King Rex! Don't forget ;that";
      this.rank = _num;
      this.bgc = "success";

    }
  }
};

const renderResult = (_div, _obj, _score) => {
  _div.innerHTML = `
  <div id="resultsContain">
    <div class="jumbotron bg-${_obj.bgc} text-light text-center w-100">
      <h1 class="display-4">${_obj.header}</h1>
      <h5 class="lead mb-5">${_obj.sub}</h5>
      <h5 class="lead mb-5">Score: ${_score}</h5>
      <button id="back" class="btn btn-dark btn-lg">Back to Website</button>
    </div>
  </div>`;
};

const activateQuiz = (_app, _starter) => {
  _starter.onclick = () => {
    _app.classList.replace('inactive', 'active');
  }
}

const backBtnHandler = (_app, _btn, _arr, _data) => {
  _btn.addEventListener("click", () => {
    _app.classList.replace('active', 'inactive');
    _app.innerHTML = '';
    renderQuestions(_app, _arr, _data);
  })
}