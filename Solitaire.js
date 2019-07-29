(function() {
  //=============================================================================
  //將一副標準52張撲克牌洗牌，再分別置於8個欄目，其中4個欄目有7張紙牌，其餘4個欄目有6張紙牌
  //spade-黑桃 heart-紅心  diamond-方塊 club-梅花
  //=============================================================================
  let cardNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let facecards = ['spade', 'heart', 'diamond', 'club'];
  let facecardnum = [7, 6, 7, 6, 7, 6, 7, 6];

  //AllCards 記錄所有花色+點數
  let AllCards = [];
  cardNum.forEach(function(Num) {
    facecards.forEach(function(facecard) {
      AllCards.push(`${facecard}-${Num}`);
    });
  });

  //產生8欄
  for (ii = 0; ii < facecardnum.length; ii++) {
    //ii=7 6 7 6..
    let Fnum = facecardnum[ii];
    if ($(`#column${ii + 1}`).length === 0) {
      let $CardColumn = $('<div />', {
        class: 'header',
        id: `column${ii + 1}`,
      });
      $('#deskcards').append($CardColumn);
    }
  }
  //亂數取牌，放到8欄內
  let facecardCount = 1;
  for (i = 0; i < AllCards.length; i++) {
    while (AllCards.length > 0) {
      let randomCard = AllCards[Math.floor(Math.random() * (AllCards.length - 1))];
      let $CardDesk = $('<div />', {
        class: `card ${randomCard}`,
        css: {
          display: 'none',
        },
      });
      if ($(`#column${facecardCount}>div`).length == facecardnum[facecardCount - 1]) {
        facecardCount++;
      }
      $(`#column${facecardCount}`).append($CardDesk);
      AllCards.splice(AllCards.indexOf(randomCard), 1);
    }
  }

  $('.card').toggle(800);

  $('.card').on('mousedown', function() {
    if (
      this.classList[1] !=
      $(this)
        .prev()
        .attr('class')
        .split(' ')[1]
    )
      console.log(this.classList[1]);
  });

  var dragulaKanban0 = dragula([...document.querySelectorAll('.header')]);
  // var dragulaKanban = dragula([document.querySelector('.header')], {
  //   moves: function(el, container, handle) {
  //     return handle.container.classList.contains('a');
  //   },
  // });
})();
