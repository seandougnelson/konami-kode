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
  $('.correct-' + correct).css('fill', 'red');
  if (correct == code.length) {
    done = true;
    $('.controller-hover').css('cursor', 'default');
    $('.controller-fill').not('.controller-border').css('fill', '#ff3b3f');
    $('#konami-instructions').hide();
    $('#konami-done').show();
  }
};
function resetCorrect() {
  correct = 0;
  $('.correct').css('fill', '');
};
function resetAll() {
    // Reset global variables
    correct = 0;
    done = false;

    // Reset text
    $('#konami-instructions').show();
    $('#konami-done').hide();
  
    // Reset controller fills and cursors
    $('.controller-fill').css('fill', '');
    $('.correct').css('fill', '');
    $('.controller-hover').css('cursor', 'pointer');
}

// Update fill color for controller buttons on hover
$(document).on({
  mouseenter: function () {
    if (done) return;
    $(this).css('fill', 'red');
  },
  mouseleave: function () {
    if (done) return;
    $(this).css('fill', '');
  }
}, '.controller-fill.controller-hover');
$(document).on({
  mouseenter: function () {
    if (done) return;
    $('.controller-start.controller-fill').css('fill', 'red');
  },
  mouseleave: function () {
    if (done) return;
    $('.controller-start.controller-fill').css('fill', '');
  }
}, '.controller-start-trigger');
$(document).on({
  mouseenter: function () {
    if (done) return;
    $('.controller-b.controller-fill').css('fill', 'red');
  },
  mouseleave: function () {
    if (done) return;
    $('.controller-b.controller-fill').css('fill', '');
  }
}, '.controller-b-trigger');
$(document).on({
  mouseenter: function () {
    if (done) return;
    $('.controller-a.controller-fill').css('fill', 'red');
  },
  mouseleave: function () {
    if (done) return;
    $('.controller-a.controller-fill').css('fill', '');
  }
}, '.controller-a-trigger');

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

$('#reset-button').click(function() {
  resetAll();
});
