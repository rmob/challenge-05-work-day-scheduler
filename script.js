$(window).on('load', function () {
  var idArray = [hour9El, hour10El, hour11El, hour12El, hour1El,
                hour2El, hour3El, hour4El, hour5El, ]
 var clockValue = dayjs().format('H')
   console.log(clockValue)
 var hour9El = $('#9');
 var hour10El = $('#10');
 var hour11El = $('#11');
 var hour12El = $('#12');
 var hour1El = $('#13');
 var hour2El = $('#14');
 var hour3El = $('#15');
 var hour4El = $('#16');
 var hour5El = $('#17');

 var btnEl = $('.btn')
 var newEvent = $('textarea').val()

  
 

  //-------CHANGE COLOR ACCORDING TO CURRENT TIME ---------

  if (Number(hour9El.attr('id')) < clockValue) {
    hour9El.attr('class', 'row time-block past')
  } else if (Number(hour9El.attr('id')) == clockValue) {
    hour9El.attr('class', 'row time-block present')
  } else {
    hour9El.attr('class', 'row time-block future')
  }
  
  if (Number(hour10El.attr('id')) < clockValue) {
    hour10El.attr('class', 'row time-block past')
  } else if (Number(hour10El.attr('id')) == clockValue) {
    hour10El.attr('class', 'row time-block present')
  } else {
    hour10El.attr('class', 'row time-block future')
  }
  
  if (Number(hour11El.attr('id')) < clockValue) {
    hour11El.attr('class', 'row time-block past')
  } else if (Number(hour11El.attr('id')) == clockValue) {
    hour11El.attr('class', 'row time-block present')
  } else {
    hour11El.attr('class', 'row time-block future')
  }
  
  if (Number(hour12El.attr('id')) < clockValue) {
    hour12El.attr('class', 'row time-block past')
  } else if (Number(hour12El.attr('id')) == clockValue) {
    hour12El.attr('class', 'row time-block present')
  } else {
    hour12El.attr('class', 'row time-block future')
  }
  
  if (Number(hour12El.attr('id')) < clockValue) {
    hour12El.attr('class', 'row time-block past')
  } else if (Number(hour12El.attr('id')) == clockValue) {
    hour12El.attr('class', 'row time-block present')
  } else {
    hour12El.attr('class', 'row time-block future')
  }
  
  if (Number(hour1El.attr('id')) < clockValue) {
    hour1El.attr('class', 'row time-block past')
  } else if (Number(hour1El.attr('id')) == clockValue) {
    hour1El.attr('class', 'row time-block present')
  } else {
    hour1El.attr('class', 'row time-block future')
  }
  
  if (Number(hour2El.attr('id')) < clockValue) {
    hour2El.attr('class', 'row time-block past')
  } else if (Number(hour2El.attr('id')) == clockValue) {
    hour2El.attr('class', 'row time-block present')
  } else {
    hour2El.attr('class', 'row time-block future')
  }
  
  if (Number(hour3El.attr('id')) < clockValue) {
    hour3El.attr('class', 'row time-block past')
  } else if (Number(hour3El.attr('id')) == clockValue) {
    hour3El.attr('class', 'row time-block present')
  } else {
    hour3El.attr('class', 'row time-block future')
  }
  
  if (Number(hour4El.attr('id')) < clockValue) {
    hour4El.attr('class', 'row time-block past')
  } else if (Number(hour4El.attr('id')) == clockValue) {
    hour4El.attr('class', 'row time-block present')
  } else {
    hour4El.attr('class', 'row time-block future')
  }
  
  if (Number(hour5El.attr('id')) < clockValue) {
    hour5El.attr('class', 'row time-block past')
  } else if (Number(hour5El.attr('id')) == clockValue) {
    hour5El.attr('class', 'row time-block present')
  } else {
    hour5El.attr('class', 'row time-block future')
  }

    // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // TODO: Add code to display the current date in the header of the page.
  
  $('#currentDay').text(dayjs().format('dddd MMMM DD YYYY'))

  $(btnEl).click(function () {
     var parentId = $(this).parent().attr('id')
     console.log('parent id: ' + parentId)
     var siblingEl = $(this).siblings().val()
     window.localStorage.setItem(parentId, JSON.stringify(siblingEl))
    //  window.localStorage.setItem('new event', inputText)
  
   })
  
});


