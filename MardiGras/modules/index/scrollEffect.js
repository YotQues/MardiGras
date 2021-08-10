const scrollEffect = window.scrollEffect = $(() => {
  const $lCorner = document.querySelector('.topLeftCorner');
  const $rCorner = document.querySelector('.topRightCorner');

  const vh = $(window).height() / 100;
  const vw = $(window).width() / 100;
  const tWdXxs = vw - 60;

  $(window).on('scroll', () => {
    if ($(window).width() >= 1200 && $(window).scrollTop() >= ($(window).height())) {
      $lCorner.classList.replace('notScrolled', 'isScrolled');
      $rCorner.classList.replace('notScrolled', 'isScrolled');
    } else if ($(window).width() >= 992 && $(window).scrollTop() >= (vh * 44)) {
      $lCorner.classList.replace('notScrolled', 'isScrolled');
      $rCorner.classList.replace('notScrolled', 'isScrolled');
    } else if ($(window).width() >= 768 && $(window).scrollTop() >= (vh * 44)) {
      $lCorner.classList.replace('notScrolled', 'isScrolled');
      $rCorner.classList.replace('notScrolled', 'isScrolled');
    } else if ($(window).width() >= 375 && $(window).scrollTop() >= (vh * 40 - 165)) {
      $lCorner.classList.replace('notScrolled', 'isScrolled');
      $rCorner.classList.replace('notScrolled', 'isScrolled');
    } else if ($(window).width() <= 374 && $(window).scrollTop() > 0 && $(window).scrollTop() > tWdXxs * 20 / 9 - 165) {
      $lCorner.classList.replace('notScrolled', 'isScrolled');
      $rCorner.classList.replace('notScrolled', 'isScrolled');
    } else {
      $lCorner.classList.replace('isScrolled', 'notScrolled');
      $rCorner.classList.replace('isScrolled', 'notScrolled');
    };
  });
});

export default scrollEffect;