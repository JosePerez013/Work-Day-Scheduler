$(document).ready(function () {
  // variables for elements
  var dayEl = $("#currentDay");
  var notifyEl = $("#notify");
  var presentEl = $(".past");

  // Show current day on top of page
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  // Save button click listener for saving to localStorage
  $(".saveBtn").on("click", function () {
    var meetingText = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, meetingText);

    // show notification when saved
    $(".notification").removeClass("hide");
    $(".notification").addClass("show");

    // hide notification after 3 seconds
    setTimeout(function () {
      $(".notification").removeClass("show");
      $(".notification").addClass("hide");
    }, 3000);
  });

  function hourUpdater() {
    // get current number of hours
    var currentHour = dayjs().hour();
    console.log(currentHour);

    // loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // checks if the hour is less than current hour or not or equal to current hour
      if (blockHour < currentHour) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
        console.log("updated to past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
        console.log("updated to present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        console.log("updated to future");
      }
    });
  }
  //  Calls the hourUpdater function to run every 30 seconds
  hourUpdater();
  setInterval(hourUpdater, 30000);
  // Grab the localStorage for each hour and display to page when user comes back / refreshes
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
