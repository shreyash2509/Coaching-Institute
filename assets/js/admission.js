function class1(x){
  if(x==1){
    document.getElementById("1").style.display ="block";
    document.getElementById("2").style.display ="none";
    document.getElementById("3").style.display ="none";
    document.getElementById("o1").style.fontSize="22px";
    document.getElementById("o2").style.fontSize="16px";
    document.getElementById("o3").style.fontSize="16px";
  }
    else if(x==2){
      document.getElementById("2").style.display ="block";
      document.getElementById("1").style.display ="none";
      document.getElementById("3").style.display ="none";
      document.getElementById("o2").style.fontSize="22px";
      document.getElementById("o1").style.fontSize="16px";
      document.getElementById("o3").style.fontSize="16px";
    }
    else if(x==3){
      document.getElementById("3").style.display ="block";
      document.getElementById("2").style.display ="none";
      document.getElementById("1").style.display ="none";
      document.getElementById("o3").style.fontSize="22px";
      document.getElementById("o1").style.fontSize="16px";
      document.getElementById("o2").style.fontSize="16px";
    }
}
