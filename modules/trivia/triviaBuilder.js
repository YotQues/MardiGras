const renderQuestions = (_app, _arr, _data) => {

  _app.innerHTML = `
  <div id="quizCard" class="mx-auto border rounded col-12 col-sm-6 col-lg-5 col-xl-4 bg-light">
      <form id="triviaForm" method="post" class="mt-3 "></form>
  </div>
   <div class="escRow">
     <div id="esc" class="escElement"><img src="./css/Images/vectorObjects/EscBtn.png" alt="Escape Button"></div>
  </div>`

  const quizCard = document.querySelector('#quizCard');
  const theForm = document.querySelector('#triviaForm');

  _data.forEach((_quest, _index, _ar) => {

    theForm.innerHTML += `
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

    _arr.push(document.querySelector(`#Q${_index + 1}${_quest.correctAnswer}`))

  });

  quizCard.innerHTML += `<div class= "my-2 text-center">
  <button id="submit" class="btn btn-success">Submit Quiz!</button>
    </div>`;
}

export default renderQuestions;