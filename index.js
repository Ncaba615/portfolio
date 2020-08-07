$(window).scroll(function () {
  if ($(this).scrollTop() > 900) {
    $("#dynamic").addClass("animate__animated animate__bounce");
  } else {
    $("#dynamic").removeClass("animate__animated animate__bounce");
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 900) {
    $("#sup").addClass("animate__animated animate__bounce");
  } else {
    $("#sup").removeClass("animate__animated animate__bounce");
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 600) {
    $("#places")
      .addClass("animate__animated animate__fadeIn")
      .removeClass("invisible");
  }
});



