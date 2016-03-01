$(document).ready(function() {





    // $hi = $('.hi');
    // var timeOut = setTimeout(function() {
    //     $hi.css({'visibility': 'hidden'});
    // }, 6000);

    // $("#aboutMe2").hide();

    // function hide1() {
    //     $("#aboutMe").fadeIn(1000);
    //     $("#aboutMe").fadeOut(1000, hide2);
    // }

    // function hide2() {

    //     $("#aboutMe2").fadeIn(1000);
    //     $("#aboutMe2").fadeOut(1000, hide1);
    // }
    // hide1();

    $aboutMe = $('.aboutMe');
    $aboutMe.hide();
    var timeOut = setTimeout(function() {
        $aboutMe.fadeIn();
    }, 2000);

    var timeOut = setTimeout(function() {
        $aboutMe.css({'visibility': 'none'});
        $aboutMe.fadeOut('slow');
    }, 4000);

    $aboutMe2 = $('.aboutMe2');
    $aboutMe2.hide();
    var timeOut = setTimeout(function() {
        $aboutMe2.fadeIn();
    }, 5000);


    var timeOut = setTimeout(function() {
        $aboutMe.css({'display': 'none'});
    }, 6000);


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


