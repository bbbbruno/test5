// ロード
$(window).on('load', function() {

  $('.loader-inner').fadeOut(500, function() {
    $('.loader').fadeOut(750);
  });

});

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
  // ナビバーがトップから離れると切り替わる
  $(window).scroll(function() {
    let scroll = $(this).scrollTop();
    if ( scroll > 0 ) {
      if (window.matchMedia( '(min-width: 768px)' ).matches) {
        $('.gnav-wrapper').css('background-color', '#194769');
      } else {
        $('.gnav').css('background-color', '#194769');
      }
      $('.gnav-logo._origin').hide();
      $('.gnav-logo._white').fadeIn(300);
      $('.gnav-link a').addClass('_active');
      $('.gnav-toggler._origin').addClass('_active');
    } else {
      if (window.matchMedia( '(min-width: 768px)' ).matches) {
        $('.gnav-wrapper').css('background-color', 'transparent');
      } else {
        $('.gnav').css('background-color', 'transparent');
      }
      $('.gnav-logo._white').hide();
      $('.gnav-logo._origin').fadeIn(300);
      $('.gnav-link a').removeClass('_active');
      $('.gnav-toggler._origin').removeClass('_active');
    }
  });
});

$(function() {
  // スムーススクロール
  if (window.matchMedia( '(min-width: 768px)' ).matches) {
    let headerHight = 150;
    $('a').click(function() {;
      if(this.hash !== '') {
        var hash = this.hash;
        $('html, body').animate( {
          scrollTop: $(hash).offset().top - headerHight
        }, 800, 'swing')
      }
    });
  } else {
    let headerHight = 68;
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