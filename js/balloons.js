$(function () {
    addRandomClasses();
    $('#birthday').pickadate({ format: 'mmmm, d' });
});

// uncheck all checkboxes (FireFox)
$('.form-check-input').each(function () {
    $(this).prop('checked', false);
});

const colors = ["red", "green", "blue"];

$('#selectAll').on('click', function(e) {
    if ($('#red').is(":checked") && $('#green').is(":checked") && $('#blue').is(":checked")){
        colors.forEach(color => {
            $('#' + color).prop( "checked", false )
            $('#' + color + 'Img').addClass('animate__animated animate__bounceOutUp');  
        });
        $('#selectText').html("Select All");
    }
    else {
        colors.forEach(color => {
            $('#' + color).prop( "checked", true )
            $('#' + color + 'Img').css('visibility', 'visible')
            $('#' + color + 'Img').removeClass().addClass('animate__animated animate__bounceInDown')   
        });
        $('#selectText').html("Unselect All");
    }
})

// event listener for check/uncheck
$('.form-check-input').on('change', function () {
    // make the image visible
    $('#' + this.id + 'Img').css('visibility', 'visible')
    // animate balloon in/out based on checkbox
    $(this).is(':checked') ?
        $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
        $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
});

let animateCss = [
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shakeX',
    'shakeY',
    'headShake',
    'swing',
    'tada',
    'wobble',
    'jello',
    'heartBeat'
];

function addRandomClasses() {
    let attentionSeeker = $('#attentionSeeker');
    let randomSelection = animateCss[Math.ceil(Math.random() * animateCss.length - 1)];
    attentionSeeker.addClass('animate__' + randomSelection);
};

$('#submit').on('click', function (e) {
    e.preventDefault();
    if ($('.form-check-input').is(':checked') == false) { $('#toast').toast({ autohide: false }).toast('show'); }
});

colors.forEach(color => {
    $("#" + color + "Full").on("mouseover", function () {
        $("h1").css("color", color);
    });
    $("#" + color + "Full").on("mouseout", function () {
        $("h1").css("color", "grey");
    });
})