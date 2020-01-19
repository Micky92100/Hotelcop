$(document).ready(function () {
    console.log("ready!");


    $(function () {
        $('#reservation-form').submit(function (e) {
            e.preventDefault();
            // lorsque la fonction est lancée, on réinitialise le flag 'error' à 'false'
            let error = false;

            // on récupère tout les éléments html de class 'res' dans une variable $results, qui sera un array
            const $results = $('.res');

            // un for loop nous permet d'évaluer si les valeurs sont nulles, auquel cas il affiche des bordures rouges pour alerter l'user
            for (let i = 0; i < $results.length; i++) {
                if ($results[i].value === 0 || $results[i].value === "0" || $results[i].value === ''){
                    $results[i].style.border = 'solid 2px darkred';

                    // on flag 'error' comme 'true'
                    error = true;
                } else {
                    // si l'user a rectifié son erreur, la bordure rouge disparaît.
                    $results[i].style.border = '';
                }
            }
            // grace à notre flag 'error', on peut empêcher l'envoi du formulaire si les champs requis ne sont pas tous remplis
            if (!error) {

                // $results contient tout nos résultats validés, on peut les envoyer au backend
                window.alert("Réservation terminée. Félicitations!");

                // on peut maintenant réinitialiser le formulaire
                for (let i = 0; i < $results.length; i++) {
                    $results[i].value = 0;
                }
            }

        });
    });


    /*$(function () {
        $('#reservation-form').submit(function (e) {
            console.log("hello there");

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
    });*/

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

    $(".dropdown-menu li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class=caret></span>');
    });

    $(function () {
        // why is there a warning here ?
        $("#datepicker").datepicker();
    });


});
