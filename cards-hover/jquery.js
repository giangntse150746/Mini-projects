$(document).ready(() => {
  if (getDeviceType() != "mobile") {
    $(".card-swiper").on("hover", () => handleShowClick());

    //   console.log(window.innerWidth, window.outerWidth);
    //   var o = $(".card-swiper");
    //   $("#top").on("mousemove", (t) => {
    //     var e = -($(window).innerWidth() / 2 - t.pageX) / 60,
    //       n = ($(window).innerHeight() / 2 - t.pageY) / 20;
    //     // prettier-ignore
    //     o.attr("style",
    //     `transform: rotateY(${e}deg) rotateX(${n}deg);
    //     -webkit-transform: rotateY(${e}deg) rotateX(${n}deg);
    //     -moz-transform: rotateY(${e}deg) rotateX(${n}deg);`)
    //   });
  } else {
    $(".card-group").on("touchend", () =>  handleShowClick());
  }
});
