function toggleDarkMode() {
  var element = document.body;
  var x = document.getElementById("message");

  element.classList.toggle("dark-mode");
  
  if (x.innerHTML === "Você está no modo claro!") {
    x.innerHTML = "Você está no modo escuro!";
  } else {
    x.innerHTML = "Você está no modo claro!";
  }
}
