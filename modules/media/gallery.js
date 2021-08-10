export default window.onload = $(() => {

  let $imgs = $(`.galleryPicsSm .galItem`);

  $imgs.each((index) => {

    $imgs[index].onclick = () => {

      $('.galleryPicsLg').addClass('displayed');
      setTimeout(() => $(`.galItemLg.galItem${index + 1}`).addClass('displayed'), 200);

      if ($('.topRightCorner')[0].classList.contains('notScrolled')) {
        $('.topRightCorner')[0].classList.replace('notScrolled', 'isScrolled');
        $('.topLeftCorner')[0].classList.replace('notScrolled', 'isScrolled');
      };

      $(`.galleryPicsLg .galItemLg .escElement img`).on('click', () => {

        $(`.galItemLg.galItem${index + 1}`).removeClass('displayed');

        if ($('.topRightCorner')[0].classList.contains('isScrolled')) {
          $('.topRightCorner')[0].classList.replace('isScrolled', 'notScrolled');
          $('.topLeftCorner')[0].classList.replace('isScrolled', 'notScrolled');
        }

        setTimeout(() => $('.galleryPicsLg').removeClass('displayed'), 500);

        $(`.galItemLg .escElement:nth-of-type(${index + 1}) img`).off('click');
      });
    };
  });

});

// export default gallery;

/*  if ($('.topRightCorner')[0].classList.contains('notScrolled')) {
        $('.topRightCorner')[0].classList.replace('notScrolled', 'isScrolled');
        $('.topLeftCorner')[0].classList.replace('notScrolled', 'isScrolled');
      }; */
/* if ($('.topRightCorner')[0].classList.contains('isScrolled')) {
           $('.topRightCorner')[0].classList.replace('isScrolled', 'notScrolled');
           $('.topLeftCorner')[0].classList.replace('isScrolled', 'notScrolled');
         }; */