function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateMobile(mobile) {
  const reMob = /^[0-9\b]+$/;
  return reMob.test(mobile);
}

function validateName(name) {
  const reName = /^[A-Za-z]+$/;
  return reName.test(name);
}

function validatePassword(pass) {
  const rePass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return rePass.test(pass);
}

function validateCheck() {
  const $result = $(".error-text");
  const email = $(".Email").val();
  $result.text("");
  if (email == "") {
    $result.show();
    $result.text("Please enter all the information");
  } else if (validateEmail(email)) {
    $result.hide();
    $("#uno").hide();
  } else {
    $result.show();
    $result.text("email is not valid :(");
  }
  return false;
}

function validate() {
  const $result = $(".error-text");
  let val = false;
  const email = $(".email").val();
  const mobile = $(".mobile").val();
  const name = $(".name").val();
  const sur = $(".sur").val();
  const pass = $(".pass").val();
  $result.text("");
  $(".val").each(function () {
    if ($(this).val() == "") {
      val = false;
      return false;
    } else val = true;
  });

  if (!val) {
    $result.show();
    $result.text("Please enter all the information");
  } else if (!validateEmail(email)) {
    $result.show();
    $result.text("Email is not valid :(");
  } else if (!validateMobile(mobile)) {
    $result.show();
    $result.text("Mobile is not valid :(");
  } else if (!validateName(name)) {
    $result.show();
    $result.text("Name is not valid :(");
  } else if (!validateName(sur)) {
    $result.show();
    $result.text("Surname is not valid :(");
  } else if (!validatePassword(pass)) {
    $result.show();
    $result.text(
      "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
    );
  } else if ($("#pass").val() !== $("#passRep").val()) {
    $result.show();
    $result.text("Passwords dont match");
  } else if (!validateName(sur)) {
    $result.show();
    $result.text("Surname is not valid :(");
  } else if ($("#flexCheckChecked").prop("checked") !== true) {
    $result.show();
    $result.text("Please agree to terms");
  } else {
    $result.hide();
    $(".verify-otp").show();
  }
  if (validateEmail(email)) $(".email").addClass("bg-check");
  else $(".email").removeClass("bg-check");
  if (validateMobile(mobile)) $(".mobile").addClass("bg-check");
  else $(".mobile").removeClass("bg-check");
  if (validateName(name)) $(".name").addClass("bg-check");
  else $(".name").removeClass("bg-check");
  if (validateName(sur)) $(".sur").addClass("bg-check");
  else $(".sur").removeClass("bg-check");
  if ($("#pass").val() === $("#passRep").val()) {
    if (validatePassword(pass)) $(".pass").addClass("bg-check");
    else $(".pass").removeClass("bg-check");
  }
  return false;
}

let validationLength = 10;

$(".mobile").on("keyup keydown change", function () {
  if ($(this).val().length > validationLength) {
    val = $(this)
      .val()
      .substr(0, $(this).val().length - 1);
    $(this).val(val);
  }
});

function sendCode() {
  $(".otp-cont").css("display", "flex");
  $("#sendVerification").hide();
  $(".val").prop("disabled", true);
}

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "Apr 31, 2021 00:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        ));
      //seconds
    }, 0);
})();

$("#check").on("click", validateCheck);

$("#submit").on("click", validate);

$("#sendVerification").on("click", sendCode);

$(document).ready(function () {});
