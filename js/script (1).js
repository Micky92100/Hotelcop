function imprimer_page() {
    window.print();
}

var positionElementInPage = $('#header').offset().top;
$(window).scroll(
    function () {
        if ($(window).scrollTop() > positionElementInPage) {

            $('#header').addClass("fixed");
        } else {

            $('#header').removeClass("fixed");
        }
    }
);

$( function() {
    $( "#datepicker" ).datepicker();
  } );