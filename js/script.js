$(function() {
  // ハンバーガーメニュー
  $('.gnav-toggler').click(function() {
    $('.gnav-list').slideToggle();
    $('.gnav-list').toggleClass('_open');
  });
});

$(function() {
  // 画面のどこかをクリックするとハンバーガーメニューが閉じる
  $(document).click(function(event) {
    let clickover = $(event.target);
    let _opened = $('.gnav-list._open').hasClass('_open');
    if ( _opened && !clickover.hasClass('gnav-toggler') ) {
      $('.gnav-toggler:not(._menu)').trigger('click');
    }
  });
});

$(function() {
  // スムーススクロール
  if (window.matchMedia( '(min-width: 768px)' ).matches) {
    let headerHight = 115;
    $('a').click(function() {;
      if(this.hash !== '') {
        var hash = this.hash;
        $('html, body').animate( {
          scrollTop: $(hash).offset().top - headerHight
        }, 800, 'swing')
      }
    });
  } else {
    let headerHight = 71;
    $('a').click(function() {;
      if(this.hash !== '') {
        var hash = this.hash;
        $('html, body').animate( {
          scrollTop: $(hash).offset().top - headerHight
        }, 800, 'swing')
      }
    });
  }
});

$(function() {
  // アコーディオンメニュー
  $('.qa-tit').click(function(e) {
    $(this).next().slideToggle();
    if ( $(this).hasClass('_open') ) {
      $(this).removeClass('_open');
      $(this).addClass('_close');
    } else {
      $(this).removeClass('_close');
      $(this).addClass('_open');
    }
  });
});

$(function() {
  // トップへスクロール
  $('#scroll').click(function() {
    $('html, body').animate({scrollTop: 0}, 500)
  });
});