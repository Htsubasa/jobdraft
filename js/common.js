
$(function(){
  function sliderSetting(){
      var width = $(window).width();
      if(width <= 560){
          $('.consulting_block_top_sp').not('.slick-initialized').slick({
            autoplaySpeed: 3000,
            dots:true,
            slidesToShow:1,
            slidesToScroll:1,
            variableWidth:true,
            arrows: true,   
            centerMode: true,
            infinite: false,
            });
      } else {
          $('.consulting_block_top.slick-initialized').slick('unslick');
      }
  }
  sliderSetting();
  $(window).resize( function() {
      sliderSetting();
  });
});

$(function(){
    // #で始まるアンカーをクリックした場合に処理
        $('a[href^="#"]').click(function() {
            // スクロールの速度
            var speed = 500; // ミリ秒
            // 移動先を取得
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            // 移動先を数値で取得
            var position = target.offset().top;
            // スムーススクロール
            $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
        });
    });

$('.slider_wrap').slick({
    autoplaySpeed: 3000,
    dots:true,
    slidesToShow:1,
    slidesToScroll:1,
    variableWidth:true,
    centerMode: true,
    arrows: true,   
});

$(function(){
  function sliderSetting(){
      var width = $(window).width();
      if(width <= 768){
          $('.box_flex').not('.slick-initialized').slick({
              autoplay: true,
              autoplaySpeed: 3000,
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 3,
              variableWidth:true,
              infinite:true,
              centerMode: true,
            });
      } else {
          $('.box_flex.slick-initialized').slick('unslick');
      }
  }
  sliderSetting();
  $(window).resize( function() {
      sliderSetting();
  });
});

$(function(){
    $('.btn-gnavi').on('click',function(){
      var rightVal = 0;
      if($(this).hasClass('hb-open')){
        rightVal = -300;
        $(this).removeClass('hb-open');
      }else{
        $(this).addClass('hb-open');
      }
  
      $('.header-nav').stop().animate({
        right: rightVal
      }, 200);
    });
  });
  jQuery(function ($) {
    //コンテンツを非表示に
    $(".accordion-content").css("display", "none");
    
    //タイトルがクリックされたら
    $(".js-accordion-title").click(function () {
      //クリックしたjs-accordion-title以外の全てのopenを取る
      $(".js-accordion-title").not(this).removeClass("open");
      //クリックされたjs-accordion-title以外のcontentを閉じる
      $(".js-accordion-title").not(this).next().slideUp(300);
      //thisにopenクラスを付与
      $(this).toggleClass("open");
      //thisのcontentを展開、開いていれば閉じる
      $(this).next().slideToggle(300);
    });

  });



(function($){
  $('.header-nav ul li a[href]').on('click', function(event) {
    $('.btn-gnavi span').trigger('click');
  });
})(jQuery)


