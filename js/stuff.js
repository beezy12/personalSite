$(document).ready(function() {





    // $hi = $('.hi');
    // var timeOut = setTimeout(function() {
    //     $hi.css({'visibility': 'hidden'});
    // }, 6000);




    var $aboutMe = $('#aboutMe');
    var $aboutMe2 = $('#aboutMe2');
    var $aboutMe3 = $('#aboutMe3');

    $aboutMe2.hide();
    $aboutMe3.hide();

    function hide1() {

        $aboutMe.delay('slow').fadeIn(1000);
        $aboutMe.fadeOut(2000, hide2);
    }



    function hide2() {

        $aboutMe2.fadeIn(1000);
        $aboutMe2.fadeOut(2000, hide3);
    }

    function hide3() {

        $aboutMe3.fadeIn(1000);
        // $aboutMe3.fadeOut(2000);

    }

    hide1();










    // $aboutMe = $('.aboutMe');
    // $aboutMe.hide();
    // var timeOut = setTimeout(function() {
    //     $aboutMe.fadeIn();
    // }, 2000);

    // var timeOut = setTimeout(function() {
    //     $aboutMe.css({'visibility': 'none'});
    //     $aboutMe.fadeOut('slow');
    // }, 4000);

    // $aboutMe2 = $('.aboutMe2');
    // $aboutMe2.hide();
    // var timeOut = setTimeout(function() {
    //     $aboutMe2.fadeIn();
    // }, 5000);


    // var timeOut = setTimeout(function() {
    //     $aboutMe.css({'display': 'none'});
    // }, 6000);


    // $first = $('#firstUrl');
    // $second = $('#secondUrl');
    // $button = $('.start');
    // $first.hide();
    // $second.hide();
    // $button.hide();
    // var timeOut = setTimeout(function() {
    //     $first.fadeIn();
    //     $second.fadeIn();
    //     $button.fadeIn();
    // }, 10000);


    // $(function() {
    // $('#baseUrl').click( function() {
    //     var furl = $('#firstUrl').val();
    //     var surl = $('#secondUrl').val();
    //     $('#firstUrl').val('');
    //     $('#secondUrl').val('');
    //     window.location = $(this).attr('href') + '/' + furl + '/' + surl;
    //     return false;
    //     });

    // });




});


