/**
 * JQUERY Selectors $()
 * .css to manipulate them
 * */

const stylesSelector = {
    backgroundColor: 'blue',
    color: 'red'
};

const selectorFunc = function () {
    console.log($('h1'));
    console.log($('li'));
    console.log($('body'));
    console.log($('#header'));
    console.log($('.lista'));
    console.log($('ul li a'));

    $('h1#header').css('color', 'red');
    $('li.lista').css(stylesSelector);
};

const execFunc = function () {
    $('div').css('backgroundColor', 'purple');
    $('div.jQueryExHighlight').css('width', '200px');
    $('#jQueryExThird').css('border', '2px orange solid');
};

const jQueryMethods = function () {
    console.log($('h1.methodsJquery').text());
    console.log($('ul.methodsJquery').text());
    console.log($('li.methodsJquery').text());

    $('h1.methodsJquery').text('New Text H1');
    console.log($('h1.methodsJquery').text());

    $('li.methodsJquery').text('New Text LI');
    console.log($('li.methodsJquery').text());

    console.log($('h1.methodsJquery').html());

    console.log($('ul.methodsJquery').html());
    $('ul.methodsJquery').html('<li class="methodsJquery">New list element</li>');

    console.log($('li.methodsJquery').html());
    $('li.methodsJquery').html('<a href="_blank">Click me</a>');

    $('img').css({
        width: '200px'
    });

    $('img').attr({
        src: 'http://static.stereogum.com/uploads/2015/02/DeathGrips-608x405.jpg'
    });

    $('input').attr({
        type: 'text'
    });

    $('img:first').attr({
        src: 'http://static.spin.com/files/140609-death-grips-bjork.jpg'
    });

    $('img').last().attr({
        src: 'http://cdn4.pitchfork.com/news/57044/aa7dfbe8.jpg'
    });

    $('input').val('Jon Durao Input');

    $('select').val('Dos');

    $('h1.methodsJquery').addClass('greenClassNoMas orangeClassNoMas');
    $('h1.methodsJquery').removeClass('greenClassNoMas');
    $('h1.methodsJquery').toggleClass('orangeClassNoMas');
    $('h1.methodsJquery').toggleClass('orangeClassNoMas');
    $('h1.methodsJquery').toggleClass('orangeClassNoMas');
};

(function () {
    selectorFunc();
    execFunc();
    jQueryMethods();

    $('.jQuerySeparator').css({borderTop: '5px dashed black',
                                height: '20px',
                                backgroundColor: 'white',
                                margin: '10px'});
}) ();