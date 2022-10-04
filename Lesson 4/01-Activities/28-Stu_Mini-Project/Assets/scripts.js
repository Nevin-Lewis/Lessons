var guessword = ["j","a","v","a","s","c","r","i","p","t"];
var guess_space = document.querySelector("#guess_space");
for (i=0; i < guessword.length; i++) {
    var guess_wor = guessword[i];

    var li = document.createElement("li");
    li.textContent = guess_wor;
    li.setAttribute("data-index", i);
    
    // li.setAttribute("display=none", i);

    guess_space.appendChild(li);
} 