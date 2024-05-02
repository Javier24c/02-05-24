$(document).ready(function(){
    $('#btnEnviar').click(function(){
        e.preventDefault();
        let formData = {
            username: $('#username').val(),
            password: $('#password').val()
        };

        $.ajax({
            url: 'https://jsoplaceholder.typicode.com/posts',
            type: 'POST',
            datatype: 'json',
            data: JSON.stringify(formData),
            success: function(response){
                console.log('Respuesta del servidor:',response);
            },
            error: function(xhr, status,error){
                console.error('Error al enviar la solicitud:',error)
            }
        });
    })
})