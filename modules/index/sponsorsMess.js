const sponsorQry = $(() => {




  if ($(window).width() < 768) {
    const $card1 = $('.sponsorContain .card:nth-of-type(1)'),
      $card2 = $('.sponsorContain .card:nth-of-type(2)'),
      $card3 = $('.sponsorContain .card:nth-of-type(3)'),
      $card4 = $('.sponsorContain .card:nth-of-type(4)'),
      $card5 = $('.sponsorContain .card:nth-of-type(5)'),
      $card6 = $('.sponsorContain .card:nth-of-type(6)');

    const $contain = $('.lgCards');

    const $lgCard1 = $('.lgCards .card:nth-of-type(1)'),
      $lgCard2 = $('.lgCards .card:nth-of-type(2)'),
      $lgCard3 = $('.lgCards .card:nth-of-type(3)'),
      $lgCard4 = $('.lgCards .card:nth-of-type(4)'),
      $lgCard5 = $('.lgCards .card:nth-of-type(5)'),
      $lgCard6 = $('.lgCards .card:nth-of-type(6)');

    const $esc1 = $('.card .escElement:nth-of-type(1) img'),
      $esc2 = $('.card .escElement:nth-of-type(2) img'),
      $esc3 = $('.card .escElement:nth-of-type(3) img'),
      $esc4 = $('.card .escElement:nth-of-type(4) img'),
      $esc5 = $('.card .escElement:nth-of-type(5) img'),
      $esc6 = $('.card .escElement:nth-of-type(6) img');


    const $card1Handler = function() {
        $contain.addClass('displayed');
        setTimeout(() => $lgCard1.addClass('displayed'), 200);
        $esc1.on('click', $esc1Handler);
        $card2.off('click');
        $card3.off('click');
        $card4.off('click');
        $card5.off('click');
        $card6.off('click');

      },
      $card2Handler = function() {
        $contain.addClass('displayed');
        setTimeout(() => $lgCard2.addClass('displayed'), 200);
        $esc2.on('click', $esc2Handler);
        $card1.off('click');
        $card3.off('click');
        $card4.off('click');
        $card5.off('click');
        $card6.off('click');
      },
      $card3Handler = function() {
        $contain.addClass('displayed');
        setTimeout(() => $lgCard3.addClass('displayed'), 200);
        $esc3.on('click', $esc3Handler);

        $card1.off('click');
        $card2.off('click');
        $card4.off('click');
        $card5.off('click');
        $card6.off('click');
      },
      $card4Handler = function() {
        $contain.addClass('displayed');
        setTimeout(() => $lgCard4.addClass('displayed'), 200);
        $esc4.on('click', $esc4Handler);
        $card1.off('click');
        $card2.off('click');
        $card3.off('click');
        $card5.off('click');
        $card6.off('click');
      },
      $card5Handler = function() {
        $contain.addClass('displayed');
        setTimeout(() => $lgCard5.addClass('displayed'), 200);
        $esc5.on('click', $esc5Handler);
        $card1.off('click');
        $card2.off('click');
        $card3.off('click');
        $card4.off('click');
        $card6.off('click');
      },
      $card6Handler = function() {
        $contain.addClass('displayed');
        setTimeout(() => $lgCard6.addClass('displayed'), 200);
        $esc6.on('click', $esc6Handler);
        $card1.off('click');
        $card2.off('click');
        $card3.off('click');
        $card4.off('click');
        $card5.off('click');
      };

    const $esc1Handler = function () {
        $lgCard1.removeClass('displayed');
        setTimeout(() => $contain.removeClass('displayed'), 500);
        $card2.on('click', $card2Handler);
        $card3.on('click', $card3Handler);
        $card4.on('click', $card4Handler);
        $card5.on('click', $card5Handler);
        $card6.on('click', $card6Handler);

        $esc1.off('click');
      },
      $esc2Handler = function () {
        $lgCard2.removeClass('displayed');
        setTimeout(() => $contain.removeClass('displayed'), 500);
        $card1.on('click', $card1Handler);
        $card3.on('click', $card3Handler);
        $card4.on('click', $card4Handler);
        $card5.on('click', $card5Handler);
        $card6.on('click', $card6Handler);

        $esc2.off('click');
      },
      $esc3Handler = function () {
        $lgCard3.removeClass('displayed');
        setTimeout(() => $contain.removeClass('displayed'), 500);
        $card1.on('click', $card1Handler);
        $card2.on('click', $card2Handler);
        $card4.on('click', $card4Handler);
        $card5.on('click', $card5Handler);
        $card6.on('click', $card6Handler);

        $esc3.off('click');
      },
      $esc4Handler = function () {
        $lgCard4.removeClass('displayed');
        setTimeout(() => $contain.removeClass('displayed'), 500);
        $card1.on('click', $card1Handler);
        $card2.on('click', $card2Handler);
        $card3.on('click', $card3Handler);
        $card5.on('click', $card5Handler);
        $card6.on('click', $card6Handler);

        $esc4.off('click');
      },
      $esc5Handler = function () {
        $lgCard5.removeClass('displayed');
        setTimeout(() => $contain.removeClass('displayed'), 500);
        $card1.on('click', $card1Handler);
        $card2.on('click', $card2Handler);
        $card3.on('click', $card3Handler);
        $card4.on('click', $card4Handler);
        $card6.on('click', $card6Handler);

        $esc6.off('click');
      },
      $esc6Handler = function () {
        $lgCard6.removeClass('displayed');
        setTimeout(() => $contain.removeClass('displayed'), 500);
        $card1.on('click', $card1Handler);
        $card2.on('click', $card2Handler);
        $card3.on('click', $card3Handler);
        $card4.on('click', $card4Handler);
        $card5.on('click', $card5Handler);

        $esc6.off('click');
      };

    $card1.on('click', $card1Handler);
    $card2.on('click', $card2Handler);
    $card3.on('click', $card3Handler);
    $card4.on('click', $card4Handler);
    $card5.on('click', $card5Handler);
    $card6.on('click', $card6Handler);
  } else {
   /*  $lgCard1.removeClass('displayed');
    $lgCard2.removeClass('displayed');
    $lgCard3.removeClass('displayed');
    $lgCard4.removeClass('displayed');
    $lgCard5.removeClass('displayed');
    $lgCard6.removeClass('displayed');
    $contain.removeClass('displayed'); */
  };


});

