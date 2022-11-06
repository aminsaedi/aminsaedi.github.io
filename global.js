const USERNAME = "amin@proj.ca";
const PASSWORD = "123";

function login() {
  const username_input_value = $("#username").val();
  const password_input_value = $("#password").val();
  if (username_input_value === USERNAME && password_input_value === PASSWORD) {
    // save is logged in to cookie
    Cookies.set("is_logged_in", true);
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password");
  }
}

function logout() {
  Cookies.remove("is_logged_in");
  window.location.href = "index.html";
}

function showLoginForm() {
  if (Cookies.get("is_logged_in") === "true") {
    $("#login").hide();
    $("#logout").show();
  } else {
    $("#login").show();
    $("#logout").hide();
  }
}

$(document).ready(function () {
  showLoginForm();
  $("#login_btn").click(() => login());
  $("#logout_btn").click(() => logout());
});
