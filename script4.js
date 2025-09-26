function register() {
  const user = document.getElementById("regUser").value.trim();
  const pass = document.getElementById("regPass").value;

  if (!user || !pass) return alert("Please fill all fields.");

  if (localStorage.getItem(user)) {
    alert("Username already exists!");
    return;
  }

  localStorage.setItem(user, pass);  
  alert("Registration successful! Please login.");
  document.getElementById("regUser").value = "";
  document.getElementById("regPass").value = "";
}

function login() {
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value;

  if (!user || !pass) return alert("Please fill all fields.");

  const savedPass = localStorage.getItem(user);
  if (savedPass && savedPass === pass) {
    document.getElementById("userName").textContent = user;
    showDashboard();
  } else {
    alert("Invalid username or password!");
  }
}

function logout() {
  hideDashboard();
}

function showDashboard() {
  document.getElementById("registerBox").classList.add("hidden");
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}

function hideDashboard() {
  document.getElementById("registerBox").classList.remove("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
  document.getElementById("dashboard").classList.add("hidden");
}
