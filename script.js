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
 var textAreaEl = ('textarea')



 

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
  
  $('#currentDay').text(dayjs().format('dddd MMMM DD YYYY'))

  $(btnEl).click(function (event) {
    event.preventDefault()
    var parentId = $(this).parent().attr('id')
    textAreaEl = $(this).prev('textarea').val()

    window.localStorage.setItem(parentId, textAreaEl)
   
    
    localStorage.getItem(parentId, value)
    $(this).prev('textarea').val(value)
    

    
   })
 

})






