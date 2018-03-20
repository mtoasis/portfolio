$(document).ready(function () {


    $(".moveBtn").on("click", function () {
        var target = $(this).attr("target");
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        })
    })

    $("#pfImg1").hover(function(){
        $(this).attr("src", "assets/img/mobilescp.gif")
    })

    $("#pfImg1").mouseout(function(){
        $(this).attr("src", "assets/img/mbsp.png")
    })

})