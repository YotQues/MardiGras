export const gallery = window.onload = $(() => {

  /*  const vh = $(window).height() / 100;
   const vw = $(window).width() / 100; */

  const $img1 = $('.slide1 img');
  const $img2 = $('.slide2 img');
  const $img3 = $('.slide3 img');
  const $img4 = $('.slide4 img');
  const $img5 = $('.slide5 img');


  if ($(window).width() >= 992) {
    $img1.attr('src', './css/Images/gallery/AyaSalmanCorner(3).jpg')
    $img2.attr('src', './css/Images/gallery/Mathieu-ChezeNecklace(3).jpg')
    $img3.attr('src', './css/Images/gallery/philipstrongPhone(3).jpg')
    $img4.attr('src', './css/Images/gallery/pexelsHelenaJankovičováKováčová(3).jpg')
    $img5.attr('src', './css/Images/gallery/ThomasParkUmbrella(3).jpg')

  } else if ($(window).width() >= 768) {
    $img1.attr('src', './css/Images/gallery/AyaSalmanCorner(2).jpg')
    $img2.attr('src', './css/Images/gallery/Mathieu-ChezeNecklace(2).jpg')
    $img3.attr('src', './css/Images/gallery/philipstrongPhone(2).jpg')
    $img4.attr('src', './css/Images/gallery/pexelsHelenaJankovičováKováčová(2).jpg')
    $img5.attr('src', './css/Images/gallery/ThomasParkUmbrella(2).jpg')
  } else {
    $img1.attr('src', './css/Images/gallery/AyaSalmanCorner(1).jpg')
    $img2.attr('src', './css/Images/gallery/Mathieu-ChezeNecklace(1).jpg')
    $img3.attr('src', './css/Images/gallery/philipstrongPhone(1).jpg')
    $img4.attr('src', './css/Images/gallery/pexelsHelenaJankovičováKováčová(1).jpg')
    $img5.attr('src', './css/Images/gallery/ThomasParkUmbrella(1).jpg')

  };
});