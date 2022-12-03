function setHelperText() {
  $("#signup_username_help").text("Correct username is: " + USERNAME);
  $("#signup_password_help").text("Correct password is: " + PASSWORD);
}

function signup() {
  const username_input_value = $("#signup_username").val();
  const password_input_value = $("#signup_password").val();
  if (username_input_value === USERNAME && password_input_value === PASSWORD) {
    // save is logged in to cookie
    Cookies.set("is_logged_in", true);
    window.location.href = "index.html";
  } else {
    alert("Incorrect username or password for signup");
    window.location.href = "signup.html";
  }
}

$(document).ready(function () {
  setHelperText();
  $("#signup_btn").click(() => signup());
});
