// $('.gruzavik').animate(
//   {
//     right: '0px',
//   },
//   1000
// );

// $('.gruzavik-what').animate(
//   {
//     left: '-397px',
//   },
//   1000
// );

// $('.gruzavik-left').animate(
//   {
//     left: '397px',
//   },
//   1000
// );

// $('.gruzavik-benefis').animate(
//   {
//     left: '0px',
//   },
//   1000
// );
// $('.gruzavik-client').animate(
//   {
//     left: '-338px',
//   },
//   1000
// );
// $('.gruzavik-contact').animate(
//   {
//     right: '0px',
//   },
//   1000
// );
// $('.gruzavik-ready').animate(
//   {
//     right: '-338px',
//   },
//   1000
// );

/*button*/
$('.fac-content-descr').hide();

$('.fac-buttons-content').click(function () {
  $(this).next().toggle();
  $(this).children().eq(0).children().eq(2).toggle();
});
var gruz1 = $('.gruzavik-what').offset().top;
var gruz2 = $('.dispatch').offset().top;
var gruz3 = $('.pricing-block').offset().top;
var gruz4 = $('.redy-block').offset().top;
var gruz4 = $('.team-block').offset().top;
var block1 = $('.main').offset().top;
var block2 = $('.faq-block2').offset().top;
var block3 = $('#contact').offset().top;

$('.offer-menu').click(function () {
  $('html, body').animate(
    {
      scrollTop: gruz1,
    },
    500
  );
});

$('.dispatch-block').click(function () {
  $('html, body').animate(
    {
      scrollTop: gruz2,
    },
    500
  );
});
$('.pricing-menu').click(function () {
  console.log('s');
  $('html, body').animate(
    {
      scrollTop: gruz3,
    },
    500
  );
});
$('.redy-menu').click(function () {
  console.log('s');
  $('html, body').animate(
    {
      scrollTop: gruz3,
    },
    500
  );
});
$('.team-menu').click(function () {
  console.log('s');
  $('html, body').animate(
    {
      scrollTop: gruz3,
    },
    500
  );
});
$('.main-menu').click(function () {
  console.log('s');
  $('html, body').animate(
    {
      scrollTop: block1,
    },
    500
  );
});
$('.faq-menu').click(function () {
  console.log('s');
  $('html, body').animate(
    {
      scrollTop: $('#faq').position().top,
    },
    500
  );
});
$('.contact-menu').click(function () {
  console.log('s');
  $('html, body').animate(
    {
      scrollTop: $('#contact').position().top,
    },
    500
  );
});

/*animation track*/
$('.gruzavik').animate(
  {
    right: '-20%',
  },
  1000
);
$('.arrow-down').hide();
var numbers = $('.block3-main').position().top;
$(window).scroll(function (x) {
  var bodyTop = $(document).scrollTop();

  if (bodyTop > 250) {
    $('.arrow-down').show(500);

    $('.header').css({
      zIndex: 10000,
      width: '100%',
      position: 'fixed',
      left: 0,
      right: 0,
      margin: 'auto',
      // background: '#00000030',
      transition: '0.5s',
    });
    $('.header').hover(
      function () {
        $(this).css({
          background: '#00000030',
          transition: '0.5s',
        });
      },
      function () {
        $(this).css({
          background: 'none',
          transition: '0.5s',
        });
      }
    );
  } else {
    $('.arrow-down').hide(500);

    $('.header').css({
      zIndex: 10000,
      width: 'unset',
      position: 'unset',
      left: 0,
      right: 0,
      margin: 'unset',
      background: 'unset',
      transition: '0.5s',
    });
  }

  if (bodyTop > 535) {
    $('.gruzavik-what').animate(
      {
        left: '-397px',
      },
      1000
    );
  }

  if (bodyTop > 3358.5) {
    if (window.matchMedia('(max-width: 600px)').matches) {
      $('.gruzavik-left').animate(
        {
          left: '20%',
        },
        1000
      );
    } else {
      $('.gruzavik-left').animate(
        {
          left: '40%',
        },
        1000
      );
    }
  }
  if (bodyTop > 5100) {
    $('.gruzavik-benefis').animate(
      {
        left: '0px',
      },
      1000
    );
  }

  if (bodyTop > 6819) {
    $('.gruzavik-ready').animate(
      {
        right: '-338px',
      },
      1000
    );
  }
  if (bodyTop > 7900) {
    $('.gruzavik-client').animate(
      {
        left: '-338px',
      },
      1000
    );
  }
  if (bodyTop > 9946) {
    $('.gruzavik-contact').animate(
      {
        right: '0px',
      },
      1000
    );
  }

  if (bodyTop > 1400) {
    var a = 0;

    $('.counter-value').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});

$('.close-menu').click(function () {
  $('.header-mobile').animate(
    {
      width: '0%',
    },
    500
  );
});

$('.submenu').click(function () {
  $('.header-mobile').animate(
    {
      width: '100%',
    },
    500
  );
});

$('.li-drow').click(function () {
  $('.about-menu').slideToggle();
});
