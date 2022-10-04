
function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  document.querySelector("#code").innerHTML = event.code;
  document.querySelector("#key").innerHTML = event.key;
};
document.addEventListener("keydown", keydownAction )

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
};

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

