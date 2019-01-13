var correct = 0;
var done = false;
var code = ['u', 'u', 'd', 'd', 'l', 'r', 'l', 'r', 'b', 'a', 's'];
var keyDown = false;

function checkInput(input) {
  if (!done) {
    if (code[correct] == input) {
      updateCorrect();
    } else {
      resetCorrect();
    }
  }
};
function updateCorrect() {
  correct++;
  $('#correct-' + correct).css('fill', 'red');
  if (correct == code.length) {
    done = true;
    $('.controller-start.controller-fill').css('fill', '');
    $('#konami-instructions').hide();
    $('#konami-done').show();
  }
};
function resetCorrect() {
  correct = 0;
  $('.correct').css('fill', '');
}

// Handle hover for controller buttons
$('.controller-hover').hover(function() {
  if (done) return;
  $(this).css('fill', 'red');
}, function() {
  if (done) return;
  $(this).css('fill', '');
});
$('.controller-a').hover(function() {
  if (done) return;
  $('.controller-a.controller-hover').css('fill', 'red');
}, function() {
  if (done) return;
  $('.controller-a.controller-hover').css('fill', '');
});
$('.controller-b').hover(function() {
  if (done) return;
  $('.controller-b.controller-hover').css('fill', 'red');
}, function() {
  if (done) return;
  $('.controller-b.controller-hover').css('fill', '');
});
$('.controller-start').hover(function() {
  if (done) return;
  $('.controller-start.controller-hover').css('fill', 'red');
}, function() {
  if (done) return;
  $('.controller-start.controller-hover').css('fill', '');
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
  if (done) return;
  if (keyDown) return;
  keyDown = true;
  var key = e.which;
  e.preventDefault;

  switch(key) {
    case 38:
      $('.controller-up').css('fill', 'red');
      checkInput('u');
      break;
    case 40:
      $('.controller-down').css('fill', 'red');
      checkInput('d');
      break;
    case 37:
      $('.controller-left').css('fill', 'red');
      checkInput('l');
      break;
    case 39:
      $('.controller-right').css('fill', 'red');
      checkInput('r');
      break;
    case 66:
      $('.controller-b.controller-fill').css('fill', 'red');
      checkInput('b');
      break;
    case 65:
      $('.controller-a.controller-fill').css('fill', 'red');
      checkInput('a');
      break;
    case 13:
      $('.controller-start.controller-fill').css('fill', 'red');
      checkInput('s');
      break;
    default:
      // No default needed
  }
  return false;
});

// Keyup events
$(document).keyup(function(e) {
  if (done) return;
  keyDown = false;
  var key = e.which;
  e.preventDefault;

  switch(key) {
    case 38:
      $('.controller-up').css('fill', '');
      break;
    case 40:
      $('.controller-down').css('fill', '');
      break;
    case 37:
      $('.controller-left').css('fill', '');
      break;
    case 39:
      $('.controller-right').css('fill', '');
      break;
    case 66:
      $('.controller-b.controller-fill').css('fill', '');
      break;
    case 65:
      $('.controller-a.controller-fill').css('fill', '');
      break;
    case 13:
      $('.controller-start.controller-fill').css('fill', '');
      break;
    default:
      // No default needed
  }
  return false;
});