export default sponsorQry;

/* $card2.on('click', () => {
      $contain.addClass('displayed');
      setTimeout(() => $lgCard2.addClass('displayed'), 200);
    });
    $esc2.on('click', () => {
      $lgCard2.removeClass('displayed');
      setTimeout(() => $contain.removeClass('displayed'), 500);
    });
    $card3.on('click', () => {
      $contain.addClass('displayed');
      setTimeout(() => $lgCard3.addClass('displayed'), 200);
    });
    $esc3.on('click', () => {
      $lgCard3.removeClass('displayed');
      setTimeout(() => $contain.removeClass('displayed'), 500);
    });
    $card4.on('click', () => {
      $contain.addClass('displayed');
      setTimeout(() => $lgCard4.addClass('displayed'), 200);
    });
    $esc4.on('click', () => {
      $lgCard4.removeClass('displayed');
      setTimeout(() => $contain.removeClass('displayed'), 500);
    });
    $card5.on('click', () => {
      $contain.addClass('displayed');
      setTimeout(() => $lgCard5.addClass('displayed'), 200);
    });
    $esc5.on('click', () => {
      $lgCard5.removeClass('displayed');
      setTimeout(() => $contain.removeClass('displayed'), 500);
    });
    $card6.on('click', () => {
      $contain.addClass('displayed');
      setTimeout(() => $lgCard6.addClass('displayed'), 200);
    });
    $esc6.on('click', () => {
      $lgCard6.removeClass('displayed');
      setTimeout(() => $contain.removeClass('displayed'), 500);
    }); */