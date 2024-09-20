var a = new Date().getDay();
var b = document.getElementById("result");
switch(a){
    case 0:
    case 6:
        b.innerHTML = "weekendddd";
        break;
    case 1:
    case 2:
    case 3:    
        b.innerHTML = "waiting for the weekend";
        break;
    case 4:
    case 5:
        b.innerHTML = "almost weekend ";
        break;
}