$(window).on('load', function () {
  var idArray = [hour9El, hour10El, hour11El, hour12El, hour1El, hour2El, hour3El, hour4El, hour5El, ]
  var clockValue = dayjs().format('H')
  console.log(clockValue)
 var hour9El = $('#hour-9');
 var hour10El = $('#hour-10');
 var hour11El = $('#hour-11');
 var hour12El = $('#hour-12');
 var hour1El = $('#hour-1');
 var hour2El = $('#hour-2');
 var hour3El = $('#hour-3');
 var hour4El = $('#hour-4');
 var hour5El = $('#hour-5');

 if (clockValue > 9) {
  $(hour9El).attr('row time-block past');
 }
  else if (clockValue === 9) {
    $(hour9El).attr('row time-block present');
  } else {
    $(hour9El).attr('row time-block future');
  }
 }

//   myContainer.attr('id')
//  $.each($(idArray), function(item, value) {
//   item += 9
//   var idByThis = $(this).attr('id')

 
 

 

})
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').click(function() {
      return ($(this).parent().attr('id'));
      
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var timeNow = dayjs().format('H')
  // if (timeNow > )

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  
  $('#currentDay').text(dayjs().format('dddd MMMM DD YYYY'))
});


