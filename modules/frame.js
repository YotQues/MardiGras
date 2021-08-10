export const frame = window.onload = $(() => {
  const $lCorner = document.querySelector('.topLeftCorner');
  const $rCorner = document.querySelector('.topRightCorner');

  /* --------------------------------- mobile --------------------------------- */

  /* ---------------------------- mobile variables ---------------------------- */

  const $mobNavUl = $('.mobNavUL');
  const $mobNavLi = document.querySelectorAll('.mobNavLI');
  const $drop = $('.dropDownMenu');

  const $hamburger = document.querySelector('.ham');

  const vh = $(window).height() / 100;
  const vw = $(window).width() / 100;
  const tWdXxs = vw - 60;

  /* -------------------------------- functions ------------------------------- */





  //mbile ham class toggle

  const hamClassToggle = () => {
    $hamburger.classList.toggle('hamShown');
    $hamburger.classList.toggle('hamCollapsed');
  };

  $hamburger.addEventListener('click', () => {
    $hamburger.classList.toggle('hamShown');
    $hamburger.classList.toggle('hamCollapsed');
  });

  $drop.on('click', () => {
    $hamburger.classList.toggle('hamShown');
    $hamburger.classList.toggle('hamCollapsed');
  });




  // corner class toggler

  const trnsfmCorners = () => {

    $lCorner.classList.toggle('notCollapsed');
    $lCorner.classList.toggle('isCollapsed');

    $rCorner.classList.toggle('notCollapsed');
    $rCorner.classList.toggle('isCollapsed');
  };

  /* ------------------------ general event listenters ------------------------ */

  // menu EventListeners

  $hamburger.addEventListener('hover', trnsfmCorners);
  $hamburger.addEventListener('click', trnsfmCorners);
  $hamburger.addEventListener('focus', trnsfmCorners);

  $drop.on('hover', trnsfmCorners);
  $drop.on('click', trnsfmCorners);
  $drop.on('focus', trnsfmCorners);


  $mobNavLi.forEach((event) => {
    event.addEventListener('hover', trnsfmCorners);
    event.addEventListener('click', trnsfmCorners);
    event.addEventListener('focus', trnsfmCorners);

    event.addEventListener('hover', hamClassToggle);
    event.addEventListener('click', hamClassToggle);
    event.addEventListener('focus', hamClassToggle);
  });
});