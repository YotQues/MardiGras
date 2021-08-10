class Handlers {
  constructor(_starter) {

    this.activateQuiz = (_app) => {
      _starter.onclick = () => _app.classList.replace('inactive', 'active');
    }
    this.quitQuiz = (_app) => {
      _starter.onclick = () => _app.classList.replace('active', 'inactive');
    }

    // this.backBtnHndlr = () => {
    //   document.querySelector('#back').onclick = () => {

    //   }
    // }
  }
};

export default Handlers;




