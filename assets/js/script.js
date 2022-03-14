// displays current date and time
var currentTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
$("#currentTime").html(currentTime);


// adds functionality to display background colors dependent on current time
function hourTracker() {
var currentHour = moment().hour();

$(".time-block").each(function () {
var blockTime = parseInt($(this).attr("id").split("hour")[1]);

if (blockTime < currentHour) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
    }
else  {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");

    }
if (blockTime === currentHour) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
    }
})
};


// saves items into local storage
$(document).ready(function () {

$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".time-block-description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

// retrieves items from local storage
$("#hour7 .time-block-description").val(localStorage.getItem("hour7"));
$("#hour8 .time-block-description").val(localStorage.getItem("hour8"));
$("#hour9 .time-block-description").val(localStorage.getItem("hour9"));
$("#hour10 .time-block-description").val(localStorage.getItem("hour10"));
$("#hour11 .time-block-description").val(localStorage.getItem("hour11"));
$("#hour12 .time-block-description").val(localStorage.getItem("hour12"));
$("#hour13 .time-block-description").val(localStorage.getItem("hour13"));
$("#hour14 .time-block-description").val(localStorage.getItem("hour14"));
$("#hour15 .time-block-description").val(localStorage.getItem("hour15"));
$("#hour16 .time-block-description").val(localStorage.getItem("hour16"));
$("#hour17 .time-block-description").val(localStorage.getItem("hour17"));
$("#hour18 .time-block-description").val(localStorage.getItem("hour18"));
$("#hour19 .time-block-description").val(localStorage.getItem("hour19"));
$("#hour20 .time-block-description").val(localStorage.getItem("hour20"));
$("#hour21 .time-block-description").val(localStorage.getItem("hour21"));
$("#hour22 .time-block-description").val(localStorage.getItem("hour22"));
$("#hour23 .time-block-description").val(localStorage.getItem("hour23"));
$("#hour24 .time-block-description").val(localStorage.getItem("hour24"));

}); 

hourTracker();






