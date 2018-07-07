$(function(){

    $("#box").click(function(){
        alert("you've just clik the box");
    });


    $('input').blur(function(){
        if($(this).val()==""){
            $(this).css('border', 'solid 1px red');
            $('#box').text('Forgot to add text?');
        }
    });

    $('input').keydown(function(){
        if( $(this).val()!== ""){
            $(this).css('border', 'solid 1px #777');
            $('#box').text("that's better");
        }
    });

    $('#box').hover(function(){
        $(this).text("You hovered in");
    }, function(){
        $(this).text("You hovered out");
    });


});