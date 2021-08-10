export const result = {
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
      this.sub = "You are our King Rex! Don't forget ;that",
        this.rank = _num;
      this.bgc = "success";

    }
  }
}

export const renderResult = (_div, _obj) => {
  _div.innerHTML = `
  <div id="resultsContain">
    <div class="jumbotron bg-${_obj.bgc} text-light text-center">
      <h1 class="display-4">${_obj.header}</h1>
      <h5 class="lead mb-5">${_obj.sub}</h5>
      <button id="back" class="btn btn-dark btn-lg">Back to Website</button>
    </div>
  </div>`;
};
