$(document).ready(function () {
    $('#telphone').mask('(00) 00000-0000', {
        placeholder: "(XX) XXXXX-XXXX",
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telphone: {
                required: true,
            }, 
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu Nome',
            email: 'Por favor, insira o seu E-mail',
            telphone: 'Por favor, insira o seu Telefone'
        },
        invalidHandler: function(e, validate) {
            let camposIncorretos = validate.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})