$(document).ready(function () {


    //Click event to insert someone's name at the end in the Issues area if you want to
    $('.button2').click(function (name) {
        var name = $("#here").val();
        $(".output").html(name + "");

    })


//Hiding "reason"
$('.reason1').hide();
$('.reason2').hide();

//Clicking "Why Call" and a div comes up 
$('.important1').click(function () {
    $('.reason1').show();
})

//Clicking "Why Call" and a div comes up 
$('.important2').click(function () {
    $('.reason2').show();
})


    //Hiding all the different script--issues so they are defaulted to be hidden until clicked 
    $('.script--issue1').hide();
    $('.script--issue2').hide();
    $('.script--issue3').hide();
    $('.script--issue4').hide();



    //Click function that will show the scripts

    $('.issue1').click(function () {
        $('.issue1').find('.script--issue1').slideToggle(300);
    })
})

$('.issue2').click(function () {
    $('.issue2').find('.script--issue2').slideToggle(300);
})


$('.issue3').click(function () {
    $('.issue3').find('.script--issue3').slideToggle(300);
})


$('.issue4').click(function () {
    $('.issue4').find('.script--issue4').slideToggle(300);
})




