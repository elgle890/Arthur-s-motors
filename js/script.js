$(document).ready(function() {
    $(`.menu-hamburguer`).on('click', function() {
        $('#menu').slideToggle();
    });

    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });

    $(`.produtos`).slick({
        autoplay: true,
    });

    $('#cpf').mask('000.000.000-00');
    $('#tel').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            cpf: {
                required: true,
            },
            cep: {
                required: true,
            },
            tel: {
                required: true,
            },
            interesse: {
                required: true,
            }
        },
        messages: {
            tel: 'por favor, insira seu telefone',
            cpf: 'por favor, insira o cpf',
            cep: `por favor insira o cep`,
            interesse: 'por favor, insira seu carro de interesse'
        }
    });

    $('.carro button').on('click', function() {
        let nomeCarro = $(this).parent().find(`h3`).text();

        $('#interesse').val(nomeCarro);

        $('html').animate({
            scrollTop: destion.offset().top 
        }, 1000);
    });

    
});