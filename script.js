document.addEventListener("DOMContentLoaded", function () {
  var inputs = document.querySelectorAll("input, textarea");

  inputs.forEach(function (input) {
    input.addEventListener("focus", function () {
      this.dataset.placeholder = this.placeholder;
      this.placeholder = "";
    });

    input.addEventListener("blur", function () {
      if (this.value === "") {
        this.placeholder = this.dataset.placeholder;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach((input, index) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        let nextInput = inputs[index + 1];
        if (nextInput) {
          nextInput.focus();
        }
      }
    });
  });
});
