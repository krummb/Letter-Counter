const alph = Array.from(document.querySelectorAll("h3"));
const letters = [];
const input = document.getElementById("input");
let response = "";

//Push the individual letters into an array
for (let i = 0; i < alph.length; i++) {
  letters.push(alph[i].textContent);
}

//Get the input and arrange the letters.  Will need to test against the previous letter in the letterCount function

input.addEventListener("keyup", function (e) {
  response = e.target.value
    .toLowerCase()
    .replace(/[^\w]|_/g, "")
    .split("")
    .sort();

  let y = 0;
  let preVal = response[0];

  //Count the amount of times the letter appears and append to the proper element
  function letterCount(val) {
    let z = letters.indexOf(val);

    if (e.key === "Backspace") {
      e.preventDefault();
      input.value = "";
      y = 0;
      alph[z].lastElementChild.textContent = "";
      alph[z].classList.remove("active");
      return;
    } else if (letters[z] === val && preVal === val) {
      y++;
    } else if (letters[z] === val && preVal !== val) {
      preVal = val;
      y = 0;
      y++;
    }
    alph[z].lastElementChild.textContent = y;
    alph[z].classList.add("active");
  }

  response.forEach(letterCount);
});
