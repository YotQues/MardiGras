const sponsorQry = $(() => {

  if ($(window).width() < 768) {
    // console.log($('.card.smOnMob').length);
    let $card;
    $('.card.smOnMob').each((index) => {
      $card = $(`.card.smOnMob`);
      console.log($card)
      $card[index].onclick = () => {
        $('.lgCards').addClass('displayed');
        setTimeout(() => $(`.lgCards .card:nth-of-type(${index + 1})`).addClass('displayed'), 200);
        
        $(`.lgCards .card .escElement img`).on('click', () => {
          $(`.lgCards .card:nth-of-type(${index + 1})`).removeClass('displayed');
          setTimeout(() => $('.lgCards').removeClass('displayed'), 500);
          $(`.card .escElement:nth-of-type(${index + 1}) img`).off('click');
        });
      };
    });

  } else {
     for (let index = 0; index < $('.sponsorContain .card').length; index++)

       if ($('.lgCards').hasClass('displayed')) {
         console.log('hasClass');
         $(`.lgCards .card:nth-of-type(${index})`).removeClass('displayed');
         $(`.lgCards`).removeClass('displayed');
       };
  };

});

export default sponsorQry;