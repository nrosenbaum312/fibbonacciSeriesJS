function printfib(){
    var num1 = 1;
    var num2 = 1;
  
    for(let i=0; i<10; i++){ 
      if(i==0 || i==1){
        console.log(1);
      }else{
        var newNum = num1+ num2;
      num1=num2;
      num2 = newNum;
      console.log(newNum);
      }
    }
} 

printfib();
