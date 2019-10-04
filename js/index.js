
$('#add').click(function () {
    let name = $('#nameInput').val();
    if(name == ""){
        alert("Item without name");
    }
    else{
        $('#lista').append('<li class="element">'+ name +
            '<div><button type="button" class="check">Check</button><button type="button" class="delete">Delete</button></div></li>');
        $('#nameInput').val('');
    }
});

$("#lista").on("click", ".check", function(event) {
        $(this).parent().parent().toggleClass("completed");
});

$(document).on('click','.delete', function(event){
    $(this).parent().parent().remove();
});