$(document).ready(function() {
    $('form button').click(function() { 
        $('form').slideDown();
})
$('ul').on('click', 'li', function(e) {
    e.preventDefault();
    $(this).toggleClass('riscarTarefa'); 
});

$('form').on('submit', function(e) {
    e.preventDefault();
    const enderecoLista = $('#list-input').val();
    const novoItem = $('<li></li>');
    $(`<li>${enderecoLista}</li>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $('#list-input').val();
    })
})