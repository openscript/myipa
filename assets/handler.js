async function init() {
  await $('#navigation').load('./components/Navbar.html')
  await $('#footer').load('./components/Footer.html')

  const navigation = $('#navigation')
  var positionScroll = $(window).scrollTop()
  $(window).scroll(function () {
    var scroll = $(window).scrollTop()
    if (scroll > positionScroll) {
      navigation.addClass('fadeout')
    } else {
      navigation.removeClass('fadeout')
    }
    positionScroll = scroll;
  });
  particlesJS.load('particles-js', '/assets/particles.json');
}
init()