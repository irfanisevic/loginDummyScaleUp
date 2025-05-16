function togglePassword() {
    const input = document.getElementById("passwordInput");
    input.type = input.type === "password" ? "text" : "password";
  }

  function cekPass() {
    const password = "irfanjagocatur";
    const inputPass = document.getElementById("passwordInput").value;
    if (password == inputPass) {
      document.getElementById("message").innerText = `password betul`;
    } else {
      document.getElementById("message").innerText = `password salah`;
    }
  }

  document
    .getElementById("passwordInput")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        cekPass();
      }
    });