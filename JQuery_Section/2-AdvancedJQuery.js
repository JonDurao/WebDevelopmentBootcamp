(function () {
    /*$('h1').click(function () {
       alert('H1 Clicked!')
    });*/

    $('button').click(function () {
        $(this).css({
           background: 'pink'
        });
        alert($(this).text());
    });

    $('#keyPressedButton').val('').keypress(function (event) {
        console.log(event.key);
        if (event.key === 'Enter')
            alert(`Enter clicked: ${$(this).val()}`);
    });

    $('h1').on('click', function () {
        $(this).css({
           color: 'purple'
        });
    });

    $('button').on('mouseenter', function () {
       $(this).css({
           background: 'orange'
       })
    });

    $('button').on('mouseleave', function () {
        $(this).css({
            background: 'blue'
        })
    });



    $('div:first').slideDown(10000).fadeOut(1000, function () {
        $(this).remove();
    });
    $('div:last').fadeOut(10000, function () {
        console.log('Fade out completed!');
        $(this).remove();
    });
    $('div').fadeOut(3000, function () {
        $(this).remove();
    });
})();