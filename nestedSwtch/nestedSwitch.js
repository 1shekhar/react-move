var text;
var date = new Date()
switch (date.getDay()) {
    case 1:
    case 2:
    case 3:
    default:
        text = "Looking forward to the Weekend";
        break;
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
          switch(date.getFullYear()){
          case 2015:
            text = "It is Weekend of last Year.";
          break;
          case 2016:
            text = "It is Weekend of this Year.";
          break;
          case 2017:
            text = "It is Weekend of next Year.";
          break;
          default:
          text = date.getDay();
          break;
        }
   
    break;
}


document.getElementById("demo").innerHTML = text;
