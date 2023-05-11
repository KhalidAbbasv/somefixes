$(document).ready(function () {




  $(".slideshow-container").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  var prev = $(".slick-prev");
  prev.html('<i class="fa-solid fa-arrow-left"></i>');

  var next = $(".slick-next");
  next.html('<i class="fa-solid fa-arrow-right"></i>');

  // Checkout Page accordion
  $("#create_pwd").on("change", function () {
    $(".account-create").slideToggle("100");
  });

  //about page client feedback
  $('.client-feedback-summary').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  //cart page slick
  $('.slick-arrow-style').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

});

$("#owl-demo").owlCarousel({
  navigation: true,
});

//offcanvas mobile menu start
var $offCanvasNav = $(".mobile-menu"),
  $offCanvasNavSubMenu = $offCanvasNav.find(".dropdown");

/*Add Toggle Button With Off Canvas Sub Menu*/
$offCanvasNavSubMenu
  .parent()
  .prepend('<span class="menu-expand"><i></i></span>');

/*Close Off Canvas Sub Menu*/
$offCanvasNavSubMenu.slideUp();

/*Category Sub Menu Toggle*/
$offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
  var $this = $(this);
  if (
    $this
      .parent()
      .attr("class")
      .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
    ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
  ) {
    e.preventDefault();
    if ($this.siblings("ul:visible").length) {
      $this.parent("li").removeClass("active");
      $this.siblings("ul").slideUp();
    } else {
      $this.parent("li").addClass("active");
      $this
        .closest("li")
        .siblings("li")
        .removeClass("active")
        .find("li")
        .removeClass("active");
      $this.closest("li").siblings("li").find("ul:visible").slideUp();
      $this.siblings("ul").slideDown();
    }
  }
});
//Product page



