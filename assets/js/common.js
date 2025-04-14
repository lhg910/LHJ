// all :: 페이지 상단으로
$('.page-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

// all :: li url
// $('[data-link]').css('cursor', 'pointer').on('click', function () {
//     const url = $(this).data('link');
//     window.location.href = url;
// });  

const basePath = '/LHJ/';
$('[data-link]').css('cursor', 'pointer').on('click', function () {
    const page = $(this).data('link');
    const url = page.startsWith('/') ? page : basePath + page;
    window.location.href = url;
});

// all :: header
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    }
});

// woks :: tab-menu + page-top scroll
$(window).on('scroll', function () {
  const scrollTop = $(window).scrollTop();

  // tab-menu scroll 상태 처리
  if (scrollTop > 550) {
    $('.tab-menu').addClass('scrolled');
  } else {
    $('.tab-menu').removeClass('scrolled');
  }

  // page-top 버튼 표시/숨김
  if (scrollTop > 100) {
    $('.page-top').fadeIn();
  } else {
    $('.page-top').fadeOut();
  }
});

// works :: tab
$('.tab-menu li').click(function () {
    const target = $(this).data('tab');
  
    $('.tab-menu li').removeClass('on');
    $(this).addClass('on');
  
    if (target === 'all') {
      $('.tab-content').show();
    } else {
      $('.tab-content').hide();
      $('.' + target).show();
    }

    $('html, body').animate({ scrollTop: 500 }, 500);
});

  
