$(document).ready(function () {


    $(".moveBtn").on("click", function () {
        var target = $(this).attr("target");
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        })
    })

})