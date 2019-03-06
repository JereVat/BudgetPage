function calculate(netIncome, savingTime, targetWealth, beginningWealth, targetInterest) {
  console.log('hei se toimii');
  var savingT = savingTime * 12;
  var monthlyInterest = targetInterest / 12;
  var n = monthlyInterest / math.pow(( 1 + monthlyInterest ), (savingT - 1));
  var a = beginningWealth * math.pow(( 1 + monthlyInterest ), (savingT + targetWealth));
  var t = a / ( 1 + monthlyInterest);
  var requiredSavings = n * t;

  var para = document.createElement("p");
  var myAppend = document.createTextNode("Total savings must be: " + requiredSavings);
  var getDiv = document.getElementById("reqSavings");
  para.appendChild(myAppend);
  document.body.appendChild(para);
}
