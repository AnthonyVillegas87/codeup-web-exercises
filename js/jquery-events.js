"use strict";
$(document).ready( () => {
    $("#clickMe").click(function () {
       alert("You Clicked Me!")
    });

    $("#clickToo").on("click", function() {
        alert("Yay You clicked me too!");
    });

    $(".simple-box").hover(
        function () {
            $(this).css('outline', '8px ridge rebeccapurple');
        },
        function () {
            $(this).css('outline', 'none');
        }
    );



    $(".simple-box").mouseenter(function() {
        $(this).css("background-color", "hot-pink");
    });
    $(".simple-box").mouseleave(function() {
        $(this).css("background-color", "white");
    });


    // $(document).keydown(function () {
    //     alert('key down!');
    // });
    // $(document).keyup(function () {
    //     alert('key up!')
    // })

    $(document).on('keyup', function() {
        alert("key up!")
    })




    $('#createElement').on('click', function() {
        $(this).after("<button class='does-work'>Click me</button>")
    });

//     $('.does-work').on('click', function () {
//         alert("Clicked!");
//     });

    // $(document).on('click','.does-work', () => {
    //     alert("now you can click me!")
    // })

    $('#dynamic').on('click','.does-work', () => {
        alert("now you can click me!")
    });



 });