//Business End Logic
function converter(numberInput) {
  debugger;
  var ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
  var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  var thousands = ["", "M", "MM", "MMM"]

  if (numberInput > 3999 || numberInput < 1) {
    alert("Please insert a number between 1 - 3,999");
  } else {
  splitUp = numberInput.toString().split("")
  splitUp.map(function() {
    return parseInt;
  })
  if (splitUp.length === 1) {
    splitUp[0] = ones[splitUp[0]];
  } else if (splitUp.length === 2) {
    splitUp[0] = tens[splitUp[0]];
    splitUp[1] = ones[splitUp[1]];
  } else if (splitUp.length === 3) {
    splitUp[0] = hundreds[splitUp[0]];
    splitUp[1] = tens[splitUp[1]];
    splitUp[2] = ones[splitUp[2]];
  } else if (splitUp.length === 4) {
    splitUp[0] = thousands[splitUp[0]];
    splitUp[1] = hundreds[splitUp[1]];
    splitUp[2] = tens[splitUp[2]];
    splitUp[3] = ones[splitUp[3]];
  }
  var finalNumbers = splitUp.join("");
  return finalNumbers;
}
};

//User Interface Logic
$(document).ready(function() {
  $("form#Roman").submit(function(event) {
    event.preventDefault();
    debugger;
    var numberInput = $("input#entr").val();
    var numberOutput = converter(numberInput);

    $(".convertedResult").text(numberOutput);
    $("#result").show();
  });
});
