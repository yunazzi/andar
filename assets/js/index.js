$(function(){

  //스크롤시에만 먹히는 소스지, 새로고침했을때는 버벅거릴수있음->새로고침시 새로인식
  $(window).scroll(function(){
    curr = $(this).scrollTop();

    if (curr > 0) {
      $('.header').addClass('fix')
    } else {
      $('.header').removeClass('fix')
    }

    if(curr == 0){
      $('.quick-menu').removeClass('on')
    }else{
      if(curr > lastScroll){
        $('.quick-menu').removeClass('on')
      }else{
        $('.quick-menu').addClass('on')
      }
    }
    lastScroll = curr;
  })

  
//새로고침되자마자 스크롤이벤트 실행하게끔 실행
  $(window).trigger('scroll');

  $('.gnb .group-nav .btn-toggle').click(function(){
    $(".gnb .group-nav").toggleClass('on')
    // slideUp+slideDown합친게 slideToggle
    $(".gnb .group-all").slideToggle()
  })



    var swiper = new Swiper(".main-slide", {
      effect:"fade",
        pagination:{
          el:'.pagination',
        },
        autoplay:{
            delay:3000,
            disableOnInteraction:false
        },
        loop:true
      });

    var swiper = new Swiper(".ad-slide",{
      effect:"fade",
        autoplay:{
            delay:3000,
            disableOnInteraction:false
        },
        loop:true
    })

    var swiper = new Swiper(".recomm-slide",{
      pagination:{
        el:'.pagination'
      }
    })

    var swiper = new Swiper(".cate-slide",{
      slidesPerView:2.2,
      spaceBetween:10,
      freeMode:true//슬라이드가 부들부들하게 됨
    })


    // @창 여닫기
  $('.group-gnb .item').click(function(e){
    e.preventDefault();
    if ($(this).hasClass('on')) {
      $(this).removeClass('on').children('.sub').slideUp();
    } else {
      $('.group-gnb.item').removeClass('on').children('.sub').slideUp();
      $(this).addClass('on').children('.sub').slideDown();
    }
  })

//상단 btn버튼 상호작용
  $('.btn-category').click(function(){
    $('.side-nav').toggleClass('on')
    $('.dimmed').toggleClass('on')
    disableBodyScroll();
  })
  $('.side-nav .close').click(function(){
    $('.side-nav').removeClass('on')
    $('.dimmed').removeClass('on')
    enableBodyScroll();
  })
  //body 스크롤 차단
  function disableBodyScroll(){
    $('body').css({'overflow':'hidden','height':'100%'})
  }
  //body 스크롤 허용
  function enableBodyScroll(){
    $('body').css({'overflow':'auto','height':'auto'})
  }

  $('.btn-search').click(function(){
    $('.side-search').toggleClass('on')
    disableBodyScroll();
  })
  $('.search-close').click(function(){
    $('.side-search').removeClass('on')
    enableBodyScroll();
  })
$('.side-search .search-go').click(function(){
  if($('#search-text').val().length==0){alert('검색어를 입력해주세요');$('#search-text').focus(); return false;}
})

//탭버튼
$('.best-item').click(function(e){
  e.preventDefault();
  tabCon = $(this).children().data('cate');

  $(this).addClass('active').siblings().removeClass('active');
  $(tabCon).addClass('active').siblings().removeClass('active');
})


//gotop버튼
$('.btn-gotop').click(function(){
  window.scrollTo({top:0,behavior:"smooth"})
})

})