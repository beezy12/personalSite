;$(document).ready(function() {





    $hi = $('.hi');
    var timeOut = setTimeout(function() {
        // $hi.fadeOut();
        $hi.css({'visibility': 'hidden'});
    }, 10000);

    $aboutMe = $('.aboutMe');
    $aboutMe.hide();
    var timeOut = setTimeout(function() {
        $aboutMe.fadeIn();
    }, 3000);

    $myProfile = $('.myProfile');
    $myProfile.hide();
    var timeOut = setTimeout(function() {
        $myProfile.fadeIn();
    }, 2000);

    $first = $('#firstUrl');
    $second = $('#secondUrl');
    $button = $('.start');
    $first.hide();
    $second.hide();
    $button.hide();
    var timeOut = setTimeout(function() {
        $first.fadeIn();
        $second.fadeIn();
        $button.fadeIn();
    }, 10000);


    $(function() {
    $('#baseUrl').click( function() {
        var furl = $('#firstUrl').val();
        var surl = $('#secondUrl').val();
        $('#firstUrl').val('');
        $('#secondUrl').val('');
        window.location = $(this).attr('href') + '/' + furl + '/' + surl;
        return false;
        });

    });




});


