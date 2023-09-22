$(".portfolio button").click(function (e) {
  const dataValue = $(this).attr("data");
  const allDivs = $(".portfolio > .row > div");
  if (dataValue === "all") {
    allDivs.show();
    return;
  }
  const showDivs = $(`.portfolio > .row > div[data=${dataValue}]`);
  const hideDivs = allDivs.not(showDivs);
  showDivs.show();
  hideDivs.hide();
});

$("form").validate({
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
    },

    message: {
      required: true,
    },
  },
  messages: {
    name: {
      required: "Please enter your name",
    },
    email: {
      required: "Please enter your password",
    },
    message: {
      required: "Please enter your message",
    },
  },
});

$(window).scroll(function () {
  if ($(window).scrollTop() > $(".portfolio").offset().top - 1) {
    $(".navbar").addClass("fixed-top");
    $("header").addClass("dummy-padding-top");
  } else {
    $(".navbar").removeClass("fixed-top");
    $("header").removeClass("dummy-padding-top");
  }
});
