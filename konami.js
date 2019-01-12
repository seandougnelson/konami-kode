var correct = 0;
var code = ['u', 'u', 'd', 'd', 'l', 'r', 'l', 'r', 'b', 'a', 's'];
var keyDown = false;

function checkInput(input) {
  if (correct < code.length) {
    if (code[correct] == input) {
      updateCorrect();
    } else {
      resetCorrect();
    }
  } else {
    alert('Already done...');
  }
};
function updateCorrect() {
  correct++;
  $('#' + correct + '-correct').css('color', 'red');
  if (correct == code.length) {
    $('#done').css('color', 'red');
  }
};
function resetCorrect() {
  correct = 0;
  $('.correct').css('color', 'black');
}

// Handle start buttons' unusual hover events
// 1 and 2 should change color, but 3 should always be the same
$('#controller-start1').hover(function() {
  $('#controller-start2').css('background-color', 'red');
}, function() {
  $('#controller-start2').css('background-color', '');
});
$('#controller-start2').hover(function() {
  $('#controller-start1').css('background-color', 'red');
}, function() {
  $('#controller-start1').css('background-color', '');
});
$('#controller-start3').hover(function() {
  $(this).css('background-color', 'black');
  $('#controller-start1').css('background-color', 'red');
  $('#controller-start2').css('background-color', 'red');
}, function() {
  $('#controller-start1').css('background-color', '');
  $('#controller-start2').css('background-color', '');
});

// Button clicks
$('.controller-up').click(function() {
  checkInput('u');
});
$('.controller-down').click(function() {
  checkInput('d');
});
$('.controller-left').click(function() {
  checkInput('l');
});
$('.controller-right').click(function() {
  checkInput('r');
});
$('.controller-b').click(function() {
  checkInput('b');
});
$('.controller-a').click(function() {
  checkInput('a');
});
$('.controller-start').click(function() {
  checkInput('s');
});

// Keydown events
$(document).keydown(function(e) {
  e.preventDefault;
  if (keyDown) {
    return;
  }
  keyDown = true;
  var key = e.which;

  switch(key) {
    case 38:
      checkInput('u');
      $('.controller-up').css('background-color', 'red');
      break;
    case 40:
      checkInput('d');
      $('.controller-down').css('background-color', 'red');
      break;
    case 37:
      checkInput('l');
      $('.controller-left').css('background-color', 'red');
      break;
    case 39:
      checkInput('r');
      $('.controller-right').css('background-color', 'red');
      break;
    case 66:
      checkInput('b');
      $('.controller-b').css('background-color', 'red');
      break;
    case 65:
      checkInput('a');
      $('.controller-a').css('background-color', 'red');
      break;
    case 13:
      checkInput('s');
      $('#controller-start1').css('background-color', 'red');
      $('#controller-start2').css('background-color', 'red');
      break;
    default:
      // No default needed
  }
});

// Keyup events
$(document).keyup(function(e) {
  e.preventDefault;
  keyDown = false;
  var key = e.which;

  switch(key) {
    case 38:
    $('.controller-up').css('background-color', '');
      break;
    case 40:
    $('.controller-down').css('background-color', '');
      break;
    case 37:
    $('.controller-left').css('background-color', '');
      break;
    case 39:
    $('.controller-right').css('background-color', '');
      break;
    case 66:
    $('.controller-b').css('background-color', '');
      break;
    case 65:
    $('.controller-a').css('background-color', '');
      break;
    case 13:
      $('#controller-start1').css('background-color', '');
      $('#controller-start2').css('background-color', '');
      break;
    default:
      // No default needed
  }
});
