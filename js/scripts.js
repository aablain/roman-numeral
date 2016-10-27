//Business End Logic
function converter(numberInput) {
  debugger;
  var ones = ["I", "II", "III", "IV", "VI", "VII", "VIII", "IX"]
  var tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
  var hundresds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "MC"]
  var thousands = ["M", "MM", "MMM"]

  if (numberInput > 3999 || numberInput < 1) {
    alert("Please insert a number between 1 - 3,999");
  }
  
};

//User Interface Logic
$(document).ready(function() {
  $("form#Roman").submit(function(event) {
    event.preventDefault();
    debugger;
    var numberInput = $("input#entr").val();
    var numberOutput = converter(numberInput);

    $(".convertedResult").text(result);
    $("#result").show();
  });
});
