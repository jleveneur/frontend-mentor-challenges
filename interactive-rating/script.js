var button = document.querySelector(".btn-submit");

button.addEventListener("click", () => {
  var result = document.querySelector("input[name='rates']:checked");

  if (result) {
    document.querySelector(".rating-state").style.display = "none";

    document.querySelector(".thank-you-state").style.display = "flex";

    var selectedRate = document.querySelector("#selected-rate");

    selectedRate.innerHTML = result.value;
  }
});
