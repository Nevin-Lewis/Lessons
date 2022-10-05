var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var rootEl = $('#shopping-list');
var input = $('input[name="shopping-input"');



// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function addListItem(event) {
    event.preventDefault();
    var LiEl = $('<li>');
    LiEl.text(input.val());
    rootEl.append(LiEl);
    document.getElementById("shopping-form").reset();
    // vs. event.preventDefault();
    // rootEl.append('<li>' + input.val() + '</li>');
    // console.log(input.val());
    // document.getElementById("shopping-form").reset();
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', addListItem);