export default window.onload = function printTime() {
  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const nowDate = now.getDate();

  const endTime = (date, month) => {
    let endYear;
    if (nowMonth >= month && nowDate >= date) {
      endYear = nowYear + 1;
    } else {
      endYear = nowYear;
    }
    return new Date(`${month}/${date}/${endYear}`);
  }

  const elapsed = {
    ms() {
      return endTime(1, 3).getTime() - now.getTime();
    },
    secs() {
      return Math.floor((this.ms() / 60000 - Math.floor(this.ms() / 60000)) * 60);
    },
    mins() {
      return Math.floor((this.ms() / 3600000 - Math.floor(this.ms() / 3600000)) * 60);
    },
    hs() {
      return Math.floor((this.ms() / 86400000 - Math.floor(this.ms() / 86400000)) * 24);
    },
    days() {
      return Math.floor(this.ms() / 86400000);
    }
  };

  let secs;
  let mins;
  let hs;
  let days;

  if (elapsed.secs() < 10) {
    secs = `0${elapsed.secs()}`
  } else {
    secs = elapsed.secs()
  };

  if (elapsed.mins() < 10) {
    mins = `0${elapsed.mins()}`
  } else {
    mins = elapsed.mins()
  };

  if (elapsed.hs() < 10) {
    hs = `0${elapsed.hs()}`
  } else {
    hs = elapsed.hs()
  };

  if (elapsed.days() < 10) {
    days = `00${elapsed.days()}`
  } else if (elapsed.days() < 100) {
    days = `0${elapsed.days()}`
  } else {
    days = elapsed.days()
  };

  document.querySelector('.days .value').innerHTML = `<span>${days}</span>`;
  document.querySelector('.hours .value').innerHTML = `<span>${hs}</span>`;
  document.querySelector('.mins .value').innerHTML = `<span>${mins}</span>`;
  document.querySelector('.secs .value').innerHTML = `<span>${secs}</span>`;

  let inter = setTimeout(printTime, 1000);
};