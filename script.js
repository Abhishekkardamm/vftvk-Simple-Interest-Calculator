function updateRate() {
    var first = parseInt(document.getElementById("principal").value);
    var second = parseInt(document.getElementById("rate").value);
    var third = parseInt(document.getElementById("years").value);
  
    var final = (first * second * third) / 100;
  
    var years = new Date().getFullYear() + parseInt(third);
  
    var Full_info =
      "If you deposit " +
      first +
      "<br/>" +
      "at an intrest rate of  " +
      second +
      " %" +
      "<br/>" +
      " You will receive an amount of " +
      final +
      "," +
      "<br/>" +
      " in the year " +
      years;
  
    document.getElementById("result").innerHTML = Full_info;
  }
  function updateRate() {
    var first = parseInt(document.getElementById("principal").value);
    var second = parseInt(document.getElementById("rate").value);
    var third = parseInt(document.getElementById("years").value);
  
    var final = (first * second * third) / 100;
  
    var years = new Date().getFullYear() + parseInt(third);
  
    var Full_info =
      "If you deposit " +
      first +
      "<br/>" +
      "at an intrest rate of  " +
      second +
      " %" +
      "<br/>" +
      " You will receive an amount of " +
      final +
      "," +
      "<br/>" +
      " in the year " +
      years;
  
    document.getElementById("result").innerHTML = Full_info;
  }
  