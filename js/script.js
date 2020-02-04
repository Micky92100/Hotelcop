$(document).ready(function () {
  console.log("ready!");

  

  /* fonction afin de rendre le header fixed */
  var positionElementInPage = $('#header').offset().top;
  /* fonction pour faire descendre le header */
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
  /* fonction jquery pour la saisie de date dans le formulaire réservation */
  $(function () {

    $("#datepicker").datepicker();
    $("#arrive").datepicker();
    $("#depart").datepicker();
  });

  // valider le formulaire de recherche'avis avec jquery et la fonction validate
  $(function () {

    $("#search").validate({
      rules: {
        search: {
          required: true,
          minlength: 2
        },

      },


      // les messages d'erreurs
      messages: {
        search: {
          required: "Veuillez-indiquer votre recherche",
          minlength: "Il faut au moins deux mots"
        },
      },

      submitHandler: function () {
        alert("Merci, nous allons réaliser votre recherche.");
        return false;
      }
    });

  });
  // La fonction de validation de l'inscription à la newsletter
  $(function () {

    $("#newsletter").validate({
      rules: {
        nom: {
          required: true,
          minlength: 5
        },
        email: {
          required: true,
          email: true
        },
      },


      // les messages d'erreurs
      messages: {
        nom: {
          required: "Veuillez-indiquer votre nom et votre prenom",
          minlength: "Votre nom et prenom sont trop courts"
        },

        email: "Veuillez saisir un email valide",
      },

      submitHandler: function () {
        alert("Merci, vous recevrez régulièrement des nouvelles de notre hôtel.");
        return false;
      }
    });

  });



  // valider le formulaire d'avis avec jquery et la fonction validate
  $(function () {
    $.validator.addMethod('objet', function (value, element) {
      if (value >= 1) {
        return true;
      }
    });
    // Setup form validation on the #register-form element
    $("#avis").validate({

      // Specify the validation rules
      rules: {
        nom: {
          required: true,
          minlength: 2
        },
        prenom: {
          required: true,
          minlength: 2
        },
        telephone: {
          required: true,
          digits: true,
          minlength: 6,
          maxlength: 10
        },
        email: {
          required: true,
          email: true
        },
        text: {
          required: true,
          minlength: 20,
          maxlength: 400
        },
        pays: {
          required: true,
          minlength: 2,
          maxlength: 40
        },
        entreprise: {
          required: true,
          minlength: 2,
          maxlength: 40
        },
        sujet: {
          required: true,
          minlength: 2,
          maxlength: 40
        },

        objet: {
          objet: true,
        },
      },


      // les messages d'erreurs
      messages: {
        nom: {
          required: "Veuillez-indiquer votre prenom",
          minlength: "Votre nom est trop cours"
        },
        objet: "Veuillez saisir un objet",
        prenom: {
          required: "Veuillez-indiquer votre prenom",
          minlength: "Votre prenom est trop cours"
        },
        telephone: {
          required: "Veuillez indiquer votre numéro",
          digits: "veuillez n'indiquer que des chifres",
          minlength: "Votre numero est trop court",
          maxlength: "votre numero est trop long"
        },
        pays: {
          required: "Veuillez indiquer votre pays",
          minlength: "Le mot est trop court",
          maxlength: "Le mot est trop long"
        },
        entreprise: {
          required: "Veuillez indiquer votre entreprise",
          minlength: "Le mot est trop court",
          maxlength: "Le mot est trop long"
        },
        sujet: {
          required: "Veuillez indiquer votre sujet",
          minlength: "Le mot est trop court",
          maxlength: "Le mot est trop long"
        },
        text: {
          required: "Vous devez indiquer votre demande",
          minlength: "Votre demande doit au moins faire 20 caractéres",
          maxlength: "Votre demande doit moins de 400 caractéres"
        },

        email: "Veuillez saisir un email valide",

      },

      submitHandler: function (form) {
        alert("Merci, nous reviendrons vers vous le plus rapidement possible.");
        return false;
      }
    });

  });
  // valider le formulaire de recrutement avec jquery et la fonction validate
  $(function () {
    $.validator.addMethod('objet', function (value, element) {
      if (value >= 1) {
        return true;
      }
    });
    jQuery.validator.addMethod(
      "regex",
      function (value, element, regexp) {
        if (regexp.constructor != RegExp)
          regexp = new RegExp(regexp);
        else if (regexp.global)
          regexp.lastIndex = 0;
        return this.optional(element) || regexp.test(value);
      }, "erreur expression reguliere"
    );

    // on lance la fonction de validation du formulaire de recrutement
    $("#recrutement").validate({

      // on spécifie les règles
      rules: {
        nom: {
          required: true,
          minlength: 2,
          regex: /^[a-zA-Z'.\s]{2,40}$/,
        },
        prenom: {
          required: true,
          minlength: 2,
          regex: /^[a-zA-Z'.\s]{2,40}$/,
        },
        telephone: {
          required: true,
          regex: /^[0-9]{6,10}$/,
        },
        email: {
          required: true,
          email: true
        },
        text: {
          required: true,
          minlength: 20,
          maxlength: 400
        },
        pays: {
          required: true,
          minlength: 2,
          maxlength: 40
        },
        entreprise: {
          required: true,
          minlength: 2,
          maxlength: 40
        },
        sujet: {
          required: true,
          minlength: 2,
          maxlength: 40
        },

        cv: {
          required: true,
        },
        lettredemotivation: {
          required: true,
        },
        objet: {
          objet: true,
        },
      },


      // Les messages d'erreurs
      messages: {
        nom: {
          required: "Veuillez-indiquer votre prenom",
          minlength: "Votre nom est trop cours",
          regex: "Veuilez n'indiquer que des lettres",
        },
        cv: "Veuillez-ajouter votre CV",
        lettredemotivation: "Veuillez-ajouter votre CV",
        prenom: {
          required: "Veuillez-indiquer votre prenom",
          minlength: "Votre prenom est trop cours",
          regex: "Veuilez n'indiquer que des lettres",
        },
        telephone: {
          required: "Veuillez indiquer votre numéro",
          regex: "Le numéro doit faire entre 6 et 10 chiffres",
        },
        pays: {
          required: "Veuillez indiquer votre pays",
          minlength: "Le mot est trop court",
          maxlength: "Le mot est trop long"
        },
        entreprise: {
          required: "Veuillez indiquer votre entreprise",
          minlength: "Le mot est trop court",
          maxlength: "Le mot est trop long"
        },
        sujet: {
          required: "Veuillez indiquer votre sujet",
          minlength: "Le mot est trop court",
          maxlength: "Le mot est trop long"
        },
        text: {
          required: "Parlez-nous de vous",
          minlength: "Votre texte doit au moins faire 20 caractéres",
          maxlength: "Votre texte doit moins de 400 caractéres"
        },

        email: "Veuillez saisir un email valide",
        objet: "Veuillez saisir un objet",

      },

      submitHandler: function (form) {
        alert("Merci pour votre candidature, compte tenu de la quantité de candidature. Nous nous en engageons à revenir vers vous dans moins d'une semaine.");
        return false;
      }
    });

  });
  // valider le formulaire de contact avec jquery et la fonction validate
  $(function () {
    $.validator.addMethod('objet', function (value, element) {
      if (value >= 1) {
        return true;
      }
    });
    // Setup form validation on the #register-form element
    $('#contact').validate({
      // Specify the validation rules
      rules: {
        nom: {
          required: true,
          minlength: 2
        },
        prenom: {
          required: true,
          minlength: 2
        },
        telephone: {
          required: true,
          digits: true,
          minlength: 6,
          maxlength: 10
        },
        email: {
          required: true,
          email: true
        },
        text: {
          required: true,
          minlength: 20,
          maxlength: 400
        },
        pays: {
          required: true,
          minlength: 2,
          maxlength: 40
        },
        entreprise: {
          required: true,
          minlength: 2,
          maxlength: 40
        },
        sujet: {
          required: true,
          minlength: 2,
          maxlength: 40
        },

        objet: {
          objet: true
        }
      },

      // les messages d'erreurs
      messages: {
        nom: {
          required: 'Veuillez-indiquer votre nom',
          minlength: 'Votre nom est trop cours'
        },
        objet: 'Veuillez saisir un objet',
        prenom: {
          required: 'Veuillez-indiquer votre prenom',
          minlength: 'Votre prenom est trop cours'
        },
        telephone: {
          required: 'Veuillez indiquer votre numéro',
          digits: "veuillez n'indiquer que des chifres",
          minlength: 'Votre numero est trop court',
          maxlength: 'votre numero est trop long'
        },
        pays: {
          required: 'Veuillez indiquer votre pays',
          minlength: 'Le mot est trop court',
          maxlength: 'Le mot est trop long'
        },
        entreprise: {
          required: 'Veuillez indiquer votre entreprise',
          minlength: 'Le mot est trop court',
          maxlength: 'Le mot est trop long'
        },
        sujet: {
          required: 'Veuillez indiquer votre sujet',
          minlength: 'Le mot est trop court',
          maxlength: 'Le mot est trop long'
        },
        text: {
          required: 'Vous devez indiquer votre demande',
          minlength: 'Votre demande doit au moins faire 20 caractéres',
          maxlength: 'Votre demande doit moins de 400 caractéres'
        },

        email: 'Veuillez saisir un email valide'
      },

      submitHandler: function (form) {
        alert(
          'Merci, nous reviendrons vers vous le plus rapidement possible.'
        );
        return false;
      }
    });
  });

  // valider le formulaire panier avec jquery et la fonction validate
  $(function () {
    $.validator.addMethod('objet', function (value, element) {
      if (value >= 1) {
        return true;
      }
    });
    jQuery.validator.addMethod(
      "regex",
      function (value, element, regexp) {
        if (regexp.constructor != RegExp)
          regexp = new RegExp(regexp);
        else if (regexp.global)
          regexp.lastIndex = 0;
        return this.optional(element) || regexp.test(value);
      }, "erreur expression reguliere"
    );

    // on lance la fonction de validation du formulaire de recrutement
    $("#panier").validate({

      // on spécifie les règles
      rules: {
        nom: {
          required: true,
          minlength: 2,
          regex: /^[a-zA-Z'.\s]{2,40}$/,
        },
        prenom: {
          required: true,
          minlength: 2,
          regex: /^[a-zA-Z'.\s]{2,40}$/,
        },
        carteblue: {
          required: true,
          regex: /([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
        },
        valid: {
          required: true,
          regex: /^[0-9]{8}$/,
        },
        cryp: {
          required: true,
          regex: /^[0-9]{3}$/,
        },
        objet: {
          objet: true,
        },
        cgvOk: {
          required: true,
        },
      },


      // Les messages d'erreurs
      messages: {
        nom: {
          required: "Veuillez-indiquer votre nom",
          minlength: "Votre nom est trop cours",
          regex: "Veuilez n'indiquer que des lettres",
        },
        prenom: {
          required: "Veuillez-indiquer votre prenom",
          minlength: "Votre prenom est trop cours",
          regex: "Veuilez n'indiquer que des lettres",
        },
        carteblue: {
          required: "Veuillez indiquer votre numéro de carte bleu",
          regex: "Le numéro doit faire 12 chiffres",
        },
        valid: {
          required: "Veuillez indiquer la date d'expiration de votre carte bleu",
          regex: "format jjmmaaaa",
        },
        cryp: {
          required: "Veuillez indiquer le numero à trois chiffres au dos de votre carte",
          regex: "Veuillez indiquer trois chiffres",
        },
        objet: "Veuillez selectionner le type de carte",
        cgvOk: "Veuillez cocher la case s'il vous plait"

      },

      submitHandler: function (form) {
        alert("Merci, vous recevrez un récapitulatif de votre réservation par mail. Nous vous  recontacterons une semaine avant votre arrivée pour planifier au mieux votre séjour.");
        return false;
      }
    });

  });

  // valider le formulaire reservation avec jquery et la fonction validate
  $(function () {
    $.validator.addMethod('personne', function (value, element) {
      if (value >= 1) {
        return true;
      }
    });
    $.validator.addMethod('chambre', function (value, element) {
      if (value >= 1) {
        return true;
      }
    });
    $.validator.addMethod('restaurant', function (value, element) {
      if (value >= 1) {
        return true;
      }
    });
    $.validator.addMethod('spa', function (value, element) {
      if (value >= 1) {
        return true;
      }
    });
    
    jQuery.validator.addMethod(
      "regex",
      function (value, element, regexp) {
        if (regexp.constructor != RegExp)
          regexp = new RegExp(regexp);
        else if (regexp.global)
          regexp.lastIndex = 0;
        return this.optional(element) || regexp.test(value);
      }, "erreur expression reguliere"
    );

    // on lance la fonction de validation du formulaire de recrutement
    $("#reservation").validate({

      // on spécifie les règles
      rules: {
        nom: {
          required: true,
          minlength: 2,
          regex: /^[a-zA-Z'.\s]{2,40}$/,
        },
        prenom: {
          required: true,
          minlength: 2,
          regex: /^[a-zA-Z'.\s]{2,40}$/,
        },
        pays: {
          required: true,
          minlength: 2,
          regex: /^[a-zA-Z'.\s]{2,40}$/,
        },
        telephone: {
          required: true,
          regex: /^[0-9]{6,10}$/,
        },
        email: {
          required: true,
          email: true
        },
        personne :{personne: true},
        chambre: {chambre : true},
        restaurant: {restaurant : true},
        spa: {spa : true},
       
        
      },


      // Les messages d'erreurs
      messages: {
        nom: {
          required: "Veuillez-indiquer votre nom",
          minlength: "Votre nom est trop cours",
          regex: "Veuilez n'indiquer que des lettres",
        },
        prenom: {
          required: "Veuillez-indiquer votre prenom",
          minlength: "Votre prenom est trop cours",
          regex: "Veuilez n'indiquer que des lettres",
        },
        pays: {
          required: "Veuillez indiquer votre pays",
          minlength:"Le nom de pays est trop court",
          regex: "Veuillez n'indiquer que des lettres",
        },
        telephone: {
          required: "Veuillez indiquer votre numéro de telephone",
          regex: "Veuillez indiquer compris entre 6 et 10 chiffres",
        },
        email: {
          required: "Veuillez indiquer votre adresse email",
          email: "L'adresse n'est pas valide",
        },
        personne: "Veuillez indiquer le nombre de personne",
        chambre: "Veuillez indiquer le type de chambre",
        restaurant: "Veuillez indiquer votre choix",
        spa: "Veuillez indiquer votre choix",
     

      },

      submitHandler: function (form) {
        alert("Merci, vous réservation est enregistrer. Vous pouvez finaliser votre commande en cliquant sur panier.");
        return false;
      }
    });

  });
});