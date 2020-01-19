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

$(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        var $form = $(this);
        $.post($form.attr('action'), $form.serialize())
            .done(function (data) {
                $('#html').html(data);
                $('#formulaire').modal('hide')
            })
            .fail(function () {
                alert('ça ne marche pas...')
            })
    });
    $('.modal').on('shown.bs.modal', function () {
        $('input:first').focus()
    })
});

$(".dropdown-menu li a").click(function () {
    var selText = $(this).text();
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class=caret></span>');
});

$( function() {
    $( "#datepicker" ).datepicker();
} );
