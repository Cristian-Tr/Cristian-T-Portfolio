$(document).ready(function () {


/*
  //h2 activity fields animated text
  var skills = ['FRONTEND DEVELOPMENT', 'SOFTWARE IMPLEMENTATION', 'APPLICATION MAINTENANCE'],
    part,
    i = 0,
    offset = 0,
    len = skills.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 135,
    speed = 15;
  var wordsSkills = function () {
    setInterval(function () {
      if (forwards) {
        if (offset >= skills[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = skills[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
      $('.activity-fields').text(part);
    }, speed);
  };

  $(document).ready(function () {
    wordsSkills();
  });
*/
  /*My SVG CT logo 
  var iterationCount = $('.ct-logo').css("animation-iteration-count");
  animate(iterationCount - 1)

  function animate(count) {
    if (count == 0) {
      $('.ct-logo').css({
        'animation': 'draw1 3.5s',
      });
    }
    if (count == 1) {
      $('.ct-logo').css({
        'animation': 'draw2 3.5s',
      });
    }
    if (count == 2) {
      $('.ct-logo').css({
        'animation': 'draw3 3.5s',
      });
    }
    $('.ct-logo:first').one("animationend", function () {
      if (count > 0)
        animate(count - 1)
      else
        animate(iterationCount - 1)
    })
  }
*/

  /*Apps counter
  setInterval(function () {
    $('.count').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2500,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }, 5300);
*/

  /*Rotating picture at click
  $(document).on('click', '#picture', function () {
    $(this).toggleClass('flipped');
  })

  //Social media buttons at hover
  $(".share").hover(function () {
    $(".share").toggleClass("visible");
  });
  $(".share").hover(function () {
    $(".social").addClass("visible")
  }, function () {
    $(".social").removeClass("visible")
  })
*/
})