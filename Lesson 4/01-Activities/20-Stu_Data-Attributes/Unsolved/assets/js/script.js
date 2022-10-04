var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  var number = element.dataset.number

  if (element.matches(".box")) {
    if (element.dataset.state === "hidden") {
      element.dataset.state = "visible";
      element.innerHTML = number;
    }
    else {
      element.innerHTML =
      element.dataset.state = "hidden";
  }
}
});
