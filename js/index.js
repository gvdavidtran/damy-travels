$('.carousel').carousel({
  interval: 10000
});

$('body').scrollspy({ target: '#navbar-main' });
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})