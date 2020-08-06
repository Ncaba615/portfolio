$(window).scroll(function () {
  if ($(this).scrollTop() > 1075) {
    $("#dynamic").addClass("animate__animated animate__bounce");
  } else {
    $("#dynamic").removeClass("animate__animated animate__bounce");
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1075) {
    $("#sup").addClass("animate__animated animate__bounce");
  } else {
    $("#sup").removeClass("animate__animated animate__bounce");
  }
});
