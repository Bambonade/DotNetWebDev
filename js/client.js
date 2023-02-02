$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');
    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');
        $("#product").text($(e.target).data("product"));
        $("#code").text($(e.target).data("code"));
    });

    $(document).keyup(function(e){
        if (e.keyCode == 27){
            $("#toast").toast("hide");
        }
    })
});