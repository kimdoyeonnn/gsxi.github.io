$(document).ready(function(){
  $('.gallery_Wrap').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });

    $('.img_slider').slick({
      asNavFor:'.txt_slider',
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      arrows: false
    }
      
    );
    $('.txt_slider').slick({
      asNavFor:'.img_slider',
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      arrows: false,
      dots: true
    });
});